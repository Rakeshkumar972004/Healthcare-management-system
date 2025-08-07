import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Department from "./components/Department";
import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import Reminder from "./components/Reminder";
import History from "./components/History";
import Profile from "./components/Profile";
import Contact from "./components/Contact"
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/department' element={<Department/>} />
        <Route path='/add-medicine' element={<AddMedicine />} />
        <Route path='/medicines' element={<MedicineList />} />
        <Route path='/reminder' element={<Reminder />} />
        <Route path='/history' element={<History />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
