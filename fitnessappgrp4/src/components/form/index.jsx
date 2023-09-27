import React, { useState } from 'react';

function FitnessForm() {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [medicalConditions, setMedicalConditions] = useState('');
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fitness-form">
      <h2>Fitness Tracker Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Current Activity Level:</label>
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="sedentary"
              checked={activityLevel === 'sedentary'}
              onChange={() => setActivityLevel('sedentary')}
              required
            />
            Sedentary
          </label>
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="moderate"
              checked={activityLevel === 'moderate'}
              onChange={() => setActivityLevel('moderate')}
              required
            />
            Moderate
          </label>
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="active"
              checked={activityLevel === 'active'}
              onChange={() => setActivityLevel('active')}
              required
            />
            Active
          </label>
        </div>