import React from 'react';
import { useEffect, useState } from 'react';

export default function ListeningSection() {
  const [targetPath, setTargetPath] = useState<string | null>(null);

  useEffect(() => {
    const fetchTargetPath = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/target/view');
        if (response.ok) {
          const data = await response.json();
          if (data && data.target_folder) {
            setTargetPath(data.target_folder);
          } else {
            setTargetPath('Path not found'); // Fallback if the data is malformed
          }
        } else {
          console.error('Error fetching target path:', response.statusText);
          setTargetPath('Error loading target path');
        }
      } catch (error) {
        console.error('Error fetching target path:', error);
        setTargetPath('Error loading target path');
      }
    };

    fetchTargetPath();
  }, []);
  return (
    <div className="container">
      <p className="listeningText">Listening at</p>
      <h2 className="targetPath">Target folder path</h2>
      <div className="pathWrapper">
        {/* <span className="pathIcon">📁</span> */}
        <p className="pathText">{targetPath || 'Loading...'}</p>
      </div>
      <style>{`
        .container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom:10px;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: 120px;
  font-family: Montserrat, sans-serif;
}

.listeningText {
  font-size: 13px;
  color: black;
  margin: 0 0 4px 0;
}

.targetPath {
  font-size: 18px;
  color: black;
  margin: 0 0 16px 0;
  font-weight: 600;
}

.pathWrapper {
  display: flex;
  align-items: center;  
  background-color: #e9e9e9;
  border-radius: 4px;
  padding: 8px 12px;
}

.pathIcon {
  font-size: 18px;
  margin-right: 8px;
}

.pathText {
  font-size: 14px;
  color: #495057;
  margin: 0;
  word-break: break-all;
}


        `}</style>
    </div>
  );
}
