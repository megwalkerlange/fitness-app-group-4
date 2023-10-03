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

  const [selectedMuscle, setSelectedMuscle] = useState(muscleOptions[0]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await API.search(selectedMuscle);

      console.log('Hello World');
      console.log(data);
      setSearchResults(data.data);
    }
    getData();
    //   axios
    //     .get('https://api.api-ninjas.com/v1/exercises?muscle={}'.workoutOptions)
    //     .then(response => {
    //       setSelected(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);

    // });
  }, [selectedMuscle]);
  return (
    <>
      {/* <form>
        <p>Please select which workout you would like to complete:</p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {workoutOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form> */}
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
      {/* <form>
        <p>Please select a difficulty level:</p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {difficultyOptions.map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form> */}
      {/* <button onChange={e => setSelectedMuscle(e.target.value)}>Submit</button> */}
      <ul className="list-group search-results">
        {searchResults.map(result => (
          <li key={result} className="list-group-item">
            <p>{result.name}</p>
            <p>{result.type}</p>
            <p> {result.difficulty}</p>
            <p> {result.instructions}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DropDownForm;
