import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function SearchStatusBanner() {
  const status = useAppStore((s) => s.status);

  if (status !== 'active') return null;
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
      🔍 Job Search Active — our AI engine is busy! <button className="ml-4 px-2 py-1 bg-white border rounded">Pause</button>
    </div>
  );
}
