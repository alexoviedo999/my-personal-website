import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res
      .status(400)
      .json({ error: 'Name, email, and message are required' });
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return res
      .status(400)
      .json({ error: 'Please provide a valid email address' });
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN;

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <contact@${domain}>`,
      to: ['alexoviedo999@gmail.com'],
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} via alexoviedo.info`,
      text: `You've received a new message from your portfolio contact form.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      return res
        .status(502)
        .json({ error: error.message ?? 'Failed to send message' });
    }

    return res.status(200).json({ id: data?.id });
  } catch (_err) {
    return res
      .status(500)
      .json({ error: 'Something went wrong sending your message' });
  }
}
