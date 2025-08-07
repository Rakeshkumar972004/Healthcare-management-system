import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('medicines') || '[]');
    setMedicines(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedList = medicines.filter((_, index) => index !== indexToDelete);
    setMedicines(updatedList);
    localStorage.setItem('medicines', JSON.stringify(updatedList));
  };

  const handleUpdate = (indexToUpdate) => {
    navigate(`/add-medicine?edit=${indexToUpdate}`);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-decoration: underline;">Medicine List</h2>
      {medicines.length === 0 ? (
        <p>No medicines found. Add some first.</p>
      ) : (
        <div className="space-y-4">
          {medicines.map((med, index) => (
            <div key={index} className="border p-3 rounded bg-white shadow flex justify-between items-start">
              <div>
                <p><strong>Name:</strong> {med.name}</p>
                <p><strong>Dosage:</strong> {med.dosage}</p>
                <p><strong>Time:</strong> {med.time}</p>
                <p><strong>Frequency:</strong> {med.frequency}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleUpdate(index)} className="text-blue-500 hover:underline">Update</button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicineList;
