import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Modal, Backdrop, Fade } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, Typography,ListItemText,AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MyLeavesIcon from '@mui/icons-material/EventNote';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import zIndex from '@mui/material/styles/zIndex';

const App = () => {
  const [leaves, setLeaves] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTopUp, setShowTopUp] = useState(true);

  useEffect(() => {
    axios.get('https://elmsproject.onrender.com/viewLeave')
      .then(response => {
        setLeaves(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Show the top-up message when the component mounts
    setTimeout(() => {
      setShowTopUp(false);
    }, 3000);
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

  const tableStyles = {
    width: '70%',
    margin: '0 auto',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    overflow: 'hidden',
    marginLeft: '20%',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
  };

  const thStyles = {
    background: '#f2f2f2',
    color: '#333',
    fontWeight: 'bold',
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  };

  const tdStyles = {
    padding: '12px 15px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  };

  const drawerWidth = 240;
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
      // overflow: 'auto',
      zIndex:-1
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
      <AppBar position="fixed" style={styles.appBar} >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Request For Leave
          </Typography>
        </Toolbar>
      </AppBar><div>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Toolbar />
        <div style={styles.drawerContainer}>
          <List><hr></hr>
          <ListItem button component={Link} to="/dashboard">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem><hr></hr><br></br>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon><ProfileIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/viewleave">
              <ListItemIcon><MyLeavesIcon /></ListItemIcon>
              <ListItemText primary="My Leaves" />
            </ListItem>
            
            <ListItem button component={Link} to="/form">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Leave Request" />
            </ListItem><br></br><hr></hr>
            <ListItem button component={Link} to="/login">
              
              <ListItemText primary="Logout" />
            </ListItem><hr></hr>
            
          </List>
        </div>
      </Drawer></div>
      {showTopUp && (
        <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
          Your leave is accepted
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <br></br><br></br>
      </div>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Employee ID</th>
            <th style={thStyles}>Name</th>
            <th style={thStyles}>Leave Purpose</th>
            <th style={thStyles}>Leave Dates</th>
            <th style={thStyles}>Leave Type</th>
            <th style={thStyles}>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td style={tdStyles}>{leave.employeeId}</td>
              <td style={tdStyles}>{leave.name}</td>
              <td style={tdStyles}>{leave.leavePurpose}</td>
              <td style={tdStyles}>{leave.leaveDates}</td>
              <td style={tdStyles}>{leave.leaveType}</td>
              <td style={tdStyles}>
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
