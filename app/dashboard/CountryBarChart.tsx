import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

interface BarChartProps {
  labels: string[];
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {

    aspectRatio: 2,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <div className="chart-container"><Bar data={chartData} options={options}/></div>;
};

export default BarChart;