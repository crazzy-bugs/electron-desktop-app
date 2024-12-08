import React from 'react';
import './RecentFiles.css';

export default function RecentFiles() {
  const files = [
    { id: 1, name: 'document.txt', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 2, name: 'game.exe', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 3, name: 'photo.png', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 4, name: 'video.mp4', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 5, name: 'presentation.pptx', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 6, name: 'archive.zip', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 1, name: 'document.txt', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 2, name: 'game.exe', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 3, name: 'photo.png', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 4, name: 'video.mp4', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 5, name: 'presentation.pptx', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 6, name: 'archive.zip', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 1, name: 'document.txt', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 2, name: 'game.exe', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 3, name: 'photo.png', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 4, name: 'video.mp4', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 5, name: 'presentation.pptx', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 6, name: 'archive.zip', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 1, name: 'document.txt', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 2, name: 'game.exe', date: 'Jul 12th 2024', status: 'INFECTED' },
    { id: 3, name: 'photo.png', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 4, name: 'video.mp4', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 5, name: 'presentation.pptx', date: 'Jul 12th 2024', status: 'SAFE' },
    { id: 6, name: 'archive.zip', date: 'Jul 12th 2024', status: 'INFECTED' },
  ];

  return (
    <div className="recent-files-container">
      <h2 className="recent-files-title">Statistics</h2>
      <table className="files-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id} className="file-item">
              <td className="file-name">{file.name}</td>
              <td className="file-date">{file.date}</td>
              <td>
                <span className={`status-badge ${file.status.toLowerCase()}`}>
                  {file.status}
                </span>
              </td>
              <td>
                <a href={`#/statistics/${file.id}`} className="more-details-link">More</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

