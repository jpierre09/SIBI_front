import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Productos totales', 'Activos fijos', 'Consumibles'],
  datasets: [
    {
      label: '',
      data: [150, 50, 100],
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
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
