import React from 'react';

export default function AntivirusStatsTable() {
    const antivirusStats = [
        { name: 'Windows Defender', totalDetected: 25 },
        { name: 'Trend Micro', totalDetected: 42 },
        { name: 'ESET', totalDetected: 29 },
        { name: 'Quick Heal', totalDetected: 29 },
        { name: 'Kaspersky', totalDetected: 29 },
        { name: 'Mcafee', totalDetected: 29 },

    ];

    return (
        <div className="antivirus-stats" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <h1>Antivirus Statistics</h1>
            <p>Overview of viruses detected by each antivirus running in parallel.</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Antivirus Name</th>
                            <th>Total Virus Detected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {antivirusStats.map((antivirus, index) => (
                            <tr key={index}>
                                <td>{antivirus.name}</td>
                                <td>{antivirus.totalDetected}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style>{`
            *{
            overflow-x-hidden;
            }
                .antivirus-stats {
                    font-family: 'Montserrat', sans-serif;
                    width: 95%;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                }

                h1 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 20px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: #fff;
                }

                th, td {
                    text-align: left;
                    padding: 12px;
                    border-bottom: 1px solid #ddd;
                }

                th {
                    background-color: #f2f2f2;
                    font-weight: bold;
                }

                tr:hover {
                    background-color: #f5f5f5;
                }

                .table-container {
                    max-height: 350px;
                    overflow-y: auto;
                }

                thead tr {
                    position: sticky;
                    top: 0;
                    background-color: #f2f2f2;
                    z-index: 1;
                }
                @media (max-width: 1300px) {
                    .antivirus-stats{
                        width: 93%;
                    }
            `}</style>
        </div>
    );
}
