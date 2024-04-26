import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, Container, Card, CardActionArea, CardMedia, Grid, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MyLeavesIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';

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
    padding: '50px',
    textAlign: 'center', // Aligning content to center
    backgroundImage: "url('https://www.creativeimages.edu/wp-content/uploads/2019/04/bg-triangles.jpg')", // Background image URL
    backgroundSize: 'auto', // Cover the entire area
    backgroundRepeat: 'no-repeat', // No repetition
  },
  
};

function EmployeeDashboard() {

  

  return (
    <div style={styles.root}>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employee Dashboard
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
          <List>
            <hr></hr>
            <ListItem button component={Link} to="/dashboard">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <hr></hr><br></br>
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
            </ListItem>
            <br></br><hr></hr>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Logout" />
            </ListItem>
            <hr></hr>
          </List>
        </div>
      </Drawer>
      <main style={styles.content}>
        <Toolbar />
        <Container>
          {/* Your dashboard content goes here */}
          <Typography variant="h4" gutterBottom>
            Welcome to Employee Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            This dashboard allows you to manage your leaves efficiently and stay updated with reminders.
          </Typography>
          
        </Container>
      </main>
    </div>
  );
}

export default EmployeeDashboard;
