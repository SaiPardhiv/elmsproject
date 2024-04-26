// settings.js

import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updateEmployeeInfo = () => {
    // Code to update employee information in the database
    console.log("Employee information updated successfully");
  }

  const changePassword = () => {
    // Code to change employee password
    console.log("Password changed successfully");
  }

  const deleteAccount = () => {
    // Code to delete employee account from the system
    console.log("Account deleted successfully");
  }

  return (
    <div>
      <h1>Employee Settings</h1>

      <h2>Update Personal Information</h2>
      <form onSubmit={updateEmployeeInfo}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

        <button type="submit">Update Information</button>
      </form>

      <h2>Change Password</h2>
      <form onSubmit={changePassword}>
        <label htmlFor="currentPassword">Current Password:</label>
        <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required /><br /><br />

        <label htmlFor="newPassword">New Password:</label>
        <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required /><br /><br />

        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br /><br />

        <button type="submit">Change Password</button>
      </form>

      <h2>Privacy Settings</h2>
      <button onClick={deleteAccount}>Delete Account</button>

      {/* Picture and Link for Password Reset */}
      <h2>Forgot Your Password?</h2>
      <p>Click <a href="#">here</a> to reset your password.</p>
    </div>
  );
}

export default Settings;
