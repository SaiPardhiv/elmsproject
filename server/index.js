const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const EmployeeModel = require('./models/employee')
const AdminModel = require('./models/admin')
const dotenv = require('dotenv').config()
const LeaveModel = require('./models/leave')


app.use(express.static('public'));

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI)
  .then(response => {
    console.log("Database Connected Successfully")
    console.log("MongoDB is running...")
  })
  .catch(err => {
    console.log("Error Connecting in Database " + err.message)
  })

  app.post('/insertEmployee', (req, res) => {
    EmployeeModel.create(req.body)
      .then(result => {
        console.log("Inserted Successfully")
      })
      .catch(err => {
        console.log("Error Inserting " + err.message)
      })
  });

  app.post('/insertLeave', (req, res) => {
    LeaveModel.create(req.body)
      .then(result => {
        console.log("Leave Applied Successfully")
      })
      .catch(err => {
        console.log("Error While Applying " + err.message)
      })
  });
  app.get("/viewleave", (req, res) => {
    const leaves = LeaveModel.find().lean()
      .then(leaves  => res.json(leaves))
      .catch(err => console.log("Error Fetching" + err.message))
  });
  

  app.get("/viewEmployee", (req, res) => {
    const employees = EmployeeModel.find().lean()
      .then(employees  => res.json(employees))
      .catch(err => console.log("Error Fetching" + err.message))
  });
  
  app.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const employee = await EmployeeModel.findOne({ email: username });
        console.log(employee)
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        
        if (password !== employee.password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', employee });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/authentication', async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
    try {
        
        const admin = await AdminModel.findOne({ email: email });
        console.log(admin)
        
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        
        if (password !== admin.password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
  });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })