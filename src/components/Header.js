import React from 'react';

const Header = () => {
  const steps = [
    { name: 'Postcode', completed: true },
    { name: 'Waste Type', completed: true },
    { name: 'Select Skip', current: true },
    { name: 'Permit Check', completed: false },
    { name: 'Choose Date', completed: false },
    { name: 'Payment', completed: false }
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">We Want Waste</h1>
          </div>
          <div className="text-sm text-gray-500">
            Step 3 of 6
          </div>
        </div>
        
        <nav aria-label="Progress">
          <ol className="flex items-center gap-2 overflow-x-auto">
            {steps.map((step, index) => (
              <li key={step.name} className="flex items-center">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  step.completed 
                    ? 'bg-green-100 text-green-800' 
                    : step.current 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {step.completed && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {step.current && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                  <span>{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <svg className="w-5 h-5 text-gray-300 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header; 