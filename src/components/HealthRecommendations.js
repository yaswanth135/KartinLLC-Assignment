import React from 'react';

const HealthRecommendations = ({ recommendations }) => {
  return (
    <div className="health-recommendations">
      <h3>Health Recommendations</h3>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthRecommendations;