import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Modal, Backdrop, Fade } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import DatePicker from 'react-datepicker';
import MenuIcon from '@mui/icons-material/Menu';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [leaves, setLeaves] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const drawerWidth = 240;

  useEffect(() => {
    axios.get('https://elmsproject.onrender.com/viewLeave')
      .then(response => {
        setLeaves(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleViewDetails = (leave) => {
    setSelectedLeave(leave);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterByDate = () => {
    const filteredLeaves = leaves.filter(leave => {
      const leaveDate = new Date(leave.leaveDates);
      return startDate <= leaveDate && leaveDate <= endDate;
    });
    setLeaves(filteredLeaves);
  };

  const handleAcceptLeave = (leave) => {
    // Add logic to handle accepting leave
    setMessage('Leave is accepted');
  };

  const handleRejectLeave = (leave) => {
    // Add logic to handle rejecting leave
    setMessage('Leave is rejected');
  };

  const styles = {
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: 1201,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: '24px',
      textAlign: 'center', // Aligning content to center
    },
    image: {
      maxWidth: '100%', // Ensuring the image fits within the container
    },
  };

  return (
    
    <div>
        <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {message && (
        <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
          {message}
        </div>
      )}<br></br><br></br>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
        />
        <Button variant="contained" color="primary" onClick={handleFilterByDate}>
          Filter by Date
        </Button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #ccc' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Leave Purpose</th>
            <th>Leave Dates</th>
            <th>Leave Type</th>
            <th>Accept</th>
            <th>Reject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{leave.employeeId}</td>
              <td>{leave.name}</td>
              <td>{leave.leavePurpose}</td>
              <td>{leave.leaveDates}</td>
              <td>{leave.leaveType}</td>
              <td>
                <Button variant="contained" color="primary" onClick={() => handleAcceptLeave(leave)}>
                  Accept
                </Button>
              </td>
              <td>
                <Button variant="contained" color="secondary" onClick={() => handleRejectLeave(leave)}>
                  Reject
                </Button>
              </td>
              <td>
                <Button variant="contained" color="primary" onClick={() => handleViewDetails(leave)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div style={{ backgroundColor: '#DED4AF', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto', marginTop: '200px' }}>
            <h2>Leave Details</h2>
            {selectedLeave && (
              <div>
                <p><strong>Employee ID:</strong> {selectedLeave.employeeId}</p>
                <p><strong>Name:</strong> {selectedLeave.name}</p>
                <p><strong>Leave Purpose:</strong> {selectedLeave.leavePurpose}</p>
                <p><strong>Leave Dates:</strong> {selectedLeave.leaveDates}</p>
                <p><strong>Leave Type:</strong> {selectedLeave.leaveType}</p>
              </div>
            )}
            <Button onClick={handleCloseModal} variant="contained" color="secondary">
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default App;
