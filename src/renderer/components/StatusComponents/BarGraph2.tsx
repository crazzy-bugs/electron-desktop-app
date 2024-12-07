import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
          display: false
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
    <div style={styles.container}>
      <h3 style={styles.title}>File Safety Overview</h3>
      <div style={styles.chartWrapper}>
        <Bar data={fileSafetyData} options={barOptions} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: '#fff', // Subtle light gray background
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // Soft shadow for a modern look
    height:'320px',
    fontFamily : 'Montserrat',
  },
  title: {
    textAlign: 'center' as const,
    fontSize: '18px',
    fontWeight: '600',
    color: '#444',
    marginBottom: '15px',
  },
  chartWrapper: {
    height: '280px', // Allocate more space for the chart
  },
};
