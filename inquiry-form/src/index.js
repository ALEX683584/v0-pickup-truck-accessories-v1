import { EmailMessage } from "cloudflare:email";

const DESTINATION_EMAIL = "auto683584alex@gmail.com";
const SENDER_EMAIL = "noreply@tobekin.com";

const htmlForm = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>B2B Tonneau Cover Inquiry | TOBEKIN</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-900 min-h-screen flex flex-col justify-center items-center p-4">
  <div class="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">TOBEKIN TONNEAU COVER</h1>
      <p class="text-sm text-gray-500 mt-1">B2B Purchase Inquiry & Wholesale Sourcing</p>
    </div>
    
    <div id="status-message" class="hidden mb-6 p-4 rounded-lg text-sm font-medium"></div>

    <form id="inquiry-form" class="space-y-5">
      <div>
        <label class="block text-xs font-semibold uppercase text-gray-600 mb-1">Name / Company *</label>
        <input type="text" name="name" required placeholder="Your name or company" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition">
      </div>

      <div>
        <label class="block text-xs font-semibold uppercase text-gray-600 mb-1">Business Email *</label>
        <input type="email" name="email" required placeholder="buyer@company.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition">
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold uppercase text-gray-600 mb-1">Product / Pickup Model</label>
          <input type="text" name="pickupModel" placeholder="e.g. Ford F-150 5.5ft" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition">
        </div>
        <div>
          <label class="block text-xs font-semibold uppercase text-gray-600 mb-1">Phone</label>
          <input type="text" name="phone" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition">
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold uppercase text-gray-600 mb-1">B2B Inquiry Details *</label>
        <textarea name="message" required rows="4" placeholder="Tell us your target quantity, truck fitments, and sourcing needs..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"></textarea>
      </div>

      <button type="submit" id="submit-btn" class="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition duration-200">
        Send B2B Inquiry
      </button>
    </form>
  </div>

  <script>
    const form = document.getElementById('inquiry-form');
    const btn = document.getElementById('submit-btn');
    const msg = document.getElementById('status-message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Sending...';
      msg.classList.add('hidden');

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok && result.success) {
          msg.className = 'mb-6 p-4 rounded-lg text-sm font-medium bg-green-50 text-green-800 border border-green-200';
          msg.textContent = 'Thank you! Your inquiry has been sent successfully.';
          msg.classList.remove('hidden');
          form.reset();
        } else {
          throw new Error(result.error || 'Failed to send inquiry.');
        }
      } catch (err) {
        msg.className = 'mb-6 p-4 rounded-lg text-sm font-medium bg-red-50 text-red-800 border border-red-200';
        msg.textContent = err.message || 'Error sending inquiry. Please try again.';
        msg.classList.remove('hidden');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Send B2B Inquiry';
      }
    });
  </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (request.method === "GET") {
      return new Response(htmlForm, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (request.method === "POST") {
      try {
        let data = {};
        const contentType = request.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          data = await request.json();
        } else if (contentType.includes("form-data") || contentType.includes("urlencoded")) {
          const formData = await request.formData();
          data = Object.fromEntries(formData.entries());
        }

        const name = (data.name || "N/A").toString().trim();
        const email = (data.email || "N/A").toString().trim();
        const pickupModel = (data.pickupModel || "N/A").toString().trim();
        const phone = (data.phone || "N/A").toString().trim();
        const subjectStr = (data.subject || `B2B Inquiry from ${name}`).toString().trim();
        const messageStr = (data.message || "N/A").toString().trim();

        const emailSubject = `[TOBEKIN Inquiry] ${subjectStr}`;
        const emailBody = [
          `New B2B Inquiry Received:`,
          ``,
          `Name / Company: ${name}`,
          `Business Email: ${email}`,
          `Product / Pickup Model: ${pickupModel}`,
          `Phone: ${phone}`,
          `Subject: ${subjectStr}`,
          ``,
          `Message Details:`,
          `${messageStr}`,
          ``,
          `---`,
          `Submitted At: ${new Date().toISOString()}`,
          `Target Recipient: ${DESTINATION_EMAIL}`
        ].join("\n");

        const mimeMessage = [
          `From: TOBEKIN Inquiry <${SENDER_EMAIL}>`,
          `To: ${DESTINATION_EMAIL}`,
          `Subject: ${emailSubject}`,
          `Content-Type: text/plain; charset=utf-8`,
          ``,
          emailBody
        ].join("\r\n");

        let emailSent = false;
        let emailError = null;

        if (env.EMAIL) {
          try {
            const message = new EmailMessage(
              SENDER_EMAIL,
              DESTINATION_EMAIL,
              mimeMessage
            );
            await env.EMAIL.send(message);
            emailSent = true;
          } catch (err) {
            console.error("Failed to send email via Cloudflare Email Routing:", err);
            emailError = err instanceof Error ? err.message : String(err);
          }
        } else {
          console.warn("env.EMAIL binding not found");
          emailError = "EMAIL binding not configured";
        }

        return new Response(
          JSON.stringify({
            success: true,
            emailSent,
            emailError,
            message: "Inquiry processed successfully",
          }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        console.error("Error processing inquiry:", err);
        return new Response(
          JSON.stringify({
            success: false,
            error: err instanceof Error ? err.message : "Internal Error",
          }),
          {
            status: 500,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  },
};
