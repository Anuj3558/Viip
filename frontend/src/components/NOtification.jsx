import { useEffect } from "react";
import React from "react";

const Notification = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 4500);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
      <div className="bg-green-50 border border-green-100 p-5 rounded-xl shadow-xl max-w-md w-full mx-4">
        <div className="flex items-start">
          <div className="mr-4 text-green-500 flex-shrink-0">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 animate-bounce-in"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-800">Success!</h3>
            <p className="mt-1 text-green-600">Our team will contact you within 4 hours</p>
          </div>
          <button 
            onClick={onClose}
            className="ml-4 text-green-400 hover:text-green-600 focus:outline-none"
            aria-label="Close notification"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;