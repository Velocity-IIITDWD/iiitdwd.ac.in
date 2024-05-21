"use client";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarGraphProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ labels, datasets }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const width = windowWidth && windowWidth < 1000 ? 370 : 800;
  const height = windowWidth && windowWidth < 1000 ? 200 : 400;

  const data = {
    labels: labels,
    datasets: datasets
  };

  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ width: width, height: height }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
