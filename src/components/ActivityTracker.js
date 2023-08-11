import React from 'react';

const ActivityTracker = ({ steps, exercise }) => {
  return (
    <div className="activity-tracker">
      <p>Daily Steps: {steps}</p>
      <p>Exercise: {exercise}</p>
    </div>
  );
};

export default ActivityTracker;