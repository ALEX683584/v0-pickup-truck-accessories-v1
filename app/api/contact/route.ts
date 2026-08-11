import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ContactFormData {
  name?: string;
  email?: string;
  pickupModel?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: unknown;
}

export async function POST(req: Request) {
  try {
    // 1. 解析前端提交的数据
    const data = (await req.json()) as ContactFormData;

    const name = typeof data.name === 'string' ? data.name.trim() : '';
    const email = typeof data.email === 'string' ? data.email.trim() : '';
    const message = typeof data.message === 'string' ? data.message.trim() : '';

    // 基础参数校验
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email address';
    if (!message) errors.message = 'Message is required';
    else if (message.length < 10) errors.message = 'Message must be at least 10 characters';
    if (message.length > 5000) errors.message = 'Message is too long (max 5000 characters)';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, success: false, errors, error: 'Validation failed' },
        { status: 400 }
      );
    }

    // 环境变量与目标配置
    const targetEmail = process.env.CONTACT_EMAIL || 'auto683584alex@gmail.com';
    const CF_WORKER_URL = process.env.CF_WORKER_URL || 'https://inquiry.tobekin.com';
    const FEISHU_WEBHOOK_URL =
      process.env.FEISHU_WEBHOOK_URL ||
      'https://open.feishu.cn/open-apis/bot/v2/hook/25ae59af-a5e0-47e0-9ede-1902f0e7735b';

    // 2. 构建数据负载与飞书 Webhook 负载
    const payload = {
      ...data,
      targetEmail,
      to: targetEmail,
    };

    const feishuPayload = {
      msg_type: 'text',
      content: {
        text: `【新表单询盘提交 / New Form Inquiry】\n目标邮箱 (Target Email): ${targetEmail}\n姓名 (Name): ${data.name || 'N/A'}\n邮箱 (Email): ${data.email || 'N/A'}\n车型 (Pickup Model): ${data.pickupModel || 'N/A'}\n电话 (Phone): ${data.phone || 'N/A'}\n主题 (Subject): ${data.subject || 'N/A'}\n留言内容 (Message):\n${data.message || 'N/A'}\n\n[详细数据 / Raw Payload]\n${JSON.stringify(payload, null, 2)}`,
      },
    };

    // 3. 并发推送到 CF Worker 和飞书 Webhook
    const fetchPromises: Promise<Response>[] = [];

    if (CF_WORKER_URL) {
      fetchPromises.push(
        fetch(CF_WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      );
    }

    fetchPromises.push(
      fetch(FEISHU_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feishuPayload),
      })
    );

    // 4. 并发 await 完成
    const results = await Promise.all(fetchPromises);

    // 5. 错误记录
    results.forEach((res, idx) => {
      if (!res.ok) {
        console.warn('部分推送可能未成功:', {
          target: idx === 0 && CF_WORKER_URL ? 'CF Worker' : 'Feishu Webhook',
          status: res.status,
        });
      }
    });

    // 6. 返回给前端
    return NextResponse.json({
      ok: true,
      success: true,
      message: '数据已成功分发至 Worker 和飞书',
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    console.error('Vercel Function 执行错误:', error);
    return NextResponse.json(
      { ok: false, success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
