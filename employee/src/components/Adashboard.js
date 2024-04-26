import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ReminderIcon from '@mui/icons-material/Notifications';
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
    padding: '24px',
    textAlign: 'center', // Aligning content to center
  },
  image: {
    maxWidth: '100%', // Ensuring the image fits within the container
  },
};

function AdminDashboard() {

  return (
    <div style={styles.root}>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          
          <Typography variant="h6" noWrap>
            Admin Dashboard
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
          <List><br></br>
          <ListItem button component={Link} to="/adashboard">
              <ListItemIcon><ProfileIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
              
            </ListItem><br></br><hr></hr>
          
            <ListItem button component={Link} to="/addemployee">
              <ListItemIcon><ProfileIcon /></ListItemIcon>
              <ListItemText primary="Add Employee" />
              
            </ListItem><hr></hr>
            <ListItem button component={Link} to="/viewemployee">
              <ListItemIcon><MyLeavesIcon /></ListItemIcon>
              <ListItemText primary="View Employee" />
            </ListItem>
            <hr></hr>
            <ListItem button component={Link} to="/manageleaves">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Manage Requests" />
            </ListItem><hr></hr>
            <ListItem button component={Link} to="/alogin">
              
              <ListItemText primary="Logout" />
            </ListItem><br></br>
          </List>
        </div>
      </Drawer>
      <main style={styles.content}>
        <Toolbar />
        <Container>
          {/* Your dashboard content goes here */}
          <Typography variant="h4" gutterBottom>
            Welcome to Admin Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            This dashboard allows you to manage your Employee leaves and approve or disapprove leaves.
            You can perfoem CRUD Operations based on Employee Data
          </Typography>
          <img src="https://connecthrms.com/wp-content/uploads/2019/09/Leave-Management-3-600x424.png" alt="Your Image" style={styles.image} />
        </Container>
      </main>
    </div>
  );
}

export default AdminDashboard;
