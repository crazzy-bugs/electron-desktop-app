import React, { useState } from 'react';
import './ScanPage.css';

const ScanPage = () => {
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState<string | null>(null);

  // Simulate the scanning process
  const startScan = () => {
    setScanning(true);
    setScanProgress(0);
    setScanStatus('Scanning...');
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setScanProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setScanStatus('Scan Completed!');
      }
    }, 1000);
  };

  return (
    <div className="scan-page">
      <h2>System Scan</h2>
      <div className="scan-content">
        {scanning ? (
          <div className="scan-progress">
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
            <p className="scan-status">{scanStatus}</p>
          </div>
        ) : (
          <button onClick={startScan} className="start-scan-button">
            Start Scan
          </button>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
