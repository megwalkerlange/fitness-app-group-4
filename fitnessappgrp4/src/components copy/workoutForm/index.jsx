import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import '../workoutForm/workoutForm.css';

const muscleOptions = [
  'Please Select',
  'Abdominals',
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

function DropDownForm() {
  const [selectedMuscle, setSelectedMuscle] = useState('Please Select');
  const [searchResults, setSearchResults] = useState([]);

  const saveToLS = (workout) => {
    // Try to get the data from localStorage. If there's no data, store an empty array in the variable.
    let savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];

    // Push the workout into the array (be it with data from localStorage or empty).
    savedWorkouts.push(workout);

    // Set the new array back in localStorage with the same name (so it overwrites the old one with the new data).
    localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));
  };

  useEffect(() => {
    async function getData() {
      if (selectedMuscle !== 'Please Select') {
        const data = await API.search(selectedMuscle);

        console.log(data);
        setSearchResults(data.data);
      }
    }
    getData();
  }, [selectedMuscle]);

  const handleSelectChange = (e) => {
    setSelectedMuscle(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Please select what muscle group you would like to target</p>
        <select
          value={selectedMuscle}
          onChange={handleSelectChange}
        >
          {muscleOptions.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <ul className="list-group search-results">
        {searchResults.map((result, index) => (
          <li key={index} className="list-group-item">
            <p>{result.name}</p>
            <p>{result.muscle}</p>
            <p> {result.difficulty}</p>
            <p> {result.instructions}</p>
            <button onClick={() => saveToLS(result)}>
              Click to save Workout
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DropDownForm;
