import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">MediConnect</h1> <nav className="space-x-4">
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/department" className="hover:underline">Department</Link>
                <Link to="/add-medicine" className="hover:underline">AddMedicine</Link>
                <Link to="/medicines" className="hover:underline">MedicineList</Link>
                <Link to="/reminder" className="hover:underline">Reminder</Link>
                <Link to="/history" className="hover:underline">History</Link>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
                <Link to="/profile" className="hover:underline">Profile</Link> </nav> </header>);
};

export default Header;