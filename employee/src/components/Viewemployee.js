import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:5000/viewEmployee')
      .then(response => {
        // Log the response data to ensure it's retrieved correctly
        console.log('Response data:', response.data);
        // Update the state with the fetched data
        setCards(response.data);
      })
      .catch(error => {
        // Log any errors that occur during the fetch process
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  const getRandomColor = () => {
    const colors = ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F', '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1'];
    return colors[Math.floor(Math.random() * colors.length)];
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
      {/* Search TextField */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ margin: '20px' }}
      />
      {/* Display Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards
          // Filter cards based on the searchQuery
          .filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase()))
          // Map over the filtered cards to display them
          .map((card, index) => (
            <Card key={index} style={{ minWidth: 275, backgroundColor: getRandomColor(), margin: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
              <CardContent>
                <h2>{card.name}</h2>
                <p>Employee ID: {card.employeeId}</p>
                <p>Position: {card.position}</p>
                <p>Manager ID: {card.managerId}</p>
                <p>Email: {card.email}</p>
                <p>Password: {card.password}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default App;
