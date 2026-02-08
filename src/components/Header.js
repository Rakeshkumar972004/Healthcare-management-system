import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="logo">Healthcare</h1>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/department">Department</Link>
          <Link to="/add-medicine">Add Medicine</Link>
          <Link to="/medicines">Medicines</Link>
          <Link to="/reminder">Reminder</Link>
          <Link to="/history">History</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="menu-panel">
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link to="/department" onClick={() => setOpen(false)}>Department</Link>
          <Link to="/add-medicine" onClick={() => setOpen(false)}>Add Medicine</Link>
          <Link to="/medicines" onClick={() => setOpen(false)}>Medicines</Link>
          <Link to="/reminder" onClick={() => setOpen(false)}>Reminder</Link>
          <Link to="/history" onClick={() => setOpen(false)}>History</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
        </div>
      )}
    </>
  );
};

export default Header;
