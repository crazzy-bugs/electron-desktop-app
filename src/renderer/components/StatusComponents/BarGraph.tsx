import React from 'react';

const BarGraph: React.FC = () => {
  return (
    <div className="pie-chart-container">
      <div className="title">Threat Distribution by Type</div>
      <div className="pie-chart"></div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'var(--color-malware)' }}></div>
          Malware (40%)
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'var(--color-phishing)' }}></div>
          Phishing (30%)
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'var(--color-ransomware)' }}></div>
          Ransomware (20%)
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'var(--color-other)' }}></div>
          Other (10%)
        </div>
      </div>
      <style>
        {`
         :root {
   --color-malware: #FF4500; /* OrangeRed */
--color-phishing: #FF6347; /* Tomato Red */
--color-ransomware: #FFD700; /* Golden Yellow */
--color-other: #32CD32; /* Lime Green */



        }

        .pie-chart-container {
            width: 300px;
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            height: 320px;
        }

        .pie-chart {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: conic-gradient(
                var(--color-malware) 0deg 144deg,
                var(--color-phishing) 144deg 252deg,
                var(--color-ransomware) 252deg 324deg,
                var(--color-other) 324deg 360deg
            );
            margin: 0 auto 20px;
        }

        .legend {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            font-size: 14px;
        }

        .legend-color {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            border-radius: 3px;
        }

        .title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: bold;
        }
        `}
      </style>
    </div>
  );
};

export default BarGraph;