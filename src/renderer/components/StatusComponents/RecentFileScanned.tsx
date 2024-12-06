import React, { useRef, useCallback } from 'react';
import ApiClient from '../../../api/client';

const RecentFileScanned = () => {
  const [scans, setScans] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(1);
  const loader = useRef(null);

  const fetchData = async (page: number) => {
    const result = await fetch(
      `http://localhost:3000/scans?limit=5&page=${page}`,
    );
    result.json().then((data) => {
      setScans((prevScans) => [...prevScans, ...data]);
      console.log(data);
    });
  };

  React.useEffect(() => {
    fetchData(page);
  }, [page]);

  interface Scan {
    id: string;
    filename: string;
    created_at: string;
    final_result: string;
  }

  interface ObserverEntry {
    isIntersecting: boolean;
  }

  const handleObserver = useCallback((entries: ObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  React.useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <div className="scanning-card">
        <h2>Recent Files</h2>
        <div className="scanning-list">
          {scans.map((scan) => (
            <div className="scanning-item" key={scan.id}>
              <div className="scanning-info">
                <div className="scanning-details">
                  <span>{scan.filename}</span>
                  <small>{new Date(scan.created_at).toLocaleString()}</small>
                </div>
              </div>
              <div
                className={`scanning-status ${
                  scan.final_result === 'Safe'
                    ? 'status-safe'
                    : scan.final_result === 'Infected'
                      ? 'status-infected'
                      : 'status-scanning'
                }`}
              >
                {scan.final_result || 'Scanning'}
              </div>
            </div>
          ))}
          <div ref={loader} />
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
          gap: 12
          px;
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
          font-size: 10px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 12px;
          text-transform: uppercase;
        }
        .status-safe {
          color: #fff;
          background-color: #4caf50; /* Green */
        }
        .status-scanning {
          color: #333;
          background-color: #f1f3f5; /* Light gray */
        }
        .status-infected {
          color: #fff;
            background-color: #ffeb3b; /* Yellow */
        }
      `}</style>
      </div>
    </>
  );
};

export default RecentFileScanned;
