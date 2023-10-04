import css from '../pastWorkoutContainer/pastcontain.css';

// const searchStored [searchResults, setSearchResults] = useEffect(data);

const showStored = localStorage.getItem('name');
console.log([showStored]);

function PastWorkoutContainer() {
  return (
    <>
      <p>Your Previous Workouts</p>
      <ul>
        <li>
          <p>{showStored}</p>
        </li>
      </ul>
    </>
  );
}
export default PastWorkoutContainer;
