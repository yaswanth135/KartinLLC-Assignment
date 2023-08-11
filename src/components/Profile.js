import React from 'react';

const Profile = ({ name, age }) => {
  return (
    <div className="profile">
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;