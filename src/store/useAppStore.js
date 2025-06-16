// src/store/useAppStore.js
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  // === state slices ===
  searchStatus: 'idle',          // 'idle' | 'active' | 'paused'
  jobQueue: [],                  // array of { id, title, company, status }
  completedApplications: [],     // same shape

  // === actions ===
  setSearchStatus: (status) => set({ searchStatus: status }),
  addToQueue:    (job)    => set((s) => ({ jobQueue: [...s.jobQueue, job] })),
  completeJob:   (jobId)  =>
    set((s) => {
      const job = s.jobQueue.find((j) => j.id === jobId)
      return {
        jobQueue: s.jobQueue.filter((j) => j.id !== jobId),
        completedApplications: job
          ? [...s.completedApplications, job]
          : s.completedApplications,
      }
    }),
}))
