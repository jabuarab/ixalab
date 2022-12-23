import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import style from "./Grafic.module.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Cantidad de parcelas compradas',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Parcelas compradas',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#1b215b',
    },
  ],
};

function Grafic() {
  return <Bar options={options} data={data} className={style.grafic} />;
}

export default Grafic;