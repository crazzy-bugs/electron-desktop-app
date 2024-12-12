import React, { useEffect, useState } from 'react';

const RecentFileScanned = () => {
  interface Scan {
    id: string;
    name: string;
    date: string;
    status: string;
  }

  const [scans, setScans] = useState<Scan[]>([]);

  useEffect(() => {
    const fetchRecentScans = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/target/latest');
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            const formattedScans = data.data.map((item: { id: string; filename: string; created_at: string; result: string }) => ({
              id: item.id,
              name: item.filename,
              date: new Date(item.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }),
              status: item.result === 'true' ? 'Infected' : 'Safe',
            }));
            setScans(formattedScans.slice(0, 5)); // Limit to top 5 scans
          }
        } else {
          console.error('Failed to fetch recent scans:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching recent scans:', error);
      }
    };

    fetchRecentScans();
  }, []);

  return (
    <div className="scanning-card">
      <h2>Recent Files Scanned</h2>
      <div className="scanning-list">
        {scans.length === 0 ? (
          <div className="no-scans">No recent scans found</div>
        ) : (
          scans.map((scan) => (
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
          ))
        )}
      </div>

      <style>{`

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
        }
        .scanning-list {
          overflow-y: auto;
          max-height: 240px;
        }
        .scanning-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #eaeaea;
        }
        /* Target the scrollbar */
::-webkit-scrollbar {
  width: 1.5px; /* Adjust the width for vertical scrollbar */
  height: 8px; /* Adjust the height for horizontal scrollbar */
}

/* Style the scrollbar track */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Light background color */
}

/* Style the scrollbar thumb */
::-webkit-scrollbar-thumb {
  background: #888; /* Darker thumb color */
  border-radius: 10px; /* Optional: Add rounded corners */
}

/* Change the thumb color when hovered */
::-webk

        .scanning-item:last-child {
          border-bottom: none;
        }
        .scanning-info {
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
        .no-scans {
          text-align: center;
          color: #888;
          font-size: 14px;
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default RecentFileScanned
