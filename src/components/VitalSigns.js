import React from 'react';

const VitalSigns = ({ heartRate, bloodPressure }) => {
  return (
    <div className="vital-signs">
      <p>Heart Rate: {heartRate} bpm</p>
      <p>Blood Pressure: {bloodPressure} mmHg</p>
    </div>
  );
};

export default VitalSigns;