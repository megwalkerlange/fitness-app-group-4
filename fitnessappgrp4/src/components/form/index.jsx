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