import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import pastWorkoutContainer from '../pastWorkoutContainer';
import css from '../workoutForm/workoutForm.css';

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

const difficultyOptions = ['Beginner', 'Intermediate', 'Expert'];

function DropDownForm() {
  const [selected, setSelected] = useState(
    workoutOptions[0],
    muscleOptions[0],
    difficultyOptions[0],
  );

  const [selectedMuscle, setSelectedMuscle] = useState(muscleOptions[0]);
  const [searchResults, setSearchResults] = useState([]);
  // localStorage.setItem('name', JSON.stringify(searchResults));

  useEffect(() => {
    async function getData() {
      const data = await API.search(selectedMuscle);

      console.log(data);
      setSearchResults(data.data);
    }
    getData();
  }, [selectedMuscle]);

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(searchResults));
  }, [searchResults]);

  useState(() => {
    // getting stored value
    const saved = localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  return (
    <>
      <form>
        <p>Please select what muscle group you would like to target</p>
        <select
          value={selected}
          onChange={e => setSelectedMuscle(e.target.value)}
        >
          {muscleOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <ul className="list-group search-results">
        {searchResults.map(result => (
          <li key={result} className="list-group-item">
            <p>{result.name}</p>
            <p>{result.type}</p>
            <p> {result.difficulty}</p>
            <p> {result.instructions}</p>
            <button onChange={e => initialValue()}>
              Click to save Workout
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DropDownForm;
