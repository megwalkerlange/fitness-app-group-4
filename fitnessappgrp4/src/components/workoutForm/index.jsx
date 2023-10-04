import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
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

  const handleSubmit = e => {
    e.preventDefault();
  };

  const [selectedMuscle, setSelectedMuscle] = useState(muscleOptions[0]);
  const [searchResults, setSearchResults] = useState([]);

  localStorage.setItem('name', JSON.stringify(searchResults));
  const clear = useEffect(() => {
    async function getData() {
      const data = await API.search(selectedMuscle);

      console.log(data);
      setSearchResults(data.data);
    }
    getData();
  }, [selectedMuscle]);

  // useEffect(() => {
  //   localStorage.setItem('name', JSON.stringify(searchResults));
  //   const saved = localStorage.getItem('name');
  //   // const initialValue = JSON.parse(saved);
  //   console.log(saved);
  // }, [searchResults]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Please select what muscle group you would like to target</p>
        <select
        // value={selected}
        // onChange={e => setSelectedMuscle(e.target.value)}
        >
          {muscleOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <button
        // value={selected}
        onClick={e => setSelectedMuscle(e.target.value)}
      >
        Submit
      </button>
      <ul className="list-group search-results">
        {searchResults.map(result => (
          <li key={result} className="list-group-item">
            <p>{result.name}</p>
            <p>{result.type}</p>
            <p> {result.difficulty}</p>
            <p> {result.instructions}</p>
            <button onClick={e => setData(e.target.value)}>
              Click to save Workout
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DropDownForm;
