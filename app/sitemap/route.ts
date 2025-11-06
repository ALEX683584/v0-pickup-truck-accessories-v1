import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 获取当前域名，支持本地开发和生产环境
  const hostname = request.headers.get('host') || 'cover.tobekin.com';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${protocol}://${hostname}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}