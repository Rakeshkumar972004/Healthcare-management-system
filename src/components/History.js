import React, { useEffect, useState } from 'react';

const History = () => {
  const [history, setHistory] = useState({});
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('completedMedicines') || '{}');
    setHistory(storedHistory);

    const storedMeds = JSON.parse(localStorage.getItem('medicines') || '[]');
    setMedicines(storedMeds);
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6  text-decoration: underline">🕘 Medicine History</h2>

      {Object.keys(history).length === 0 ? (
        <p className="text-gray-500">No history data found.</p>
      ) : (
        Object.entries(history)
          .sort((a, b) => (a[0] < b[0] ? 1 : -1)) // newest date first
          .map(([date, indices]) => (
            <div key={date} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{date}</h3>
              <ul className="space-y-2">
                {indices.map((index) => {
                  const med = medicines[index];
                  return med ? (
                    <li
                      key={index}
                      className="bg-green-100 p-3 rounded border border-green-300 shadow"
                    >
                      <p><strong>Name:</strong> {med.name}</p>
                      <p><strong>Time:</strong> {med.time}</p>
                      <p><strong>Dosage:</strong> {med.dosage}</p>
                    </li>
                  ) : (
                    <li key={index} className="text-gray-400 italic">
                      Deleted medicine (index {index})
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
      )}
    </div>
  );
};

export default History;
