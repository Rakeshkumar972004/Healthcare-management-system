import React, { useEffect, useState } from "react";

const Profile = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setEmails(users);
  }, []);

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>

      {emails.length > 0 ? (
        <ul className="list-disc pl-5">
          {emails.map((email, index) => (
            <li key={index} className="text-green-600">
              {email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No registered users found</p>
      )}
    </div>
  );
};

export default Profile;
