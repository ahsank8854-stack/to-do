const mongoose = require('mongoose');

const studentData = mongoose.Schema({
    name: {type:String},
    age: {type:Number},
    email: {type: String}
})

const studentModel = mongoose.model('student',studentData)

module.exports = studentModel