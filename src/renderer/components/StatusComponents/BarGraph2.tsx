import './BarGraph2.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function EnhancedBarGraph() {
  const fileSafetyData = {
    labels: ['Safe Files', 'Unsafe Files'],
    datasets: [
      {
        label: 'File Safety Status',
        data: [80, 20],
        backgroundColor: [
          'rgba(129, 199, 132, 0.8)', // Green gradient
          'rgba(239, 83, 80, 0.8)', // Red gradient
        ],
        hoverBackgroundColor: [
          'rgba(76, 175, 80, 1)', // Darker green on hover
          'rgba(244, 67, 54, 1)', // Darker red on hover
        ],
        borderColor: ['rgba(76, 175, 80, 1)', 'rgba(244, 67, 54, 1)'],
        borderWidth: 2,
        borderRadius: 10,
        barThickness: 50,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 600,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#000',
        titleColor: '#fff',
        bodyColor: '#ddd',
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: 700,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    animation: {
      duration: 1500, // Smooth animation for the bars
      easing: 'easeOutBounce' as const,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          display: false,
        },
        ticks: {
          color: '#555',
          font: {
            size: 14,
          },
        },
        beginAtZero: true, // Ensure y-axis starts at zero
      },
    },
  };

  return (
    <div className="wrapper">
      <h3 className="title">File Safety Overview</h3>
      <div className="chartWrapper">
        <Bar data={fileSafetyData} options={barOptions} />
      </div>
    </div>
  );
}
