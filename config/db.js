const mongoose = require('mongoose')

const Connection = mongoose.connect('mongodb+srv://ahsank8854_db_user:eoOZzhAKDP4E3ftS@cluster0.0kxii9c.mongodb.net/todos')

.then(()=>{
    console.log('Database Connection successfully');
})
.catch((error)=>{
    console.log('connection error',error);
})

module.exports = Connection 