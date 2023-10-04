import React from 'react';
import { Bar } from 'react-chartjs-2';

function FitnessChart() {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Workout Progress',
        data: [5, 8, 12, 15], // Replace with your fitness data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)',
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
