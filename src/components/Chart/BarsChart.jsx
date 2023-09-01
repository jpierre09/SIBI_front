import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { getTotalPorRed } from '../../services/adminApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function BarsChart() {
  const { activosFijos, carteraCounts } = getTotalPorRed();

  const cantidad = Object.values(carteraCounts);
  const red = ['Riesgos', 'Aire', 'Aire/Riesgos'];

  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Cantidad de Activos fijos por cartera',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
        },
      },
      x: {
        ticks: {
          // color: 'var(--primary-80)',
        },
      },
    },
  };

  const data = {
    labels: red,
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
        borderWidth: 2,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}
