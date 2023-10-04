import React, { useState, useEffect } from 'react';
// import './pastWorkoutContainer.css'; // Import your CSS file here

function PastWorkoutContainer() {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    // Fetch saved workouts from local storage
    const savedWorkoutsData = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    setSavedWorkouts(savedWorkoutsData);
  }, []);

  return (
    <div className="past-workout-container">
      <h2>Your Previous Workouts</h2>
      <ul>
        {savedWorkouts.map((workout, index) => (
          <li key={index}>
            <p>{workout}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PastWorkoutContainer;
