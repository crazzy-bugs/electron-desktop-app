import React from 'react';

const BarGraph: React.FC = () => {
  const data: {
    [key in 'Malware' | 'Phishing' | 'Ransomware' | 'Other']: number;
  } = {
    Malware: 10,
    Phishing: 10,
    Ransomware: 10,
    Other: 70,
  };

  const colors = {
    Malware: '#FF4500', // OrangeRed
    Phishing: '#FF6347', // Tomato Red
    Ransomware: '#FFD700', // Golden Yellow
    Other: '#32CD32', // Lime Green
  };

  const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  let currentAngle = 0;

  const segments = Object.keys(data).map((key) => {
    const value = data[key as 'Malware' | 'Phishing' | 'Ransomware' | 'Other'];
    const angle = (value / total) * 360;
    const segment = {
      color: colors[key as 'Malware' | 'Phishing' | 'Ransomware' | 'Other'],
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
    };
    currentAngle += angle;
    return segment;
  });

  return (
    <div className="pie-chart-container">
      <div className="title">Threat Distribution by Type</div>
      <div className="pie-chart"></div>
      <div className="legend">
        {Object.keys(data).map((key) => (
          <div className="legend-item" key={key}>
            <div
              className="legend-color"
              style={{
                backgroundColor:
                  colors[
                    key as 'Malware' | 'Phishing' | 'Ransomware' | 'Other'
                  ],
              }}
            ></div>
            {key} (
            {data[key as 'Malware' | 'Phishing' | 'Ransomware' | 'Other']}%)
          </div>
        ))}
      </div>
      <style>
        {`
         :root {
           ${Object.keys(colors)
             .map(
               (key) =>
                 `--color-${key.toLowerCase()}: ${colors[key as 'Malware' | 'Phishing' | 'Ransomware' | 'Other']};`,
             )
             .join('\n')}
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
                ${segments.map((segment) => `${segment.color} ${segment.startAngle}deg ${segment.endAngle}deg`).join(', ')}
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
