import React, { useEffect, useState } from 'react';

// Utility to get today's date as a string (YYYY-MM-DD)
const getToday = () => new Date().toISOString().split('T')[0];

const Reminder = () => {
  const [medicines, setMedicines] = useState(() => {
    return JSON.parse(localStorage.getItem('medicines') || '[]');
  });

  const [completedToday, setCompletedToday] = useState([]);

  // Load completed data for today
  useEffect(() => {
    const today = getToday();
    const history = JSON.parse(localStorage.getItem('completedMedicines') || '{}');
    setCompletedToday(history[today] || []);
  }, []);

  // Reminder alert logic
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      medicines.forEach((med, index) => {
        if (med.time === currentTime && !completedToday.includes(index)) {
          alert(`Reminder: Time to take ${med.name}`);
        }
      });
    };

    const interval = setInterval(checkReminders, 60000); // every 1 minute
    return () => clearInterval(interval);
  }, [medicines, completedToday]);

  const markAsCompleted = (index) => {
    const today = getToday();
    const updatedCompleted = [...completedToday, index];

    // Save to localStorage
    const history = JSON.parse(localStorage.getItem('completedMedicines') || '{}');
    history[today] = updatedCompleted;
    localStorage.setItem('completedMedicines', JSON.stringify(history));

    setCompletedToday(updatedCompleted);
  };

  const notCompletedList = medicines.filter((_, index) => !completedToday.includes(index));
  const completedList = medicines.filter((_, index) => completedToday.includes(index));

  return (
    <div className="Reminder-container">
      <h2 className="text-2xl font-bold mb-6  text-decoration: underline">Medicine Reminder</h2>

      {/* Not Completed List */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-red-600">⏳ Not Completed</h3>
        {notCompletedList.length === 0 ? (
          <p className="text-gray-500">All medicines are marked as taken today.</p>
        ) : (
          notCompletedList.map((med, index) => {
            const realIndex = medicines.findIndex(m => m === med);
            return (
              <div key={realIndex} className="border p-4 mb-2 rounded shadow bg-white">
                <p><strong>Name:</strong> {med.name}</p>
                <p><strong>Time:</strong> {med.time}</p>
                <button
                  onClick={() => markAsCompleted(realIndex)}
                  className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Mark as Taken
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Completed List */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-green-600">✅ Completed Today</h3>
        {completedList.length === 0 ? (
          <p className="text-gray-500">No medicines taken yet today.</p>
        ) : (
          completedList.map((med, index) => (
            <div key={index} className="border p-4 mb-2 rounded shadow bg-gray-100">
              <p><strong>Name:</strong> {med.name}</p>
              <p><strong>Time:</strong> {med.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reminder;
