import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 text-red-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Unable to Load Skip Options
        </h3>
        <p className="text-gray-500 mb-6">
          {message || 'Something went wrong while fetching skip data. Please try again.'}
        </p>
        <div className="space-y-3">
          <button 
            onClick={onRetry}
            className="btn btn-primary"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          <div className="text-sm text-gray-500">
            Or <a href="tel:08001234567" className="text-blue-600 hover:underline">call us at 0800 123 4567</a> for assistance
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage; 