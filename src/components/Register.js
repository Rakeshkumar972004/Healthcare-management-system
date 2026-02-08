import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    // get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // add new email
    users.push(email);

    // save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    setEmail("");
    setPassword("");

    navigate("/profile"); // go to profile page
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
