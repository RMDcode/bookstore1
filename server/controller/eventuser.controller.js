import nodemailer from 'nodemailer';
import Event from '../modal/eventuser.modal.js';

export const event = async (req, res) => {
    const { firstname, lastname, email, phone, education, address, batch } = req.body;

    const e_students = new Event({
        firstname,
        lastname,
        email,
        phone,
        education,
        address,
        batch
    });

    try {
        await e_students.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rdhuri277@gmail.com',
                pass: 'mbeflexfqrdgkunu'
            }
        });

        const mailOptions = {
            from: 'rdhuri277@gmail.com',
            to: email,
            cc: 'dhurir163@gmail.com',
            subject: `Registration Confirmation for ${batch}`,
            text: `Dear ${firstname} ${lastname},\n\nThank you for registering for the event.\n\nDetails:\nName: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nAddress: ${address}\nBatch: ${batch}\n\nWe will send you an email if the batch starts.\n\nRegards,\nRohit Dhuri`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Error occurred while sending email.' });
            } else {
                console.log('Email sent: ' + info.response);
                return res.json({ success: true, message: 'Your details have been submitted and email has been sent.' });
            }
        });
    } catch (err) {
        console.error('Error saving details:', err);
        return res.status(500).json({ success: false, message: 'Error occurred while saving details.' });
    }
};
