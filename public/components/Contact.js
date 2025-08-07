import React from 'react';

const Contact = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4  text-decoration: underline;">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border" />
        <input type='number' placeholder=" Your Mobile No;"/>
        <textarea placeholder="Your Message" rows="5" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;