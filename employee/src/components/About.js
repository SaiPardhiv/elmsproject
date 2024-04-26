import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import loginpic from './loginpic.png';

const About = () => {
  return (
    <div>
    <div style={{ padding: '20px', backgroundColor: '#ecf2f9' }}>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#c4d7ed' }}>
        <Typography variant="h5" gutterBottom>
          About Employee Leave Management System
        </Typography>
        <Typography variant="body1">
          The Employee Leave Management System helps organizations efficiently manage their employees' leave requests, tracking their availability and ensuring smooth operations. It automates leave request processes, reduces administrative overhead, and improves employee satisfaction.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '20px' }} gutterBottom>
          Advantages
        </Typography>
        <Typography variant="body1">
          - Streamlined leave request process <br />
          - Improved tracking and visibility <br />
          - Reduced administrative burden <br />
          - Enhanced employee satisfaction and productivity <br />
        </Typography>
      </Paper>
      
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#c4d7ed' }}>
        <Typography variant="h5" gutterBottom>
          Our Team Members
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Pardhiv</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Team Lead
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Deepika</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             Team Member
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Bhargavi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Team Member
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div></div>
  );
};

export default About;
