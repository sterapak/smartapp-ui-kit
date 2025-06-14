import React from 'react';

export function QueueListPanel({ items, title = 'Queue Details', onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end">
      <div className="bg-white w-80 max-w-full h-full p-4 overflow-y-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        {items.length ? (
          items.map((job) => (
            <div key={job.id} className="mb-3 p-2 border rounded">
              <div className="font-medium">{job.title}</div>
              <div className="text-sm text-gray-500">{job.company}</div>
              <div className="text-xs text-gray-400">{job.status}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No items in queue.</div>
        )}
      </div>
    </div>
  );
}
