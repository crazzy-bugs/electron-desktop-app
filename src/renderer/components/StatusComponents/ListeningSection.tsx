import React from 'react';

export default function ListeningSection() {
  return (
    <div className="container">
      <p className="listeningText">Listening at</p>
      <h2 className="targetPath">Target folder path</h2>
      <div className="pathWrapper">
        {/* <span className="pathIcon">📁</span> */}
        <p className="pathText">C:/Users/SARTHAK/Downloads</p>
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
  font-size: 14px;
  color: #6c757d;
  margin: 0 0 4px 0;
}

.targetPath {
  font-size: 22px;
  color: #28a745;
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
