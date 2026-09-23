const studentModel = require('../schema/student')

const GetApi = async (req,res)=>{
      try {
        const {name,age,email} = req.body
        const studentComplete = studentModel.create({
            name,age,email
        })
        return res.send({message : "Data insert successfully"})
      } catch (error) {
        console.log("data insert error",error);
      }
}

module.exports = GetApi