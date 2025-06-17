import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiHome, FiSettings } from 'react-icons/fi';

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r p-4">
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            end
          >
            <FiHome className="mr-2" /> Dashboard
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <FiSettings className="mr-2" /> Settings
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b px-6 flex items-center shadow-sm">
          <FiMenu className="text-2xl mr-4 md:hidden" />
          <h1 className="text-xl font-semibold">My Project Dashboard</h1>
        </header>
        <main className="p-8 flex-1 overflow-auto bg-white">{children}</main>
      </div>
    </div>
  );
}
