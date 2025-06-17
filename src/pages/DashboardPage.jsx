import React, { useEffect } from 'react'
import { useAppStore }       from '../store/useAppStore'
import ActivateSearchButton from '../components/ActivateSearchButton';
import JobsTable         from '../components/JobsTable'

export default function DashboardPage() {
  const { loadJobs, jobs, queueLength, completed, status } = useAppStore()

  useEffect(() => {
    loadJobs()
  }, [loadJobs])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Project Dashboard</h1>
      <p>Status: {status}</p>
      <ActivateSearchButton />

      <p>Queue length: {queueLength}</p>
      <p>Completed: {completed}</p>

      <h2 className="mt-8 text-2xl font-semibold">Dashboard Overview</h2>
      <p>Welcome to your dashboard. Here’s a quick summary of activity…</p>

      <JobsTable jobs={jobs} />
    </div>
  )
}
