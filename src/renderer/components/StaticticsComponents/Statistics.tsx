import React, { useState } from 'react';

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('detection');
  const avResults = [
    { vendor: 'ClamAV', status: 'Detected' },
    { vendor: 'ESET', status: 'Undetected' },
    { vendor: 'Windows Defender', status: 'Undetected' },
    { vendor: 'TrendMicro', status: 'Detected' },
    { vendor: 'McAfee', status: 'Undetected' },
  ];

  // Calculate detections
  const detections = avResults.filter(
    (result) => result.status === 'Detected',
  ).length;

  return (
    <div className="card">
      <div className="header">
        <div className="score-circle">{detections}</div>
        <div className="info">
          <div className={`status ${detections === 0 ? 'safe' : 'malicious'}`}>
            {detections === 0
              ? 'No security vendors flagged this file as malicious'
              : `${detections} security vendor(s) flagged this file as malicious`}
          </div>

          <div className="file-info">
            6c54d603074190586fe7818db116036f20d950d93bec25af9d649d80c822609
          </div>
          <div className="file-info">
            Receipt pay_MQoJydy0Ddqr1G from APNA COLLEGE (Paid).pdf
          </div>
          <div className="file-info">36.31 KB | a moment ago</div>
        </div>
      </div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'detection' ? 'active' : ''}`}
          onClick={() => setActiveTab('detection')}
        >
          DETECTION
        </div>
        <div
          className={`tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          DETAILS
        </div>
        <div
          className={`tab ${activeTab === 'behavior' ? 'active' : ''}`}
          onClick={() => setActiveTab('behavior')}
        >
          BEHAVIOR
        </div>
        <div
          className={`tab ${activeTab === 'community' ? 'active' : ''}`}
          onClick={() => setActiveTab('community')}
        >
          COMMUNITY
        </div>
      </div>
      <div
        className={`tab-content ${activeTab === 'detection' ? 'active' : ''}`}
        id="detection"
      >
        <div className="vendor-grid">
          {avResults.map((result, index) => (
            <div className="vendor-item" key={index}>
              <span>{result.vendor}</span>
              <span
                className={`vendor-status ${
                  result.status === 'Detected' ? 'detected' : 'undetected'
                }`}
              >
                {result.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`tab-content ${activeTab === 'details' ? 'active' : ''}`}
        id="details"
      >
        Details content goes here
      </div>
      <div
        className={`tab-content ${activeTab === 'behavior' ? 'active' : ''}`}
        id="behavior"
      >
        Behavior content goes here
      </div>
      <div
        className={`tab-content ${activeTab === 'community' ? 'active' : ''}`}
        id="community"
      >
        Community content goes here
      </div>
      <style>{`
            body {
                font-family: Montserrat, sans-serif;
                background-color: #f3f4f6;
                margin: 0;
                color: #333;
            }

            .card {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                margin: 0 auto;
                padding: 20px;
                height: 80vh;
                width: 94%;
            }

            .header {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
            }

            .score-circle {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: #e5e7eb;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                font-size: 24px;
                font-weight: bold;
                color: #10b981;
            }

            .score-circle::before {
                content: "/ 5";
                position: absolute;
                bottom: 10px;
                font-size: 12px;
                color: #6b7280;
            }

            .info {
                flex-grow: 1;
            }

            .status {
                background-color: #f9f9f9;
                color: red;
                padding: 5px 10px;
                border-radius: 9999px;
                display: inline-block;
                font-size: 14px;
                margin-bottom: 10px;
            }

            .file-info {
                font-size: 14px;
                color: #6b7280;
                margin-bottom: 5px;
            }

            .tabs {
                display: flex;
                border-bottom: 1px solid #e5e7eb;
                margin-top: 20px;
            }

            .tab {
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
            }

            .tab.active {
                border-bottom-color: #3b82f6;
                color: #3b82f6;
            }

            .tab-content {
                display: none;
                animation: fadeIn 0.5s;
            }

            .tab-content.active {
                display: block;
            }

            .vendor-grid {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 20px;
            }

            .vendor-item {
                background-color: white;
                border: 2px solid #e5e7eb;
                border-radius: 4px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
            }

            .vendor-status {
                font-weight: bold;
            }

            .vendor-status.detected {
                color: #f87171; /* Red for Detected */
            }

            .vendor-status.undetected {
                color: #10b981; /* Green for Undetected */
            }
            
            .status.safe {
    color: green;
}

.status.malicious {
    color: red;
}


            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            `}</style>
    </div>
  );
};

export default Statistics;
