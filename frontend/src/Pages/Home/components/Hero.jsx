import React from 'react';
import { iphone } from '../../../assets';

const Hero = () => {
  return (
    <section id="Hero" className="min-h-[80vh] bg-white text-gray-800 pt-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient circle top-right */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-50 transform translate-x-20 -translate-y-20"></div>
        
        {/* Gradient circle bottom-left */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-60 transform -translate-x-20 translate-y-20"></div>
        <div className="absolute bottom-0 left-30 w-20 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-60 transform -translate-x-20 translate-y-20"></div>
        
        {/* Animated floating circles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-float-fast"></div>
        <div className="absolute bottom-1/4 right-1/2 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-float-fast"></div>
        
        {/* Abstract grid lines */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-100 rounded-lg opacity-30 transform rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-blue-100 rounded-lg opacity-30 transform -rotate-12"></div>
        
        {/* Dotted pattern */}
        <div className="absolute top-10 md:right-350 grid grid-cols-5 gap-4 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
          ))}
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-40 right-1/3 w-16 h-16 border-4 border-blue-100 opacity-40 transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(70vh-5rem)]">
          
          {/* Left Content */}
          <div className="text-gray-800 space-y-6 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900">
              From Concepts to Trademarks,
              <span className="block mt-2">We Got Your IP Covered.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-800 max-w-lg">
              Protect your innovations and intellectual property with our comprehensive legal solutions and expert guidance.
            </p>
            <div className="flex space-x-4 pt-6">
              <a href="#ContactForm" className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </a>
              <a href="#Services" className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate__animated animate__fadeInRight">
            <div className="relative w-full h-[80vh] mt-[10vh] max-w-lg mx-auto transition-transform duration-500">
              {/* iPhone Mockup with Bounce Animation */}
              <div className="relative animate-float-bounce">
                <img src={iphone} alt="iPhone mockup" className="relative z-10" />
                
                {/* Custom Shadow for iPhone that follows the animation */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-black via-black to-black-200 rounded-full filter blur-md opacity-50 animate-shadow"></div>
                
                {/* Additional soft shadow for depth */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-blue-300 rounded-full filter blur-lg opacity-30 animate-shadow-delayed"></div>
              </div>
              
              {/* Additional decorative elements around iPhone */}
              <div className="absolute top-1/4 right-0 w-16 h-16 border-4 border-blue-200 rounded-full opacity-60 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        /* Smooth iPhone floating bounce animation */
        @keyframes floatBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shadowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translateY(4px) scale(0.95);
          }
        }
        
        @keyframes shadowPulseDelayed {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translateY(6px) scale(0.9);
          }
        }
        
        .animate-float-bounce {
          animation: floatBounce 4s ease-in-out infinite;
        }
        
        .animate-shadow {
          animation: shadowPulse 4s ease-in-out infinite;
        }
        
        .animate-shadow-delayed {
          animation: shadowPulseDelayed 4s ease-in-out infinite;
        }
        
        /* New animations for background elements */
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }
        
        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
        
        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-5px) translateX(5px);
          }
        }
        
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: floatMedium 7s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: floatFast 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;