import React from 'react';

const Services = () => {
  return (
    <section id="Services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive IP solutions tailored to protect your innovations</p>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden mb-16">
          <div className="service-marquee animate__animated animate__fadeIn">
            <div className="flex space-x-8 animate-marquee">
              <div className="flex space-x-8">
                <div className="flex-shrink-0 w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Patent Filing</h3>
                  <p className="text-gray-600">Protect your inventions with comprehensive patent protection</p>
                </div>

                <div className="flex-shrink-0 w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Trademark Registration</h3>
                  <p className="text-gray-600">Secure your brand identity and business assets</p>
                </div>

                <div className="flex-shrink-0 w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">IP Strategy</h3>
                  <p className="text-gray-600">Custom IP strategies for business growth</p>
                </div>

                <div className="flex-shrink-0 w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Copyright Protection</h3>
                  <p className="text-gray-600">Safeguard your creative works and content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">IP Portfolio Management</h3>
            <p className="text-gray-600">Comprehensive management and monitoring of your IP assets</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">IP Consultation</h3>
            <p className="text-gray-600">Expert advice for all your intellectual property needs</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">IP Litigation Support</h3>
            <p className="text-gray-600">Legal support for IP disputes and enforcement</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .service-marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;
