const express = require('express')
const Connection = require('./config/db')
const studentPostApi = require('./controller/api')
const GetApi = require('./controller/GetApi')
const UpdateData = require('./controller/UpdateApi')
const deleteapi = require('./controller/DeleteApi')


const app = express()

Connection

app.use(express.json())

app.post('/student',studentPostApi)
app.get("/students",GetApi)
app.put("/update/:id",UpdateData)
app.delete("/delete/:id", deleteapi)


app.listen(3000,()=>{
    console.log('server is running');
})


module.exports = app