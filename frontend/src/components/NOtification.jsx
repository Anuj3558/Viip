import React, { useEffect, useState } from "react";

const Notification = ({ type, message, description, onClose }) => {
  const [animationState, setAnimationState] = useState("entering");
  
  // Default to success type if not specified
  const notificationType = type || 'success';
  const isSuccess = notificationType === 'success';
  
  // Set default message for success type
  const displayMessage = message || (isSuccess ? 'Success!' : 'Error');
  const displayDescription = description || (isSuccess ? 'Our team will contact you within 24 hours.' : 'Something went wrong.');
  
  useEffect(() => {
    // Enter animation
    setAnimationState("visible");
    
    // Wait and then start exit animation
    const timer = setTimeout(() => {
      setAnimationState("exiting");
      
      // After exit animation completes, close the notification
      setTimeout(() => {
        if (onClose) onClose();
      }, 500); // Exit animation duration
    }, 4000); // Visible duration
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  // Animation classes based on state
  const containerClasses = {
    entering: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
    exiting: "opacity-0 scale-95"
  };
  
  // Icon animation
  const [iconAnimated, setIconAnimated] = useState(false);
  
  useEffect(() => {
    if (animationState === "visible") {
      setTimeout(() => {
        setIconAnimated(true);
      }, 200);
    }
  }, [animationState]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500/50 bg-opacity-0">
      <div className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-full max-w-md transform transition-all duration-500 ease-in-out ${containerClasses[animationState]}`}>
        <div className="relative mb-6 w-24 h-24 flex items-center justify-center">
          {/* Circle animation */}
          <div className={`absolute w-24 h-24 rounded-full ${isSuccess ? 'bg-green-100' : 'bg-red-100'} transform transition-transform duration-300 ${animationState === "visible" ? "scale-100" : "scale-0"}`}></div>
          
          {/* Icon with animation */}
          <div className="relative">
            {isSuccess ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 13l4 4L19 7"
                  className={`${iconAnimated ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: iconAnimated ? 0 : 30,
                    transition: "stroke-dashoffset 0.6s ease-out"
                  }}
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  className={`${iconAnimated ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                  style={{
                    strokeDasharray: 50,
                    strokeDashoffset: iconAnimated ? 0 : 50,
                    transition: "stroke-dashoffset 0.6s ease-out"
                  }}
                />
              </svg>
            )}
          </div>
        </div>
        <h3 className={`text-2xl font-bold text-center mb-2 ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>Our team will contact you in 24hr</h3>
        
        <h3 className={`text-2xl font-bold text-center mb-2 ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>{displayMessage}</h3>
        <p className={`text-lg text-center ${isSuccess ? 'text-green-800' : 'text-red-800'} opacity-90`}>{displayDescription}</p>
      </div>
    </div>
  );
};

// Usage example component
const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
  };
  
  return (
    <div className="p-8">
      <button 
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit Request
      </button>
      
      {showNotification && (
        <Notification 
          type="success"
          message="Success!"
          description="Our team will contact you within 24 hours."
          onClose={() => setShowNotification(false)} 
        />
      )}
    </div>
  );
};

export default Notification;