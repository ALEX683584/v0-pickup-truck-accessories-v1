'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Store consent in localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p>
            We use cookies to improve your experience, analyze traffic, and tailor content to you. 
            By clicking "Accept", you consent to our use of cookies in accordance with our Privacy Policy.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md border border-gray-300 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;