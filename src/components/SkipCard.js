import React from 'react';

const SkipCard = ({ skip, isSelected, onSelect, totalPrice }) => {
  const generateSkipImage = (size) => {
    if (size < 6) {
      return '/images/4-yarder-skip.jpg';
    } else if (size >= 20) {
      return '/images/20-yarder-skip.jpg';
    } else if (size >= 6) {
      return '/images/6-yarder-skip.jpg';
    }
  };

  const getSkipFeatures = (skip) => {
    const features = [];
    if (skip.allowed_on_road) {
      features.push({ icon: '🛣️', text: 'Road Placement OK' });
    }
    if (skip.allows_heavy_waste) {
      features.push({ icon: '🏗️', text: 'Heavy Waste OK' });
    }
    features.push({ icon: '📅', text: `${skip.hire_period_days} Day Hire` });
    return features;
  };

  const getPopularityBadge = (size) => {
    if (size === 6 || size === 8) {
      return (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
          Most Popular
        </div>
      );
    }
    return null;
  };

  const getSizeDescription = (size) => {
    const descriptions = {
      4: 'Perfect for small clearouts, bathroom renovations',
      6: 'Great for kitchen refits, garden waste',
      8: 'Ideal for full room clearouts, small extensions',
      10: 'Suitable for larger renovations, office clearouts',
      12: 'Perfect for full house clearouts, landscaping',
      14: 'Large projects, commercial waste, major renovations',
      16: 'Very large projects, construction waste',
      20: 'Commercial use, major construction projects',
      40: 'Large commercial projects, industrial waste'
    };
    return descriptions[size] || 'Professional waste disposal solution';
  };

  return (
    <div 
      className={`card cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' 
          : 'hover:shadow-md'
      }`}
      onClick={onSelect}
    >
      <div className="relative">
        {getPopularityBadge(skip.size)}
        <img 
          src={generateSkipImage(skip.size)}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full font-medium text-sm">
          {skip.size} Yards
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">
            {skip.size} Yard Skip
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              £{totalPrice}
            </div>
            <div className="text-xs text-gray-500">
              inc. VAT
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {getSizeDescription(skip.size)}
        </p>
        
        <div className="space-y-2 mb-6">
          {getSkipFeatures(skip).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <span>{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Price before VAT:</span>
            <span>£{skip.price_before_vat}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>VAT ({skip.vat}%):</span>
            <span>£{Math.round(skip.price_before_vat * (skip.vat / 100))}</span>
          </div>
        </div>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isSelected
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSelected ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Selected
            </span>
          ) : (
            'Select This Skip'
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 