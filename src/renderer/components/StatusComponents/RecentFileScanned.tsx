import React from 'react';

const RecentFileScanned = () => {
  const scans = [
    { id: 1, name: 'document.txt', date: 'Jul 12th 2024', status: 'Safe' },
    { id: 2, name: 'game.exe', date: 'Jul 12th 2024', status: 'Infected' },
    { id: 3, name: 'photo.png', date: 'Jul 12th 2024', status: 'Safe' },
    { id: 4, name: 'video.mp4', date: 'Jul 12th 2024', status: 'Safe' },
    { id: 5, name: 'archive.zip', date: 'Jul 12th 2024', status: 'Infected' },
    // { id: 6, name: 'presentation.ppt', date: 'Jul 12th 2024', status: 'Safe' },
  ];

  return (
    <>
      <div className="scanning-card">
        <h2>Recent File Scanned</h2>
        <div className="scanning-list">
          {scans.map((scan) => (
            <div className="scanning-item" key={scan.id}>
              <div className="scanning-info">
                <div className="scanning-details">
                  <span>{scan.name}</span>
                  <small>{scan.date}</small>
                </div>
              </div>
              <div
                className={`scanning-status ${
                  scan.status === 'Safe' ? 'status-safe' : 'status-infected'
                }`}
              >
                {scan.status}
              </div>
            </div>
          ))}
        </div>

        <style>{`
        * {
          font-family: Montserrat, sans-serif;
          overflow-y: hidden;
        }
        .scanning-card {
          background: #fff;
          border-radius: 12px;
          width: 360px;
          padding: 30px;
          margin-bottom: 10px;
          height: 300px;
          display: flex;
          flex-direction: column;
        }
        .scanning-card h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 1;
          padding-top: 8px;
        }
        .scanning-list {
          overflow-y: auto;
          max-height: 240px; /* Adjust the height of the scrollable area */
        }
          /* Styling the scrollbar */
.scanning-list::-webkit-scrollbar {
  width: 0px; /* Thin scrollbar width */
}

.scanning-list::-webkit-scrollbar-track {
  background: #f1f1f1; /* Light gray background */
  border-radius: 10px; /* Rounded track corners */
}

.scanning-list::-webkit-scrollbar-thumb {
  background: #888; /* Gray thumb */
  border-radius: 10px; /* Rounded thumb corners */
}

.scanning-list::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker gray on hover */
}
        .scanning-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .scanning-item:last-child {
          border-bottom: none;
        }
        .scanning-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .scanning-details {
          display: flex;
          flex-direction: column;
        }
        .scanning-details span {
          font-size: 15px;
          color: #333;
          font-weight: 500;
        }
        .scanning-details small {
          font-size: 12px;
          color: #888;
        }
        .scanning-status {
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 12px;
          text-transform: uppercase;
        }
        .status-safe {
        background-color: #e8f5e9;
  color: #2e7d32;
        }
        .status-infected {
        background-color: #ffebee;
  color: #c62828;
        }
      `}</style>
      </div>
    </>
  );
};

export default RecentFileScanned;
