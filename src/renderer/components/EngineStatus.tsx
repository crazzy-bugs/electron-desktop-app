import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const EngineStatus: React.FC = () => {
  return (
    <div className='engine-status'>
      <div className="engine-card">
        <img src="/placeholder.svg?height=40&width=40" alt="ESET logo" className="engine-logo" />
        <h3>ESET</h3>
        <p className="status" style={{ color: status === 'Active' ? 'red' : 'green' }}>
          <FaCheckCircle className="icon-small" />&nbsp;Active
        </p>
        <p>Last updated: 1 hour ago</p>
      </div>
      <div className="engine-card">
        <img src="/placeholder.svg?height=40&width=40" alt="ESET logo" className="engine-logo" />
        <h3>Windows Defender</h3>
        <p className="status" style={{ color: status === 'Active' ? 'red' : 'green' }}>
          <FaCheckCircle className="icon-small" />&nbsp;Active
        </p>
        <p>Last updated: 1 hour ago</p>
      </div>
      <div className="engine-card">
        <img src="/placeholder.svg?height=40&width=40" alt="Trend Micro logo" className="engine-logo" />
        <h3>Trend Micro</h3>
        <p className="status" style={{ color: status === 'Active' ? 'red' : 'green' }}>
          <FaCheckCircle className="icon-small" />&nbsp;{'Active'}
        </p>        
        <p>Last updated: 30 minutes ago</p>
      </div>
     <style>{`
       .engine-status {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 18px;
    margin-bottom: 18px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex; 
    justify-content: space-between;

  }
  
  .engine-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .engine-card {
    background-color: var(--background-color);
    border-radius: 10px;
    padding: 15px;
    text-align: center;
              border: 1px solid #E5E7EB;
  }
  
  .engine-logo {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .engine-card h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .engine-card p {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .engine-card .status {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--tertiary-color);
  }
     `}</style>
    </div>
  );
};

export default EngineStatus;