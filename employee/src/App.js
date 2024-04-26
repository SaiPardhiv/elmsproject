import logo from './logo.svg';
import './App.css';
import {  Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contactus from './components/Contactus';
import AddEmployee from './components/Addemployee';
import Viewemployee from './components/Viewemployee';
import Dashboard from './components/Dashboard';
import Alogin from './components/Alogin';
import AdminDashboard from './components/Adashboard';
import Settings from '@mui/icons-material/Settings';
import Profile from './components/Profile';
import Leaves from './components/Leaves';
import Form from './components/Form';
import Viewleave from './components/Viewleave';
import Manageleaves from './components/Manageleaves';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      
      <Route path="/" element={<Home/>} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/about" element={<About/>} /> 
      <Route path="/contactus" element={<Contactus/>} /> 
      <Route path="/addemployee" element={<AddEmployee/>} /> 
      <Route path="/viewemployee" element={<Viewemployee/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/alogin" element={<Alogin/>} />
      <Route path="/adashboard" element={<AdminDashboard/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/leaves" element={<Leaves/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/viewleave" element={<Viewleave/>} />
      <Route path="/manageleaves" element={<Manageleaves/>} />
      
      
      </Routes>
      
      
    </div>
  );
}

export default App;
