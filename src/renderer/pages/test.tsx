import React, { useEffect, useState } from 'react';
import ApiClient from '../../api/client'; 

interface Scan {
  id: number;
  filename: string;
  location: string;
  timestamp: number;
  result: string;
  final_result: string;
}

const Test = () => {
  const [scans, setScans] = useState<Scan[]>([]);

  // Fetch all scans on component mount
  useEffect(() => {
    const fetchScans = async () => {
      try {
        const result = await ApiClient.getAllScans();
        console.log(result);
        setScans(result);
      } catch (error) {
        console.error('Failed to fetch scans:', error);
      }
    };

    fetchScans();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Scan Results</h1>
      {scans.length === 0 ? (
        <p>No scans available.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {scans.map((scan) => {
            const parsedResult = JSON.parse(scan.result); 

            return (
              <div key={scan.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ margin: '0 0 10px' }}>{scan.filename}</h2>
                <p><strong>Location:</strong> {scan.location}</p>
                <p><strong>Timestamp:</strong> {new Date(scan.timestamp).toLocaleString()}</p>
                <p><strong>Final Result:</strong> <span style={{ color: scan.final_result === 'unsafe' ? 'red' : 'green' }}>{scan.final_result}</span></p>
                <div>
                  <strong>Detailed Results:</strong>
                  <ul style={{ margin: '10px 0 0', paddingLeft: '20px' }}>
                    {Object.entries(parsedResult).map(([key, value]) => (
                      <li key={key}>{`${key}: ${value}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Test;
