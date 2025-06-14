// src/components/AppShell.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSettings, FiMenu } from 'react-icons/fi';

export function AppShell({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-white border-r">
        <nav className="mt-8 flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg 
               ${isActive 
                 ? 'bg-primary-100 text-primary-700' 
                 : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            <FiHome className="text-xl" />
            <span className="ml-3 hidden md:inline font-medium">Dashboard</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg 
               ${isActive 
                 ? 'bg-primary-100 text-primary-700' 
                 : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            <FiSettings className="text-xl" />
            <span className="ml-3 hidden md:inline font-medium">Settings</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
          <FiMenu className="text-2xl mr-4 md:hidden" />
          <h1 className="text-xl font-semibold">My Project Dashboard</h1>
        </header>
        <main className="p-8 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
