import '../pastWorkoutContainer/pastcontain.css';
import { useState, useEffect } from 'react';

function getWorkouts() {
  // getting stored items
  const savedWorkouts = localStorage.getItem('savedWorkouts');
  const savedList = JSON.parse(savedWorkouts);
  return savedList || [];
}

// const getData = localStorage.getItem('savedWorkouts');

function PastWorkoutContainer() {
  return (
    <>
      <p>Your Previous Workouts</p>
      {/* <button onClick={getWorkouts}>Add Previous Workouts</button> */}

      <ul>
        <li>
          <p>{getWorkouts}</p>
        </li>
      </ul>
    </>
  );
}

export default PastWorkoutContainer;
