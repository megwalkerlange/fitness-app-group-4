import '../pastWorkoutContainer/pastcontain.css';
import { useState, useEffect } from 'react';

const savedWorkouts = localStorage.getItem('savedWorkouts');

// const getData = localStorage.getItem('savedWorkouts');

function PastWorkoutContainer() {
  return (
    <>
      <p>Your Previous Workouts</p>
      {/* <button onClick={getWorkouts}>Add Previous Workouts</button> */}

      <ul>
        <li>
          <p>{savedWorkouts}</p>
        </li>
      </ul>
    </>
  );
}

export default PastWorkoutContainer;
