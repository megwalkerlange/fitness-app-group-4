import React from 'react';
import { useState } from 'react';
import './form.css';

function FitnessForm() {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [medicalConditions, setMedicalConditions] = useState('');
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="fitness-form">
      <h2>Fitness Tracker Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>

          <input
            type="number"
            id="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Sex:</label>

          <select
            id="sex"
            value={sex}
            onChange={e => setSex(e.target.value)}
            required
          >
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

        <div className="form-group">
          <label>Fitness Goals:</label>
          <label>
            <input
              type="checkbox"
              value="weightLoss"
              checked={fitnessGoals.includes('weightLoss')}
              onChange={e =>
                setFitnessGoals(goals =>
                  updateCheckboxArray(goals, 'weightLoss', e.target.checked),
                )
              }
            />
            Weight Loss
          </label>
          <label>
            <input
              type="checkbox"
              value="muscleGain"
              checked={fitnessGoals.includes('muscleGain')}
              onChange={e =>
                setFitnessGoals(goals =>
                  updateCheckboxArray(goals, 'muscleGain', e.target.checked),
                )
              }
            />
            Muscle Gain
          </label>
        </div>

        <div className="form-group">
          <label>Dietary Restrictions:</label>
          <label>
            <input
              type="checkbox"
              value="vegetarian"
              checked={dietaryRestrictions.includes('vegetarian')}
              onChange={e =>
                setDietaryRestrictions(restrictions =>
                  updateCheckboxArray(
                    restrictions,
                    'vegetarian',
                    e.target.checked,
                  ),
                )
              }
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              value="vegan"
              checked={dietaryRestrictions.includes('vegan')}
              onChange={e =>
                setDietaryRestrictions(restrictions =>
                  updateCheckboxArray(restrictions, 'vegan', e.target.checked),
                )
              }
            />
            Vegan
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="medicalConditions">Medical Conditions:</label>
          <textarea
            id="medicalConditions"
            value={medicalConditions}
            onChange={e => setMedicalConditions(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={newsletterSubscription}
              onChange={() =>
                setNewsletterSubscription(!newsletterSubscription)
              }
            />
            Subscribe to Newsletter
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function updateCheckboxArray(arr, value, isChecked) {
  if (isChecked) {
    return [...arr, value];
  } else {
    return arr.filter(item => item !== value);
  }
}

export default FitnessForm;
