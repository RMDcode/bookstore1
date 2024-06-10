import Special from "../modal/specialuser.modal.js";

export const special = async (req, res) => {
    const se_students = new Special({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        education: req.body.education,
        address: req.body.address,
        batch: req.body.batch,
    });

    try {
        await se_students.save();
        res.json({ success: true, message: "Your details have been submitted" });
    } catch (err) {
        res.json({ success: false, message: "Error saving details" });
        console.error(err);
    }
};