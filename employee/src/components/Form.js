import React, { useState } from 'react';
import axios from 'axios';
import { Drawer, List, ListItem, ListItemIcon, Typography, AppBar,ListItemText, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MyLeavesIcon from '@mui/icons-material/EventNote';
 // You'll need axios or any other HTTP client library for sending requests

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    leavePurpose: '',
    leaveDates: '',
    leaveType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://elmsproject.onrender.com/insertLeave', formData);
      console.log(response.formData);
      
      console.log('Leave Applied Successfully');
    } catch (error) {
      console.log("Error in posting data: " + error.message);
    }
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
            Manage Leaves
          </Typography>
        </Toolbar>
      </AppBar>
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
      </Drawer>
    <form onSubmit={handleSubmit} style={styles1.form}>
      <label htmlFor="name" style={styles1.label}>Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={styles1.input} required />

      <label htmlFor="employeeId" style={styles1.label}>Employee ID:</label>
      <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} style={styles1.input} required />

      <label htmlFor="leavePurpose" style={styles1.label}>Leave Purpose:</label>
      <input type="text" id="leavePurpose" name="leavePurpose" value={formData.leavePurpose} onChange={handleChange} style={styles1.input} required />

      <label htmlFor="leaveDates" style={styles1.label}>Leave Dates:</label>
      <input type="date" id="leaveDates" name="leaveDates" value={formData.leaveDates} onChange={handleChange} style={styles1.input} required />

      <label htmlFor="leaveType" style={styles1.label}>Leave Type:</label>
      <input type="text" id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange} style={styles1.input} required />

      <button type="submit" style={styles1.button}>Submit</button>
    </form></div>
  );
};

const styles1 = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  },
  label: {
    display: 'block',
    marginBottom: '5px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Form;
