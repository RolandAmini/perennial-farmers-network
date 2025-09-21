import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { NextRequest } from "next/server"; // 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) { // ✅ Typage ajouté
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: "PFN Contact <onboarding@resend.dev>",
      to: "regional@pfnfarmers.org",
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
        You have a new message from the PFN contact form:

        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}