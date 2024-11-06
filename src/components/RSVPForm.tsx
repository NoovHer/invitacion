import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    dietaryRestrictions: '',
    plusOne: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
        <Check className="w-16 h-16 text-red-600" />
        <h3 className="text-2xl font-semibold text-gray-800">Thank you for your RSVP!</h3>
        <p className="text-gray-600">We look forward to celebrating with you! 🎄</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email</label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
        <input
          type="text"
          id="department"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          value={formData.department}
          onChange={(e) => setFormData({...formData, department: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">Dietary Restrictions</label>
        <textarea
          id="dietary"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          value={formData.dietaryRestrictions}
          onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="plusOne"
          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
          checked={formData.plusOne}
          onChange={(e) => setFormData({...formData, plusOne: e.target.checked})}
        />
        <label htmlFor="plusOne" className="ml-2 block text-sm text-gray-700">
          I'll bring a plus one
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <Send className="w-4 h-4" />
        <span>Confirm Attendance</span>
      </button>
    </form>
  );
}