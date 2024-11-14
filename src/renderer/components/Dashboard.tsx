import React from 'react';
import ScanStatusCard from './ScanStatusCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="cards-container">
        <ScanStatusCard title="Real-time Protection" status="Active" />
        <ScanStatusCard title="Last Scan" status="Completed" />
        <ScanStatusCard title="System Health" status="Good" />
      </div>
    </div>
  );
};

export default Dashboard;
