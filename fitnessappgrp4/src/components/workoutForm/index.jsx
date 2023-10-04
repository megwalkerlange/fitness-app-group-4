import { useState, useEffect } from 'react';
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
  const [selected, setSelected] = useState(muscleOptions);
  const handleSubmit = e => {
    e.preventDefault();
  };

  const [selectedMuscle, setSelectedMuscle] = useState(muscleOptions);
  const [searchResults, setSearchResults] = useState([]);

  const saveToLS = workout => {
    // try to get the data from ls. if theres no data, store empty arr in var
    let savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];

    // push the workout in the array (be it with data from ls or empty)
    savedWorkouts.push(workout);

    // set the new array back in ls with the same name (so it overwrites the old one with the new data)
    localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));
  };

  useEffect(() => {
    async function getData() {
      const data = await API.search(selectedMuscle);

      console.log(data);
      setSearchResults(data.data);
    }
    getData();
  }, [selectedMuscle]);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
      {/* <button onClick={e => setSelectedMuscle(e.target.value)}>Submit</button> */}
      <ul className="list-group search-results">
        {searchResults.map(result => (
          <li key={result} className="list-group-item">
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
