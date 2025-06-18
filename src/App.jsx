import React from "react";

const jobs = [
  { company: "Acme Corp", title: "Frontend Engineer", status: "queued" },
  { company: "Beta LLC", title: "Backend Developer", status: "queued" },
  { company: "Gamma Inc", title: "UX Designer", status: "completed" },
];

const App = () => {
  const completed = jobs.filter((j) => j.status === "completed").length;
  const queue = jobs.length - completed;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">My Project Dashboard</h1>

      <div className="w-full max-w-lg bg-gray-800 rounded-xl p-6 shadow-md mb-6 mx-auto">
        <p className="text-lg font-medium">
          Status: <span className="text-blue-400">idle</span>
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md">
          Activate Search
        </button>
        <div className="mt-4 text-sm">
          <p>Queue length: {queue}</p>
          <p>Completed: {completed}</p>
        </div>
      </div>

      <div className="w-full max-w-lg bg-gray-800 rounded-xl p-6 shadow-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-2">Company</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td className="py-2">{job.company}</td>
                <td className="py-2">{job.title}</td>
                <td className="py-2 capitalize">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;