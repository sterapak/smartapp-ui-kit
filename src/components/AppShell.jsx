import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiSettings } from 'react-icons/fi'

export default function AppShell({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="h-screen w-20 bg-gray-800 flex flex-col items-center py-4 space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `group flex items-center justify-center w-12 h-12 rounded transition ${
              isActive ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:bg-gray-700'
            }`
          }
        >
          <FiHome size={24} />
          <span className="sr-only">Dashboard</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `group flex items-center justify-center w-12 h-12 rounded transition ${
              isActive ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:bg-gray-700'
            }`
          }
        >
          <FiSettings size={24} />
          <span className="sr-only">Settings</span>
        </NavLink>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-12 bg-white border-b px-6 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Projects</h1>
          {/* Optional: user avatar / notifications */}
        </header>
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
