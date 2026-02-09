import { Resend } from "resend";
import { NextResponse } from "next/server";
import { config } from "@/lib/config";

const resend = new Resend(config.resend.apiKey);

export async function POST(req: Request) {
  try {
    const { name, email, phone, school, class: className } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!config.resend.apiKey) {
      console.warn("RESEND_KEY is missing. Form submission logged but not sent.");
      return NextResponse.json({ message: "Request received (Development Mode)" }, { status: 200 });
    }

    console.log(`Attempting to send admission email for ${name} using key: ${config.resend.apiKey.substring(0, 5)}...`);

    const { data, error } = await resend.emails.send({
      from: config.resend.fromEmail,
      to: [config.resend.toEmail],
      replyTo: email,
      subject: `New Admission Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #1e3a8a;">New Admission Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>School:</strong> ${school}</p>
          <p><strong>Class:</strong> ${className}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b;">Submitted via Harohalli Educational Trust Website</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("Email sent successfully! ID:", data?.id);
    return NextResponse.json({ message: "Success", id: data?.id }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Resend Error:", error.message, error.stack);
    } else {
      console.error("Resend Error:", error);
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
