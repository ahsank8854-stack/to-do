const studentModel = require('../schema/student')

const UpdateData = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const userId = req.params.id;
        const findID = await studentModel.findByIdAndUpdate(
            userId,
            { name, age, email }, 
            { new: true }
        );
        return res.json({
            message: "update successfully",
            data: findID
        });
    } catch (error) {
        console.log("update error", error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = UpdateData