import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SITE } from "../site";

const contactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  source: z.string().min(1),
  message: z.string().min(1),
});

type ContactFormData = z.infer<typeof contactSchema>;

function buildPlainTextMessage(data: ContactFormData) {
  return [`New message from ${data.name}`, ``, `Name: ${data.name}`, `Phone: ${data.phone}`, `Email: ${data.email}`, `How they heard about us: ${data.source}`, ``, `Message:`, data.message].join("\n");
}

function buildHtmlMessage(data: ContactFormData) {
  return `<!doctype html>
<html>
  <body>
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>How they heard about us:</strong> ${data.source}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${data.message}</p>
  </body>
</html>`;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(() => contactSchema)
  .handler(async ({ data }) => {
    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL ?? `no-reply@topchoice-health.com`;

    if (sendgridApiKey && recipientEmail) {
      const payload = {
        personalizations: [
          {
            to: [{ email: recipientEmail }],
            subject: `New contact form message from ${data.name}`,
          },
        ],
        from: {
          email: fromEmail,
          name: SITE.name,
        },
        content: [
          { type: "text/plain", value: buildPlainTextMessage(data) },
          { type: "text/html", value: buildHtmlMessage(data) },
        ],
      };

      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sendgridApiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`SendGrid failed: ${response.status} ${response.statusText} - ${body}`);
      }

      return { success: true };
    }

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          sentAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Contact webhook failed: ${response.status} ${response.statusText} - ${body}`);
      }

      return { success: true };
    }

    throw new Error(
      "Contact form endpoint is not configured. Set CONTACT_FORM_WEBHOOK_URL or SENDGRID_API_KEY with CONTACT_FORM_RECIPIENT_EMAIL.",
    );
  });
