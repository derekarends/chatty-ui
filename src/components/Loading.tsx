import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <div className="absolute top-0 left-0 h-16 w-16 flex items-center justify-center">
          <span className="text-2xl">🤖</span>
        </div>
      </div>
      <p className="text-lg text-gray-700 dark:text-slate-300 animate-pulse">Loading, please wait...</p>
    </div>
  );
}

export default Loading;