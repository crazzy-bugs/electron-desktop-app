import React from 'react';
import './ScanStatusCard.css';

interface ScanStatusCardProps {
  title: string;
  status: string;
}

const ScanStatusCard: React.FC<ScanStatusCardProps> = ({ title, status }) => {
  return (
    <div className="scan-status-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default ScanStatusCard;
