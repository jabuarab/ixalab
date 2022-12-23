import React from 'react';
import style from "./Grafic.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total de Co2 capturado globalmente',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Co2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      borderColor: '#1b215b',
      backgroundColor: '#1b215b9e',
    },
  ],
};

function Grafic() {
  return <Line options={options} data={data} className={style.grafic} />;
}

export default Grafic;
