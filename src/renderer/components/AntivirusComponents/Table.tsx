import React from 'react';

export default function Antivirus() {
  const antivirusData = [
    {
      name: 'Windows Defender',
      engineVersion: '4.18.2311.5',
      lastUpdated: '2024-01-15',
      status: 'Active',
    },
    {
      name: 'Trend Micro',
      engineVersion: '11.0.1563',
      lastUpdated: '2024-01-14',
      status: 'Active',
    },
    {
      name: 'ESET',
      engineVersion: '25789.1',
      lastUpdated: '2024-01-15',
      status: 'Active',
    },
    {
      name: 'Quick Heal',
      engineVersion: '21.3.0.5',
      lastUpdated: '2024-01-13',
      status: 'Active',
    },
    {
      name: 'Kaspersky',
      engineVersion: '21.3.10.25',
      lastUpdated: '2024-01-15',
      status: 'Active',
    },
    {
      name: 'McAfee',
      engineVersion: '10.2.3.126',
      lastUpdated: '2024-01-14',
      status: 'Active',
    },
  ];

  return (
    <div className="antivirus-container">
      <div className="antivirus-header">
        <h1 style={{fontFamily:'Montserrat'}}>Antivirus Statistics</h1>
        <p>Overview of antivirus engines running in parallel.</p>
      </div>

      <div className="antivirus-table">
        <div className="table-header">
          <div className="column-header antivirus-name">Antivirus Name</div>
          <div className="column-header">Engine Version</div>
          <div className="column-header">Last Updated</div>
          <div className="column-header">Status</div>
        </div>

        <div className="table-body">
          {antivirusData.map((antivirus, index) => (
            <div key={index} className="table-row">
              <div className="antivirus-name">{antivirus.name}</div>
              <div className="engine-version">{antivirus.engineVersion}</div>
              <div className="last-updated">{antivirus.lastUpdated}</div>
              <div className="status">
                <span className="status-indicator"></span>
                {antivirus.status}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
        *{
            font-family: 'Montserrat', sans-serif;
        }
            .antivirus-container {
  width: 93%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.antivirus-header {
  margin-bottom: 24px;
}

.antivirus-header h1 {
  font-size: 28px;
  color: #2c3e50;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.antivirus-header p {
  color: #666666;
  margin: 0;
  font-size: 16px;
}

.antivirus-table {
  width: 100%;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: #f8f9fa;
  border-bottom: 2px solid #e1e4e8;
}

.column-header {
  padding: 16px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.table-body {
  background: #ffffff;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid #e1e4e8;
  transition: background-color 0.2s ease;
}

.table-row:last-child {
  border-bottom: none;
}

.table-row:hover {
  background-color: #f8f9fa;
}

.table-row > div {
  padding: 16px;
  font-size: 14px;
  color: #2c3e50;
}

.antivirus-name {
  font-weight: 500;
}

.engine-version {
  font-family: monospace;
  color: #0366d6;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28a745;
  font-weight: 500;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background-color: #28a745;
  border-radius: 50%;
  display: inline-block;
}

@media (max-width: 768px) {
  .antivirus-container {
    padding: 16px;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .column-header:not(:first-child),
  .table-row > div:not(:first-child) {
    padding-top: 0;
  }

  .table-row {
    padding: 16px;
  }

  .column-header:not(:first-child) {
    display: none;
  }

  .table-row > div {
    padding: 4px 16px;
  }

  .engine-version::before {
    content: "Engine Version: ";
    color: #666666;
    font-family: inherit;
  }

  .last-updated::before {
    content: "Last Updated: ";
    color: #666666;
  }

  .status::before {
    content: "Status: ";
    color: #666666;
  }
}


            `}
      </style>
    </div>
  );
}
