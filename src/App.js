import React from 'react';
import Profile from './components/Profile';
import VitalSigns from './components/VitalSigns';
import ActivityTracker from './components/ActivityTracker';
import HealthRecommendations from './components/HealthRecommendations';
import './App.css';

const App = () => {
  const profile = {
    name: 'Sunita Sharma',
    age: 68,
  };

  const vitalSigns = {
    heartRate: 75,
    bloodPressure: '120/80',
  };

  const activity = {
    steps: 6000,
    exercise: '30 minutes of walking',
  };

  const recommendations = [
    'Increase daily steps to 8000 for better cardiovascular health.',
    'Try yoga for flexibility and balance.',
    'Include more fruits and vegetables in your diet.',
  ];

  return (
    <div className="app">
      <h1>Personalized Health and Fitness Monitoring</h1>
      <Profile name={profile.name} age={profile.age} />
      <VitalSigns heartRate={vitalSigns.heartRate} bloodPressure={vitalSigns.bloodPressure} />
      <ActivityTracker steps={activity.steps} exercise={activity.exercise} />
      <HealthRecommendations recommendations={recommendations} />
    </div>
  );
};

export default App;