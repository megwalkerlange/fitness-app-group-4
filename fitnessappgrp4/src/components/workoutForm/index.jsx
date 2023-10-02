import React, { useState, useEffect } from 'react';

const workoutOptions = [
  'Cardio',
  'Strength',
  'Stretching',
  'Power Lifting',
  'Olympic Weightlifting',
  'Plyometrics',
  'Strongman',
];
const muscleOptions = [
  'Abdominols',
  'Abductors',
  'Biceps',
  'Calves',
  'Chest',
  'Forearms',
  'Glutes',
  'Hamstrings',
  'Lats',
  'Lower Back',
  'Middle Back',
  'Neck',
  'Quadriceps',
  'Traps',
  'Triceps',
];

const difficultyOptions = ['Beginner', 'Intermediate', 'Expert'];

function DropDownForm() {
  const [selected, setSelected] = useState(
    workoutOptions[0],
    muscleOptions[0],
    difficultyOptions[0],
  );

  //   useEffect(() => {
  //     axios
  //       .get('https://api.api-ninjas.com/v1/exercises?muscle={}'.workoutOptions)
  //       .then(response => {
  //         setSelected(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, []);
  return (
    <>
      <form>
        <p>Please select which workout you would like to complete:</p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {workoutOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <form>
        <p>Please select what muscle group you would like to target</p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {muscleOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <form>
        <p>Please select a difficulty level:</p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {difficultyOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <button>Submit</button>

      <span className="exercise-output"></span>
    </>
  );
}

export default DropDownForm;
