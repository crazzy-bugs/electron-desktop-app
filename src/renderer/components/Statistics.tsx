const Statistics: React.FC = () => (
    <div>
        <div className="quick-heal-stats">
            <h3>CII Shield Pro has saved you so far :</h3>
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-value">911</div>
                    <div className="stat-label">Total Threats Blocked</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">0</div>
                    <div className="stat-label">Hacking Attempts Blocked</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">-</div>
                    <div className="stat-label">Phishing Attempts Blocked</div>
                </div>
            </div>
        </div>

        <style>{`
        .quick-heal-stats {
          border-top: 1px solid #E5E7EB;
          padding: 16px;
          background-color: white;
          border-radius: 10px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .stat-item {
          border: 1px solid #E5E7EB;
          padding: 8px;
          border-radius: 10px;
          background-color: white;
        }
        .stat-value {
          font-size: 24px;
          font-weight: bold;
        }
       .stat-label {
         font-size: 14px;
          color: #6B7280;
       }
`}</style>
    </div>
);

export default Statistics;
