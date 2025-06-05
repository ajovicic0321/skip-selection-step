import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold text-lg">We Want Waste</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional waste management services for homes and businesses across the UK.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Skip Hire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waste Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recycling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 0800 123 4567</p>
              <p>✉️ info@wewantwaste.co.uk</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 We Want Waste. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 