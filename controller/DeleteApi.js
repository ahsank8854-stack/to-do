const studentModel = require('../schema/student')

const deleteapi = async (req, res) => {
    try {
        const userID = req.params.id
        await studentModel.findByIdAndDelete(userID)
        return res.json({ message: 'data save' })
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ error: error.message });
    }
}


module.exports = deleteapi