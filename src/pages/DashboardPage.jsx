import React from 'react'

const stats = [
  { label: 'Queue Length', value: '2' },
  { label: 'Completed',    value: '1' },
]

const jobs = [
  { id: 1, company: 'Acme Corp',    title: 'Frontend Engineer', status: 'queued'    },
  { id: 2, company: 'Beta LLC',     title: 'Backend Developer', status: 'queued'    },
  { id: 3, company: 'Gamma Inc',    title: 'UX Designer',      status: 'completed' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Status cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-base font-semibold mb-2">{s.label}</h2>
            <p className="text-3xl font-bold">{s.value}</p>
          </div>
        ))}
      </section>

      {/* Jobs table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {['ID','Company','Title','Status'].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="px-6 py-4 whitespace-nowrap">{job.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      job.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
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
    </div>
  )
}
