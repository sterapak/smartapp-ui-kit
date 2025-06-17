import React from "react";
import { useAppStore } from "../store/useAppStore";

export default function JobsTable() {
  const jobs = useAppStore((state) => state.jobs);

  if (!jobs || jobs.length === 0) {
    return (
      <div className="mt-4 text-sm text-gray-500">
        No job records found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200 shadow rounded-md">
        <thead className="bg-gray-50 text-sm text-gray-600">
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Company</th>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 border-b">{job.id}</td>
              <td className="px-4 py-2 border-b">{job.company}</td>
              <td className="px-4 py-2 border-b">{job.title}</td>
              <td className="px-4 py-2 border-b">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    job.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
