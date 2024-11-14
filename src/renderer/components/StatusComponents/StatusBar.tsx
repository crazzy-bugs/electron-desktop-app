import React from 'react';
import { Check } from 'lucide-react';

const StatusBar: React.FC = () => (
  <div className="status-bar">
    <div className="status-info">
      <div className="status-icon">
        <Check size={24} color="white" />
      </div>
      <div>
        <span className="status-excellent">Excellent!</span>
        <p>You have the latest updates.</p>
      </div>
    </div>
    <button className="quick-scan-btn">Full Scan</button>
    <style>{`
      .status-bar {
        background-color: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .status-info {
        display: flex;
        align-items: center;
      }
      .status-icon {
        width: 48px;
        height: 48px;
        background-color: #10B981;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      .status-excellent {
        color: #10B981;
        font-size: 20px;
        font-weight: bold;
      }
      .quick-scan-btn {
        background-color: #4A2328;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default StatusBar;