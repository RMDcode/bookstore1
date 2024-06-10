import Special from "../modal/specialuser.modal.js";
import nodemailer from 'nodemailer';

export const special = async (req, res) => {
    const { firstname, lastname, email, phone, education, address, batch } = req.body;

    const se_students = new Special({
        firstname,
        lastname,
        email,
        phone,
        education,
        address,
        batch,
    });

    try {
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
            from: "rdhuri277@gmail.com",
            to: email,
            cc: "dhurir163@gmail.com",
            subject: `Registration Confirmation for ${batch}`,
            text: `Dear ${firstname} ${lastname},\n\nThank you for registering for the special event.\n\nDetails:\nName: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nAddress: ${address}\nBatch: ${batch}\n\nRegards,\nYour Name`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ success: false, message: "Registration successful, but failed to send email." });
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ success: true, message: "Your details have been submitted and email has been sent." });
            }
        });
    } catch (err) {
        res.json({ success: false, message: "Error saving details" });
        console.error(err);
    }
};
