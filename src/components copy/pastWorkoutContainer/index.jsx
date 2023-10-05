import React from 'react';
import '../pastWorkoutContainer/pastcontain.css';

const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));
const tryy = JSON.stringify(savedWorkouts[1]);

// const name = tryy.split('');




function PastWorkoutContainer() {
  const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));

  return (
    <div>
      <h3>Your Previous Workouts</h3>
      <ul>
        {savedWorkouts &&
          savedWorkouts.map((workout, index) => (
            <li key={index}>
              <p>{workout.name}</p>
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
