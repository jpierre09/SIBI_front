import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getPorcentajeConsumiblesCatg } from '../../services/adminApi';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const { categorias, porcentajes } = getPorcentajeConsumiblesCatg();

  const data = {
    labels: categorias,
    datasets: [
      {
        label: '',
        data: porcentajes,
        backgroundColor: [
          'rgb(255, 99, 132, 0.2)',
          'rgb(54, 162, 235, 0.2)',
          // 'rgb(255, 205, 86, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          // 'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Porcentaje de Consumibles',
        font: {
          size: 20,
        }
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
