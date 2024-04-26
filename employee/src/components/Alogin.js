import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import login from './login.png';
import About from './About';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


function SignIn() {
  const [auname, setauname] = useState('');
  const [apwd, setapwd] = useState('');
  const navigate = useNavigate();
  const onChange = () => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data1 = {
      email: auname,
      password: apwd
    }
    console.log(data1)
    try {
      const response = await axios.post("https://elmsproject.onrender.com/authentication", data1)
      if (response != null) {
        if (response.status === 200) {
          console.log(response.data1);
          //navigate("/admin/AdminHome?success=true");
          //toast.success("Login successful!");

          setTimeout(() => {
            navigate("/adashboard");
          }, 1000);
        } else if (response.status === 404) {
          
          
        } else {
          console.log("Server Error");
        }
      }
    } catch (e) {
      console.log(e.message);
      //toast.error("Invalid Credentials");
    }
  };


  return (
    <div style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative', // Add this line to enable positioning within the Box
            }}
          >
            <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(40px)', borderRadius: '20px' }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setauname(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e)=>setapwd(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <ReCAPTCHA sitekey="6LesCcgpAAAAACg9yQeWG-NU1i4RjDzrflbW6fWo" onChange={onChange}/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {<Typography color="error"></Typography>} {/* Display error message */}
                <Grid container>
                  <Grid item xs>
                    
                  </Grid>
                  
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
      <Button variant="outlined" color="primary" style={{ position: 'absolute', top: '10px', right: '10px', marginTop:'10vh', marginLeft: '20vw' }}>Admin Login</Button>
    </div>
  );
}

export default SignIn;
