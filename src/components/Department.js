import React from 'react';

const Department = () => {
  const departments = [
    { name: 'Cardiology', doctor: 'Dr. John', Timing: '9:00 AM - 12:00 PM' },
    { name: 'Neurology', doctor: 'Dr. Sathya', Timing: '10:00 AM - 1:00 PM' },
    { name: 'Orthopedics', doctor: 'Dr. Raja', Timing: '9:00 AM - 11:00 AM' },
    { name: 'Pediatrics', doctor: 'Dr. Meera', Timing: '2:00 PM - 5:00 PM' },
    { name: 'General Medicine', doctor: 'Dr. Rani', Timing: '11:00 AM - 2:00 PM' },
    { name: 'ENT', doctor: 'Dr. Kumar', Timing: '2:00 PM - 4:00 PM' },
  ];

  return (
    <div className="department-container">
      <h2 className="text-xl font-bold mb-4 underline">Departments</h2>
      <ul className="space-y-4">
        {departments.map((dept, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 rounded shadow"
          >
            <div>
              <div className="font-semibold">{dept.name}</div>
              <div>{dept.doctor}</div>
              <div className="text-sm text-gray-600">{dept.Timing}</div>
            </div>
            <button><a
              href="/add-medicine"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Appointment
            </a></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Department;
