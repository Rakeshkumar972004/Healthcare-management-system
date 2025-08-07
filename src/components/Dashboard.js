
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = localStorage.getItem('user');
  return (

    <div
      className="dashboard-container">


      <h2 className="dashboard-welcome-page">Welcome, {user}</h2>
      <div className="dashboard-link">
        <Link to="/add-medicine" className="bg-blue-100 p-4 rounded shadow  ">➕ Add Medicine</Link><br></br>
        <Link to="/medicines" className="bg-green-100 p-4 rounded shadow">📋 View Medicines</Link><br></br>
        <Link to="/reminder" className="bg-yellow-100 p-4 rounded shadow">⏰ Set Reminder</Link><br></br>
        <Link to="/history" className="bg-purple-100 p-4 rounded shadow">📊 View History</Link><br></br>
        <Link to="/profile" className="bg-gray-100 p-4 rounded shadow">👤 Profile</Link><br></br>

      </div>
    </div>
  );
};

export default Dashboard;