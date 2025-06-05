import React, { useState, useEffect } from 'react';
import SkipCard from './SkipCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const SkipSelection = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [sortBy, setSortBy] = useState('size');

  useEffect(() => {
    fetchSkips();
  }, []);

  const fetchSkips = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
      
      if (!response.ok) {
        throw new Error('Failed to fetch skip data');
      }
      
      const data = await response.json();
      setSkips(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
    console.log('Selected skip:', skip);
    // Here you would typically navigate to the next step or update parent state
  };

  const calculateTotalPrice = (skip) => {
    return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  };

  const sortedSkips = [...skips].sort((a, b) => {
    if (sortBy === 'size') return a.size - b.size;
    if (sortBy === 'price') return calculateTotalPrice(a) - calculateTotalPrice(b);
    return 0;
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={fetchSkips} />;

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Skip Size
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best matches your project needs. All skips come with a 14-day hire period 
            and professional delivery service in Lowestoft (NR32).
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="size">Skip Size</option>
                <option value="price">Price</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-500">
              {skips.length} skip{skips.length !== 1 ? 's' : ''} available
            </div>
          </div>
        </div>

        {sortedSkips.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No skips available</h3>
            <p className="text-gray-500">Please try a different location or contact us for assistance.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={() => handleSkipSelect(skip)}
                totalPrice={calculateTotalPrice(skip)}
              />
            ))}
          </div>
        )}

        {selectedSkip && (
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Selected: {selectedSkip.size} Yard Skip
                </h3>
                <p className="text-blue-700">
                  Total cost: £{calculateTotalPrice(selectedSkip)} (including VAT)
                </p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  // Navigate to next step
                  alert('Proceeding to permit check...');
                }}
              >
                Continue to Permit Check →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkipSelection; 