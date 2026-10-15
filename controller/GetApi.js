const studentModel = require('../schema/student')

const GetApi = async (req,res)=>{
      try {
        const studentComplete = await studentModel.find()
        return res.json(studentComplete)
      } catch (error) {
        console.log("data fetch error", error);
        return res.status(500).json({ error: error.message });
      }
}

module.exports = GetApi
