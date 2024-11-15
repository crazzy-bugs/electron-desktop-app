import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiClient from '../../api/client';

interface Scan {
  id: number;
  filename: string;
  location: string;
  timestamp: number;
  result: string;
  final_result: string;
  parsedResult?: Record<string, any>; // Add parsedResult field
}

const Test = () => {
  const [scans, setScans] = useState<Scan[]>([]);
  const [loading, setLoading] = useState(false); // State for loading status
  const navigate = useNavigate();

  // Fetch all scans on component mount
  useEffect(() => {
    const fetchScans = async () => {
      try {
        const result = await ApiClient.getAllScans();

        // Preprocess data: Parse the `result` field for each scan
        const processedScans = result.map((scan: Scan) => ({
          ...scan,
          parsedResult: JSON.parse(scan.result),
        }));

        console.log(processedScans);
        setScans(processedScans);
      } catch (error) {
        console.error('Failed to fetch scans:', error);
      }
    };

    fetchScans();
  }, []);

  // Handle start scan click
  const handleStartScan = async () => {
    setLoading(true); // Set loading to true
    try {
      // Simulate loading for demo; replace with actual scan start logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/startscan'); // Navigate to the scanning page
    } catch (error) {
      console.error('Failed to start scan:', error);
    } finally {
      setLoading(false); // Reset loading status
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Montserrat' }}>
      <h1>Scan Results</h1>
      <button
        onClick={handleStartScan}
        style={{
          backgroundColor: '#4A2328',
          color: '#fff',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontFamily: 'inherit',
          fontSize: '15px',
        }}
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Starting Scan...' : 'Start Full Scan'}
      </button>
      {scans.length === 0 ? (
        <p>No scans available.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {scans.map((scan) => (
            <div
              key={scan.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 style={{ margin: '0 0 10px' }}>{scan.filename}</h2>
              <p>
                <strong>Location:</strong> {scan.location}
              </p>
              <p>
                <strong>Timestamp:</strong>{' '}
                {new Date(scan.timestamp).toLocaleString()}
              </p>
              <p>
                <strong>Final Result:</strong>{' '}
                <span
                  style={{
                    color: scan.final_result === 'unsafe' ? 'red' : 'green',
                  }}
                >
                  {scan.final_result}
                </span>
              </p>
              <div>
                <strong>Detailed Results:</strong>
                <ul style={{ margin: '10px 0 0', paddingLeft: '20px' }}>
                  {scan.parsedResult &&
                    Object.entries(scan.parsedResult).map(([key, value]) => (
                      <li key={key}>{`${key}: ${value}`}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
