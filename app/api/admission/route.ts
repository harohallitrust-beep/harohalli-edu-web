import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key_for_build");

export async function POST(req: Request) {
  try {
    const { name, email, phone, school, class: className } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Form submission logged but not sent.");
      return NextResponse.json({ message: "Request received (Development Mode)" }, { status: 200 });
    }

    await resend.emails.send({
      from: "Admissions <onboarding@resend.dev>", // Replace with verified domain in production
      to: ["admin@harohalli-trust.org"], // Replace with school email
      subject: `New Admission Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
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

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Resend Error:", error.message, error.stack);
    } else {
      console.error("Resend Error:", error);
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
