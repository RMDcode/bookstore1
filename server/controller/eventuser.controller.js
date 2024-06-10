import Event from "../modal/eventuser.modal.js";

export const event = async (req, res) => {
    const e_students = new Event({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        education: req.body.education,
        address: req.body.address,
        batch: req.body.batch,
    });

    try {
        await e_students.save();
        res.json({ success: true, message: "Your details have been submitted" });
    } catch (err) {
        res.json({ success: false, message: "Your details have been denied!!!!" });
        console.error(err);
    }
};