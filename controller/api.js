const studentModel = require('../schema/student');

const studentPostApi = async (req,res)=>{
    try {
        const {name,age,email} = req.body
        const studentcompleteData = studentModel.create({
            name,age,email
        })
        return res.send({message: "student data insert successfully"})

    } catch (error) {
        console.log('data insert error',error);
    }
}

module.exports = studentPostApi;

