import { create } from 'zustand'
import { fetchJobs } from '../api/supabaseJobsClient'

export const useAppStore = create(set => ({
  status: 'idle',
  jobs: [],
  queueLength: 0,
  completed: 0,

  loadJobs: async () => {
    set({ status: 'loading' })
    try {
      const jobs = await fetchJobs()
      set({
        jobs,
        queueLength: jobs.filter(j => j.status === 'queued').length,
        completed:  jobs.filter(j => j.status === 'completed').length,
        status: 'idle',
      })
    } catch {
      set({ status: 'error' })
    }
  },

  // you can drop setJobs now that loadJobs covers it
}))
