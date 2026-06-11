import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-Dp-sIaLP.js";
import { z } from "zod";
import { S as SITE } from "./site-BRHCUyRr.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  source: z.string().min(1),
  message: z.string().min(1)
});
function buildPlainTextMessage(data) {
  return [`New message from ${data.name}`, ``, `Name: ${data.name}`, `Phone: ${data.phone}`, `Email: ${data.email}`, `How they heard about us: ${data.source}`, ``, `Message:`, data.message].join("\n");
}
function buildHtmlMessage(data) {
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
const sendContactMessage_createServerFn_handler = createServerRpc({
  id: "fbd394cc9fa4af3080fc71bce795b650ae4ce5bc0cb7fdb09c73ce183438bcb8",
  name: "sendContactMessage",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
const sendContactMessage = createServerFn({
  method: "POST"
}).validator(() => contactSchema).handler(sendContactMessage_createServerFn_handler, async ({
  data
}) => {
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL ?? `no-reply@topchoice-health.com`;
  if (sendgridApiKey && recipientEmail) {
    const payload = {
      personalizations: [{
        to: [{
          email: recipientEmail
        }],
        subject: `New contact form message from ${data.name}`
      }],
      from: {
        email: fromEmail,
        name: SITE.name
      },
      content: [{
        type: "text/plain",
        value: buildPlainTextMessage(data)
      }, {
        type: "text/html",
        value: buildHtmlMessage(data)
      }]
    };
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sendgridApiKey}`
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`SendGrid failed: ${response.status} ${response.statusText} - ${body}`);
    }
    return {
      success: true
    };
  }
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data,
        sentAt: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Contact webhook failed: ${response.status} ${response.statusText} - ${body}`);
    }
    return {
      success: true
    };
  }
  throw new Error("Contact form endpoint is not configured. Set CONTACT_FORM_WEBHOOK_URL or SENDGRID_API_KEY with CONTACT_FORM_RECIPIENT_EMAIL.");
});
export {
  sendContactMessage_createServerFn_handler
};
