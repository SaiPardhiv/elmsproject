import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonAppBar() {
  const [anchorElEmployee, setAnchorElEmployee] = React.useState(null);
  const [anchorElManager, setAnchorElManager] = React.useState(null);

  const handleClickEmployee = (event) => {
    setAnchorElEmployee(event.currentTarget);
  };

  const handleCloseEmployee = () => {
    setAnchorElEmployee(null);
  };

  const handleClickManager = (event) => {
    setAnchorElManager(event.currentTarget);
  };

  const handleCloseManager = () => {
    setAnchorElManager(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            Employee Leave Management System
          </Typography>
          <Button color="inherit" sx={{ color: 'black', '&:hover': { fontSize: '1.2rem' } }}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </a>
          </Button>
          <Button color="inherit" sx={{ color: 'black', '&:hover': { fontSize: '1.2rem' } }}>
            <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </a>
          </Button>
          <Button color="inherit" sx={{ color: 'black', '&:hover': { fontSize: '1.2rem' } }}>
            <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </a>
          </Button>
          
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
