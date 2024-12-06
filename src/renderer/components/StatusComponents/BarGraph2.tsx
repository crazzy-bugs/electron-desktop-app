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
    labels: ['Safe', 'Unsafe'],
    datasets: [
      {
        label: 'File Safety',
        data: [80, 20],
        backgroundColor: [
          'linear-gradient(to bottom, #81c784, #388e3c)',
          'linear-gradient(to bottom, #ef5350, #b71c1c)',
        ], // Gradient colors
        borderColor: ['#388E3C', '#B71C1C'],
        borderWidth: 2,
        borderRadius: 15, // More rounded corners
        barThickness: 40, // Adjust bar width
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#444', // Slightly darker label color
          font: {
            size: 16, // Larger font size
            weight: 'bold',
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#222', // Darker tooltip background
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 12,
        },
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No gridlines on X-axis
        },
        ticks: {
          color: '#666',
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.05)', // Light gridlines
        },
        ticks: {
          color: '#666',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>File Safety Count</h3>
      <Bar data={fileSafetyData} options={barOptions} />
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '470px', // Increased max width for better appearance
    // margin: '20px auto', // Add some spacing around the container
    backgroundColor: '#fff', // Softer background color
    borderRadius: '12px', // More rounded container corners
    // boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)', // Stronger shadow for emphasis
    padding: '20px', // Increased padding for better layout
    height: '320px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
};
