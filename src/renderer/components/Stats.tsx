
const avResults = [
    { vendor: 'ClamAV', status: 'Infected' },
    { vendor: 'ESET', status: 'Safe' },
    { vendor: 'Windows Defender', status: 'Safe' },
    { vendor: 'TrendMicro', status: 'Infected' },
    { vendor: 'McAfee', status: 'Infected' },
  ];
import React, { useState } from 'react';

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('detection');

  return (
    <div>
        <h2>More Information</h2>
        <div className="detail-stats">
        <div
          className={`tab-content ${activeTab === 'detection' ? 'active' : ''}`}
          id="detection"
        >
          <div className="vendor-grid">
            {avResults.map((result, index) => (
              <div className="vendor-item" key={index}>
                <span>{result.vendor}</span>
                <span
                  className={`vendor-status ${result.status === 'Infected' ? 'infected' : 'safe'}`}
                >
                  {result.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        .detail-stats {
          border-top: 1px solid #E5E7EB;
          padding: 16px;
          background-color: white;
          border-radius: 10px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .stat-item {
          border: 1px solid #E5E7EB;
          padding: 8px;
          border-radius: 10px;
          background-color: white;
        }
        .stat-value {
          font-size: 24px;
          font-weight: bold;
        }
       .stat-label {
          font-size: 14px;
          color: #6B7280;
        }
        .vendor-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .vendor-item {
          background-color: #f5f5f5;
          border-radius: 4px;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }

        .vendor-status {
          font-weight: bold;
        }

        .vendor-status.infected {
          color: #f87171; /* Red for Infected */
        }

        .vendor-status.safe {
          color: #10b981; /* Green for Safe */
        }
        `}</style>
    </div>
  </div>
  );
};

export default Statistics;

