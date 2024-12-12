import {useEffect,useState} from 'react';
import React from 'react';
import { Code2Icon, EllipsisVertical, EyeIcon } from 'lucide-react';
import './RecentFiles.css';
import Modal from '../partials/Modal';
import Stats from '../Stats';


export default function RecentFiles() {
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
            console.log(formattedScans);
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

  const [showModal, setShowModal] = useState(false);


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
          {scans.map((file) => (
            <tr key={file.id} className="file-item">
              <td className="file-name">{file.name}</td>
              <td className="file-date">{file.date}</td>
              <td>
                <span className={`status-badge ${file.status.toLowerCase()}`}>
                  {file.status}
                </span>
              </td>
              <td>
                <>
                  <EyeIcon className="action-icon" onClick={() => {setShowModal(true)}} />
                  <Modal show={showModal} onClose={() => {setShowModal(false)}}>
                    <>
                      <Stats>
                        <div className="stats-header">
                          <h2>File Statistics</h2>
                          <button className="close-button" onClick={() => {setShowModal(false)}}>
                            <Code2Icon size={16} />
                          </button>
                        </div>
                        <div className="stats-content">
                          <p>File Name: {file.name}</p>
                          <p>Date: {file.date}</p>
                          <p>Status: {file.status}</p>
                        </div>
                      </Stats>
                    </>
                  </Modal>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
