import React from 'react';

const Profile = () => {
  const user = localStorage.getItem('user');

  return (
    <div className="profile-container">
      <h2 className="text-xl font-bold mb-4 text-decoration: underline;">Profile</h2>
      <p><strong>Email:</strong> {user}</p>
    </div>
  );
};

export default Profile;