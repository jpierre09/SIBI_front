import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

const cantidad = [150, 100, 50];
const producto = ['Todos los productos', 'Activos fijos', 'Consumibles'];

const options = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 180,
    },
    x: {
      ticks: {
        color: 'var(--primary-80)',
      },
    },
  },
};

const data = {
  labels: producto,
  datasets: [
    {
      data: cantidad,
      backgroundColor: [
        'rgb(255, 99, 132, 0.2)',
        'rgb(54, 162, 235, 0.2)',
        'rgb(255, 205, 86, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
    },
  ],
};

export default function BarsChart() {
  return <Bar data={data} options={options} />;
}
