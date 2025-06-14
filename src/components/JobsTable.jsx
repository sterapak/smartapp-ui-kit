import React from 'react';

export function JobsTable({ jobs }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Job Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Company</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((j) => (
            <tr key={j.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{j.title}</td>
              <td className="px-6 py-4">{j.company}</td>
              <td className="px-6 py-4">{j.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
