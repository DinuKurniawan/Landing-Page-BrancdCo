import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'BrandCo Contact <onboarding@resend.dev>',
      to: ['merahjambu714@gmail.com'],
      replyTo: email,
      subject: `Project Inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #1e293b; margin: 0 0 8px;">New Contact Form Submission</h2>
          <p style="color: #64748b; margin: 0 0 24px; font-size: 14px;">Received via BrandCo website</p>
          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 14px 18px; background: #f1f5f9; font-weight: 600; font-size: 13px; color: #475569; width: 120px; border-bottom: 1px solid #e2e8f0;">Name</td>
              <td style="padding: 14px 18px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; background: #f1f5f9; font-weight: 600; font-size: 13px; color: #475569; border-bottom: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; background: #f1f5f9; font-weight: 600; font-size: 13px; color: #475569; vertical-align: top;">Message</td>
              <td style="padding: 14px 18px; color: #1e293b; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #94a3b8; font-size: 12px; margin: 20px 0 0; text-align: center;">
            Hit <strong>Reply</strong> to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`);
});
