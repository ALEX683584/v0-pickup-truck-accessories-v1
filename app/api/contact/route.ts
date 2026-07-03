import { NextResponse } from "next/server"

export const runtime = "nodejs"

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const name = (body.name ?? "").trim()
    const email = (body.email ?? "").trim()
    const subject = (body.subject ?? "").trim()
    const message = (body.message ?? "").trim()

    // Validation
    const errors: Record<string, string> = {}
    if (!name) errors.name = "Name is required"
    if (!email) errors.email = "Email is required"
    else if (!isValidEmail(email)) errors.email = "Invalid email address"
    if (!message) errors.message = "Message is required"
    else if (message.length < 10) errors.message = "Message must be at least 10 characters"
    if (message.length > 5000) errors.message = "Message is too long (max 5000 characters)"

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, errors },
        { status: 400 }
      )
    }

    // Compose email content
    const emailSubject = subject
      ? `[Contact] ${subject}`
      : `[Contact] New message from ${name}`
    const emailBody = `
New contact form submission:

Name:    ${name}
Email:   ${email}
Subject: ${subject || "(no subject)"}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
IP: ${request.headers.get("x-forwarded-for") || "unknown"}
User-Agent: ${request.headers.get("user-agent") || "unknown"}
`.trim()

    // Send email using Resend (preferred) or SMTP fallback
    const resendApiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL || "admin@tobekin.com"
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (resendApiKey) {
      // Use Resend API
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Contact Form <noreply@tobekin.com>",
          to: [contactEmail],
          reply_to: email,
          subject: emailSubject,
          text: emailBody,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error("Resend error:", err)
        return NextResponse.json(
          { ok: false, error: "Failed to send email" },
          { status: 500 }
        )
      }
    } else if (smtpHost && smtpUser && smtpPass) {
      // SMTP fallback using dynamic import (so nodemailer only loads when needed)
      const nodemailer = await import("nodemailer")
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: `"Contact Form" <${smtpUser}>`,
        to: contactEmail,
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      })
    } else {
      // No email service configured — log to console and pretend success.
      // In production, set RESEND_API_KEY or SMTP_* env vars in Vercel.
      console.warn(
        "[contact] No email service configured. Set RESEND_API_KEY or SMTP_HOST/USER/PASS in environment variables."
      )
      console.log("Contact form submission:", { name, email, subject, message })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  )
}
