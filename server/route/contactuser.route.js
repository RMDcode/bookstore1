import express from 'express';
import { transporter, mailOptions } from '../modal/nodemailer.modal.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            ...mailOptions,
            to: 'rdhuri277@gmail.com',
            cc: 'dhurir163@gmail.com',
            subject: `New Contact Form Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `<h1>New Contact Form Submission</h1><p>Username: ${name}<br> Useremail: ${email}<br>Message:<br>${message}</p>`,
        });

        await transporter.sendMail({
            ...mailOptions,
            to: email,
            cc: 'dhurir163@gmail.com',
            subject: 'Message Received',
            text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nRegards,\nYour EventHub Team`,
            html: `<h1>Hi ${name},</h1><p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p><br><p>Regards,<br>Your EventHHub Team</p>`,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(400).json({ message: error.message });
    }
});

export default router;
