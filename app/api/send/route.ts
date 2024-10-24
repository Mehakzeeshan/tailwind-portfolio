import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();
    console.log("Received data:", { email, subject, message });

    if (!fromEmail) {
      return NextResponse.json({ error: 'Missing FROM_EMAIL in environment variables' }, { status: 500 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `<h1>${subject}</h1><p>${message}</p>`,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in sending email:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
