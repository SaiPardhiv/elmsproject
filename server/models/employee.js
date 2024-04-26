const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        unique: true,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    managerId: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;
