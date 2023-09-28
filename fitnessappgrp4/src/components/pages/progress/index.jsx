import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import React from 'react';
import Progress from '../progress/index';

const Progress = () => {
  const [chartData, setChartData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Workout Progress',
        data: [30, 45, 60, 75, 90], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="progress">
      <h2>Workout Progress</h2>
      <div className="chart-container">
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 100, 
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const PastWorkouts = () => {
  return (
    <div className="past-workouts">
      <h2>Past Workouts</h2>
      <Progress />
    </div>
  );
};

export default PastWorkouts;