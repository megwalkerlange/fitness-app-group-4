import React from 'react';
import { useState, useEffect } from 'react';

function PastWorkoutContainer() {
  // State to hold the saved workouts
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Function to retrieve saved workouts from local storage
  useEffect(() => {
    const savedWorkoutsData =
      JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    setSavedWorkouts(savedWorkoutsData);
  }, []);

  return (
    <div className="past-workout-container">
      <h2>Your Previous Workouts</h2>
      <ul className="past-workout-list">
        {savedWorkouts.map((workout, index) => (
          <li key={index} className="past-workout-item">
            <p>Name: {workout.name}</p>
            <p>Type: {workout.type}</p>
            <p>Muscle: {workout.muscle}</p>
            <p>Equipment: {workout.equipment}</p>
            <p>Difficulty: {workout.difficulty}</p>
            <p>Instructions: {workout.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PastWorkoutContainer;
