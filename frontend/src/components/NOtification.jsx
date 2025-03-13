import { useEffect } from "react";
import React from "react";
const Notification = ({ type, message, description, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 4500);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className={`fixed top-4 left-4 ${bgColor} p-4 rounded-md shadow-md max-w-md z-50 flex`}>
      <div className={`mr-3 ${iconColor}`}>
        {type === 'success' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className={`font-medium ${textColor}`}>{message}</h3>
        <p className={`text-sm ${textColor} opacity-90`}>{description}</p>
      </div>
    </div>
  );
};
export default Notification;