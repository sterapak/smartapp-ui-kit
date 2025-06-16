import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import DashboardPage from './pages/DashboardPage';
import SettingsPage  from './pages/SettingsPage';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/"          element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings"  element={<SettingsPage  />} />
        <Route path="*"          element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AppShell>
  );
}
