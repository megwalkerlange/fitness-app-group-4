import FitnessForm from '../../form';
import css from '../home/home.css';
function Home() {
  return (
    <>
      <header className='intro-text'>
        <h1>Need help keeping track of your workouts?</h1>
        <p>
        <strong>Set practical goals. Maintain your long-term health plan.</strong> <br /> Our fitness tracker is the perfect companion to get started and succeed on your fitness journey.
      </p>
      </header>
      <FitnessForm></FitnessForm>
    </>
  );
}

export default Home;
