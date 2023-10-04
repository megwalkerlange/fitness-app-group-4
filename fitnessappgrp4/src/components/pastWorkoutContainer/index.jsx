import '../pastWorkoutContainer/pastcontain.css';
import { useState, useEffect } from 'react';

const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));
const tryy = JSON.stringify(savedWorkouts[1]);
// const getData = localStorage.getItem('savedWorkouts');

function PastWorkoutContainer() {
  console.log(tryy);

  return (
    <>
      <p>Your Previous Workouts</p>
      {/* <button onClick={getWorkouts}>Add Previous Workouts</button> */}

      <ul>
        <li>
          <p>{tryy}</p>
        </li>
      </ul>
    </>
  );
}

export default PastWorkoutContainer;
