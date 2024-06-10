import nodemailer from 'nodemailer';
import EventUser from "../modal/eventuser.modal.js";

export const event = async (req, res) => {
    const { firstname, lastname, email, phone, education, address, batch } = req.body;

    const eventUser = new EventUser({
        firstname,
        lastname,
        email,
        phone,
        education,
        address,
        batch
    });

    try {
        await eventUser.save();

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rdhuri277@gmail.com",
                pass: "mbeflexfqrdgkunu"
            }
        });

        const mailOptions = {
            from: "rdhuri277@gmail.com",
            to: email,
            cc: "dhurir163@gmail.com",
            subject: `Registration Confirmation for ${batch}`,
            text: `Dear ${firstname} ${lastname},\n\nThank you for registering for the event.\n\nDetails:\nName: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nAddress: ${address}\nBatch: ${batch}\n\nRegards,\nYour Name`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ success: false, message: "Failed to send email." });
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ success: true, message: "Email has been sent successfully." });
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error occurred while sending email." });
        console.error(err);
    }
};
