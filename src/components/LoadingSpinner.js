import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Loading Skip Options
        </h3>
        <p className="text-gray-500">
          Finding the best skips for your location...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 