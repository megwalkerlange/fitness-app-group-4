import React from 'react';
import FitnessForm from '../../form';
import './home.css'; // Import your CSS file

function Home() {
  return (
    <div className="container">
      <p>
        Need help keeping track of your workouts? Do you want to set practical
        goals that you can maintain long-term? Then ‘Fantastic Fitness Friend;
        is the perfect companion on beginning your fitness journey. Fantastic
        Fitness Friend allows you to look up different workouts, log your
        progress and set yourself achievable and consistent goals. Whether
        you’re on a sprint or a marathon Fantastic Fitness Friend will be there
        every step of the way!
      </p>
      <FitnessForm />
    </div>
  );
}

export default Home;
