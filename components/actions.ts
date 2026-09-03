'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const hearAbout = formData.get('hearAbout') as string;
    const message = formData.get('message') as string;
    const interest = formData.get('interest') as string;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tahiralone2233@gmail.com',
      subject: `New Lead: ${interest} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Heard About Us:</strong> ${hearAbout || 'N/A'}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}