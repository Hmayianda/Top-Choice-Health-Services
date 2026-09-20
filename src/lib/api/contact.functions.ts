interface ContactData {
  name: string;
  phone: string;
  email: string;
  source: string;
  message: string;
}

export async function sendContactMessage({ data }: { data: ContactData }) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: "5e29ccfb-3782-4b58-a7f7-5ea95f85e3d2",
      subject: `New Contact Form Message from ${data.name}`,
      from_name: "Top Choice Health Services Website",
      name: data.name,
      phone: data.phone,
      email: data.email,
      source: data.source,
      message: data.message,
      redirect: false,
    }),
  });

  const result = await res.json() as { success: boolean; message?: string };

  if (!result.success) {
    throw new Error(result.message ?? "Failed to send message");
  }

  return result;
}