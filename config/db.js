const mongoose = require('mongoose')

const Connection = mongoose.connect('mongodb://127.0.0.1:27017/todos')

.then(()=>{
    console.log('Database Connection successfully');
})
.catch((error)=>{
    console.log('connection error',error);
})

module.exports = Connection 