import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
);

export default function Dashboard() {
  const fileSafetyData = {
    labels: ['Safe', 'Unsafe'],
    datasets: [
      {
        label: 'File Safety',
        data: [80, 20],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderColor: ['#388E3C', '#D32F2F'],
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const scannedFilesData = {
    labels: ['2024-10-01', '2024-10-02', '2024-10-03'], 
    datasets: [
      {
        label: 'Files Scanned',
        data: [10, 15, 30], 
        fill: false,
        borderColor: '#1976D2',
        borderWidth: 2,
        tension: 0.5, // Smooth the line
      },
    ],
  };

  return (
    <div className="dashboard" style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', height: '200px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        <div style={{ width: '48%', minWidth: '300px', height: '150px' }}>
          <h3>File Safety Count</h3>
          <Bar 
            data={fileSafetyData} 
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }} 
          />
        </div>
        <div style={{ width: '48%', minWidth: '300px', height: '150px' }}>
          <h3>Files Scanned Over Time</h3>
          <Line
            data={scannedFilesData}
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) and (max-width: 1600px) {
          .dashboard {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
