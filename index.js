const express = require('express');
const cors = require('cors');

const Connection = require('./config/db');
const studentPostApi = require('./controller/api');
const GetApi = require('./controller/GetApi');
const UpdateData = require('./controller/UpdateApi');
const deleteapi = require('./controller/DeleteApi');

const app = express();

Connection;
app.use(cors());
app.use(express.json());

app.post('/student', studentPostApi);
app.get('/students', GetApi);
app.put('/update/:id', UpdateData);
app.delete('/delete/:id', deleteapi);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
