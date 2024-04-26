// Leaves.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Leaves = () => {
  // Sample leave data
  const leaveData = {
    pendingLeaves: 1,
    approvedLeaves: 2,
    leavesTaken: 2,
    leaveBalance: 1
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              Pending Leaves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {leaveData.pendingLeaves}
            </Typography>
          </CardContent>
        </Card>
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              Approved Leaves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {leaveData.approvedLeaves}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={styles.row}>
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              Leaves Taken
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {leaveData.leavesTaken}
            </Typography>
          </CardContent>
        </Card>
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              Leave Balance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {leaveData.leaveBalance}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <img src="https://cdn.dribbble.com/users/386073/screenshots/1967353/attachments/342517/CalendarCard.png?compress=1&resize=400x300&vertical=top" alt="Your Image" style={styles.image} />
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '40%',
    marginBottom: '20px'
  },
  card: {
    width: '300px',
    backgroundColor: '#c4d7ed',
    color: 'white',
  },
  image: {
    width: '50%',
    height: '40vh',
    marginTop: '20px'
  }
};

export default Leaves;
