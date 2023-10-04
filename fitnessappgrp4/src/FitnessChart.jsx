import React from 'react';
import { Bar } from 'react-chartjs-2';

function FitnessChart() {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Workout Progress',
        data: [5, 8, 12, 15], // Replace with your fitness data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ], // Custom colors for each bar
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ], // Border colors
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="fitness-chart">
      <h2>Your Fitness Progress Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default FitnessChart;
