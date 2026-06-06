import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import { contactSchema } from "@/lib/validations/contact";
import { getTransport } from "@/lib/nodemailer";
import { getServerEnv } from "@/lib/env";
import { ContactEmail } from "@/emails/contact-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const { name, subject, email, message } = parsed.data;

    const emailHtml = await render(
      <ContactEmail name={name} subject={subject} email={email} message={message} />,
    );

    const env = getServerEnv();
    await getTransport().sendMail({
      from: `${name} <${env.SMTP_USER}>`,
      replyTo: email,
      to: env.CONTACT_EMAIL,
      subject: `[Portfolio] ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
