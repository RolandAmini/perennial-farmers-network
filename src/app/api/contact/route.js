// src/app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "contact@tondomaine.com", // doit être un domaine vérifié
      to: "regional@pfnfarmers.org",  // ton email de réception
      subject: `Message de ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
