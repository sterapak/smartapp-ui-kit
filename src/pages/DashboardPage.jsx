// src/pages/DashboardPage.jsx
import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function DashboardPage() {
  const { searchStatus, setSearchStatus, jobQueue, completedApplications } =
    useAppStore();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Dashboard Overview</h2>
      <p className="mb-4">
        Welcome to your dashboard. Here’s a quick summary of activity…
      </p>

      {/* Job Search Status Control */}
      <div className="mb-6">
        <span className="font-medium">Status:</span>{' '}
        <span className="italic">{searchStatus}</span>
      </div>

      <button
        onClick={() => setSearchStatus('active')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Activate Search
      </button>

      <div className="mt-4">
        <p>Queue length: {jobQueue.length}</p>
        <p>Completed: {completedApplications.length}</p>
      </div>
    </div>
  );
}
