import React from 'react';
import { Link } from 'react-router-dom';

const CurrentWorkouts = () => {
  // Sample data for demonstration purposes
  const todayWorkouts = [
    { id: 1, exercise: 'Running', duration: '30 minutes' },
    { id: 2, exercise: 'Zumba', duration: '45 minutes' },
  ];

  const weekWorkouts = [
    { id: 3, exercise: 'Weightlifting', duration: '60 minutes' },
    { id: 4, exercise: 'Cycling', duration: '45 minutes' },
  ];

  return (
    <div className="current-workouts">
      <h2>Today's Workouts</h2>
      <ul>
        {todayWorkouts.map((workout) => (
          <li key={workout.id}>
            {workout.exercise} - {workout.duration}
          </li>
        ))}
      </ul>

      <h2>This Week's Workouts</h2>
      <ul>
        {weekWorkouts.map((workout) => (
          <li key={workout.id}>
            {workout.exercise} - {workout.duration}
          </li>
        ))}
      </ul>

      <Link to="/future-workouts">Go to Future Workouts</Link>
    </div>
  );
};

export default CurrentWorkouts;
