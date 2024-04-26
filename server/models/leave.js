const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        unique: true,
        required: true
    },
    leavePurpose: {
        type: String,
        required: true
    },
    leaveDates: {
        type: Date,
        unique: true,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    
    
});

const LeaveModel = mongoose.model("Leave", LeaveSchema);

module.exports = LeaveModel;
