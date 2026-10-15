const studentModel = require('../schema/student')

const GetApi = async (req,res)=>{
      try {
        const studentComplete = studentModel.find()
        return res.send(studentComplete)
      } catch (error) {
        console.log("data insert error",error);
      }
}

module.exports = GetApi
