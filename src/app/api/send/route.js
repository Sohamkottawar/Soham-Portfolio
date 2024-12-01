// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
    const {body} = req;
    const {email,subject,message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["sohamkottawar2004@gmial.com"],
      subject: subject,
      react:  <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 }); 
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
