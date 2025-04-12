import React from 'react';
import { iphone } from '../../../assets';
import TrendingEventOverlay from './TrendingEventOverlay';

const Hero = () => {
  return (
    <section id="Hero" className="min-h-[90vh] bg-white text-gray-800 pt-16 pb-20 overflow-hidden relative">
      {/* Background decorative elements - more evenly distributed */}
            <TrendingEventOverlay />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient circle top-right - enlarged and repositioned */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40 transform translate-x-16 -translate-y-16"></div>
        
        {/* Gradient circles bottom-left - better positioned */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-50 transform -translate-x-16 translate-y-16"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-40 transform translate-y-8"></div>
        
        {/* Animated floating circles - better distributed */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/2 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-float-fast"></div>
        
        {/* Abstract grid lines - more subtle and balanced */}
        <div className="absolute top-40 left-40 w-40 h-40 border border-blue-100 rounded-lg opacity-20 transform rotate-12"></div>
        <div className="absolute bottom-60 right-40 w-60 h-60 border border-blue-100 rounded-lg opacity-20 transform -rotate-12"></div>
        
        {/* Dotted pattern - improved positioning */}
        <div className="absolute top-20 right-80 grid grid-cols-5 gap-4 opacity-15">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
          ))}
        </div>
        
        {/* Abstract shapes - better positioned */}
        <div className="absolute top-60 right-1/3 w-16 h-16 border-4 border-blue-100 opacity-30 transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[calc(70vh-5rem)]">
          
          {/* Left Content - expanded to 7 columns for better text spacing */}
          <div className="md:col-span-7 mb-12 md:mb-0 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
              Your Partner in <span className="text-blue-700">Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl leading-relaxed">
              Empowering entrepreneurs and businesses with comprehensive legal, regulatory, and financial solutions. From initial setup to ongoing compliance, we're here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/services" className="inline-block bg-blue-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Services
              </a>
              <a href="/career" className="inline-block bg-white text-blue-900 py-4 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border-2 border-blue-900 text-center hover:shadow-md transform hover:-translate-y-1">
              Partner with us
              </a>
            </div>
          </div>
          
          {/* Right Content - 5 columns for better proportion */}
          <div className="md:col-span-5 relative animate__animated animate__fadeInRight">
            <div className="relative w-full max-w-md mx-auto mt-8 md:mt-0 transition-transform duration-500">
              {/* iPhone Mockup with Improved Bounce Animation */}
              <div className="relative animate-float-bounce">
                <img src={iphone} alt="iPhone mockup" className="relative z-10 w-full max-w-xs mx-auto" />
                
                {/* Enhanced shadows for iPhone */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black rounded-full filter blur-md opacity-40 animate-shadow"></div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-blue-300 rounded-full filter blur-lg opacity-20 animate-shadow-delayed"></div>
              </div>
              
              {/* Improved decorative elements around iPhone */}
              <div className="absolute top-1/4 -right-4 w-16 h-16 border-4 border-blue-200 rounded-full opacity-50 animate-spin-slow"></div>
              <div className="absolute bottom-1/3 -left-8 w-10 h-10 bg-blue-100 rounded-full opacity-40 animate-pulse-slow"></div>
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
        
        /* Refined iPhone floating bounce animation */
        @keyframes floatBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes shadowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translateY(4px) scale(0.95);
          }
        }
        
        @keyframes shadowPulseDelayed {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.1;
            transform: translateY(6px) scale(0.9);
          }
        }
        
        .animate-float-bounce {
          animation: floatBounce 5s ease-in-out infinite;
        }
        
        .animate-shadow {
          animation: shadowPulse 5s ease-in-out infinite;
        }
        
        .animate-shadow-delayed {
          animation: shadowPulseDelayed 5s ease-in-out infinite;
        }
        
        /* Refined animations for background elements */
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
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: floatMedium 8s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: floatFast 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 25s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;