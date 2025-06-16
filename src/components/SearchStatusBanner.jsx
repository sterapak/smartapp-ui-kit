// src/components/SearchStatusBanner.jsx
import React from 'react'
import { useAppStore } from '../store/useAppStore'
import { motion, AnimatePresence } from 'framer-motion'

export function SearchStatusBanner() {
  const { searchStatus, setSearchStatus } = useAppStore()
  const isVisible = searchStatus !== 'idle'
  const handleToggle = () =>
    setSearchStatus(searchStatus === 'active' ? 'paused' : 'active')
  const text =
    searchStatus === 'active'
      ? 'Job Search Active'
      : searchStatus === 'paused'
      ? 'Job Search Paused'
      : ''

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white flex items-center justify-between px-6 py-3 shadow-lg"
        >
          <span className="font-medium">{text}</span>
          <button
            onClick={handleToggle}
            className="ml-4 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            {searchStatus === 'active' ? 'Pause' : 'Resume'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
