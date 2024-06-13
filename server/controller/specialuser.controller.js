import nodemailer from 'nodemailer';
import Special from "../modal/specialuser.modal.js";

export const special = async (req, res) => {
    const { firstname, lastname, email, phone, education, address, batch } = req.body;

        const se_students = new Special({
            firstname,
            lastname,
            email,
            phone,
            education,
            address,
            batch
        });

    try{
        await se_students.save();

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rdhuri277@gmail.com",
                pass: "mbeflexfqrdgkunu"
            }
        });

        const mailOptions = {
            from: 'rdhuri277@gmail.com',
            to: email,
            cc: 'dhurir163@gmail.com',
            subject: `Registration Confirmation for ${batch}`,
            text: `Dear ${firstname} ${lastname},

Thank you for registering for the event.

We are thrilled to have you join us for this event. Your registration has been successfully processed, and we will keep you updated with further details.

Event Schedule:
- Start Date: 29 Feb
- Time: 12:00pm
- Location: Pune

What to Bring:
- laptop, notebook, pen, etc.

Important Information:
- Please arrive at least 15 minutes early for the event.
- Parking is available.
- If you have any special requirements or dietary restrictions, please let us know in advance.

Contact Us:
If you have any questions or need further assistance, feel free to reach out to us at +91-9552248843.

We will send you an email if the batch starts.

Regards,
Rohit Dhuri
Event Hub
email: dhurir163@gmail.com
`
        };

        await transporter.sendMail(mailOptions);

        // Send additional email
        await transporter.sendMail({
            from: 'rdhuri277@gmail.com',
            to: "rdhuri277@gmail.com",
            cc: "dhurir163@gmail.com",
            subject: `New Contact Form Contact from ${firstname} ${lastname}`,
            text: `Name: ${firstname} ${lastname}\nEmail: ${email}\n\nMessage:\nYour event registration details have been recorded.`,
            html: `<h1>New Contact Form Submission</h1><p>\n\nDetails:\nName: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nAddress: ${address}\nBatch: ${batch}\n</p>`
        });

        return res.json({ success: true, message: 'Your details have been submitted and email has been sent.' });

    } catch (err) {
        console.error('Error saving details:', err);
        return res.status(500).json({ success: false, message: 'Error occurred while saving details.' });
    }
};
