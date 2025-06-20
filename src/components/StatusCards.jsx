import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable clickable status cards grid
export default function StatusCards({ stats }) {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map(({ label, value, link }) => (
        <div
          key={label}
          className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition"
          onClick={() => navigate(link)}
        >
          <h2 className="text-base font-semibold text-gray-700 mb-1">{label}</h2>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      ))}
    </section>
  );
}