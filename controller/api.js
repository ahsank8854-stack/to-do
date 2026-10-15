const studentModel = require('../schema/student');

const studentPostApi = async (req,res)=>{
    try {
        const {name,age,email} = req.body
        const studentcompleteData = await studentModel.create({
            name, age, email
        });
        return res.status(201).json({ message: "student data insert successfully", data: studentcompleteData });
    } catch (error) {
        console.log('data insert error', error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = studentPostApi;

