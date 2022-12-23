import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import style from "./Grafic.module.css";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
  datasets: [
    {
      label: '% del area cubierta',
      data: [20, 50, 99, 60, 86, 32],
      backgroundColor: [
        'rgba(27, 33, 91, 1)',
        'rgba(27, 33, 91, 0.9)',
        'rgba(27, 33, 91, 0.8)',
        'rgba(27, 33, 91, 0.7)',
        'rgba(27, 33, 91, 0.6)',
        'rgba(27, 33, 91, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

function Grafic() {
  return <PolarArea data={data} className={style.grafic} />;
}

export default Grafic;