const express = require('express');
const cors = require('cors');

// 1. Database Connection
require('./config/db');

// 2. Controllers (Functions)
const addStudent = require('./controller/api');
const getStudents = require('./controller/GetApi');
const updateStudent = require('./controller/UpdateApi');
const deleteStudent = require('./controller/DeleteApi');

const app = express();

// 3. Middlewares
app.use(cors());
app.use(express.json());

// 4. API Routes (CRUD)
app.post('/student', addStudent);          // Create (Naya student add karna)
app.get('/students', getStudents);         // Read (Saare students lana)
app.put('/update/:id', updateStudent);     // Update (Student edit karna)
app.delete('/delete/:id', deleteStudent);  // Delete (Student delete karna)

// 5. Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
