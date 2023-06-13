// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: ' godsfavour1975@gmail.com', // Enter your Gmail email address
        pass: 'tzztzhqygxfxvzpi', // Enter your Gmail password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: ' godsfavour1975@gmail.com',
        to: 'godsfavour11975@gmail.com', // Enter the recipient email address
        subject: 'New contact form submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
