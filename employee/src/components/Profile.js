import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MyLeavesIcon from '@mui/icons-material/EventNote';

export default function ProfilePage() {
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
    card: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: '10vh',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5', // Light gray background color
    },
    cardMedia: {
      height: 300,
      borderRadius: '10px 10px 0 0', // Rounded top corners
    },
    cardContent: {
      backgroundColor: '#ffffff', // White background color
    },
    cardTitle: {
      color: '#004d40', // Dark green color
    },
    cardText: {
      color: '#333', // Dark gray color
    },
    listItem: {
      color: '#004d40', // Dark green color
    },
  };

  return (
    <div style={{ marginTop: '10vh' }}>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Profile
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
            <ListItem button component={Link} to="/dashboard" style={styles.listItem}>
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <hr></hr><br></br>
            <ListItem button component={Link} to="/profile" style={styles.listItem}>
              <ListItemIcon><ProfileIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/viewleave" style={styles.listItem}>
              <ListItemIcon><MyLeavesIcon /></ListItemIcon>
              <ListItemText primary="My Leaves" />
            </ListItem>
            <ListItem button component={Link} to="/form" style={styles.listItem}>
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Leave Request" />
            </ListItem>
            <br></br>
            <hr></hr>
            <ListItem button component={Link} to="/login" style={styles.listItem}>
              <ListItemText primary="Logout" />
            </ListItem>
            <hr></hr>
          </List>
        </div>
      </Drawer>
      <Card sx={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://th.bing.com/th/id/OIP.66elZ0rdKa61JlWQw8G7XgHaGf?w=196&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="Green Iguana"
            sx={styles.cardMedia}
          />
          <CardContent sx={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="div" sx={styles.cardTitle}>
              Pardhiv
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={styles.cardText}>
              Employee ID: 2029<br></br>
              Email: pardhiv@gmail.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
