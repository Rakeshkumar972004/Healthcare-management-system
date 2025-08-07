

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddMedicine = () => {
  const [medicine, setMedicine] = useState({
    name: '',
    dosage: '',
    time: '',
    frequency: '',
  });

  const [medicines, setMedicines] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const edit = params.get('edit');
    const stored = JSON.parse(localStorage.getItem('medicines') || '[]');
    setMedicines(stored);

    if (edit !== null && !isNaN(edit)) {
      const index = Number(edit);
      if (stored[index]) {
        setEditIndex(index);
        setMedicine(stored[index]);
      }
    }
  }, [location.search]);

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields filled
    if (!medicine.name || !medicine.dosage || !medicine.time || !medicine.frequency) {
      alert('Please fill in all fields before saving.');
      return;
    }

    let updatedList;

    if (editIndex !== null) {
      // Update existing medicine
      updatedList = [...medicines];
      updatedList[editIndex] = medicine;
      alert('Medicine updated successfully!');
    } else {
      // Add new medicine
      updatedList = [...medicines, medicine];
      alert('Medicine added successfully!');
    }

    localStorage.setItem('medicines', JSON.stringify(updatedList));
    setMedicines(updatedList);

    // Reset form and editing state
    setMedicine({ name: '', dosage: '', time: '', frequency: '' });
    setEditIndex(null);

    // Navigate back to medicine list page (adjust path as needed)
    navigate('/dashboard');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {editIndex !== null ? 'Update Medicine' : 'Add Medicine'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          name="name"
          placeholder="Medicine Name"
          value={medicine.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="dosage"
          placeholder="Dosage"
          value={medicine.dosage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="time"
          placeholder="Time (e.g. 9:00 AM)"
          value={medicine.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="frequency"
          placeholder="Frequency (e.g. Daily)"
          value={medicine.frequency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editIndex !== null ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
