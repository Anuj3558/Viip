import React from 'react';

const Hero = () => {
  return (
    <section id="Hero" className="min-h-[70vh] bg-gradient-to-r from-blue-900 to-blue-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(70vh-5rem)]">
          
          {/* Left Content */}
          <div className="text-white space-y-6 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Concepts to Trademarks,
              <span className="block mt-2">We Got Your IP Covered.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Protect your innovations and intellectual property with our comprehensive legal solutions and expert guidance.
            </p>
            <div className="flex space-x-4 pt-6">
              <a href="#ContactForm" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </a>
              <a href="#Services" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate__animated animate__fadeInRight">
            <div className="relative w-full max-w-sm mx-auto transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
              <div className="relative w-[280px] h-[580px] mx-auto bg-black rounded-[60px] border-4 border-gray-200 shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl"></div>
                <div className="absolute inset-2 bg-white rounded-[55px] overflow-hidden">
                  {/* Mock Screen Content */}
                  <div className="h-full bg-gradient-to-b from-blue-100 to-blue-50 p-4">
                    <div className="w-full h-4 bg-blue-200 rounded-full mb-4"></div>
                    <div className="w-3/4 h-4 bg-blue-200 rounded-full mb-8"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-blue-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
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
      `}</style>
    </section>
  );
};

export default Hero;
