// src/components/AppShell.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiSettings, FiMenu } from 'react-icons/fi'
import { SearchStatusBanner } from './SearchStatusBanner'

export function AppShell({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-white border-r">
        {/* ...nav links... */}
      </aside>

      <div className="flex-1 flex flex-col relative">
        {/* 1) Global Search Status Banner */}
+       <SearchStatusBanner />

        {/* 2) Header */}
        <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
          <FiMenu className="text-2xl mr-4 md:hidden" />
          <h1 className="text-xl font-semibold">My Project Dashboard</h1>
        </header>

        {/* 3) Page content */}
        <main className="p-8 overflow-auto bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
