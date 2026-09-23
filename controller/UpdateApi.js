const studentModel = require('../schema/student')

const UpdateData = async (req,res)=>{
const {name,age,email} = req.body
const userId = req.params.id
const findID = await studentModel.findByIdAndUpdate(
    userId,
    {name,age,email}, 
    {new:true}
);
return res.json({
    message : "update successfully",
    data:findID
})
}

module.exports = UpdateData