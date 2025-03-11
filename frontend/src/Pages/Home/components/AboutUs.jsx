import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Counter Animation
    const startCounters = () => {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => startCounters(), 1);
        } else {
          counter.innerText = target;
        }
      });
    };

    // Start counter animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters();
        }
      });
    });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => observer.observe(counter));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="AboutUs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Statistics */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent transform -skew-y-6 rounded-3xl"></div>
              <div className="relative bg-white shadow-lg rounded-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2 counter" data-target="500">0</div>
                    <p className="text-gray-600">Patents Filed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2 counter" data-target="1000">0</div>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2 counter" data-target="15">0</div>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2 counter" data-target="98">0</div>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 animate__animated animate__fadeInRight">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Who Are We?</h2>
              <div className="h-1 w-20 bg-blue-900 rounded"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Vastav Intellect IP Solutions is a leading intellectual property consulting firm dedicated to protecting innovations and creative works. With over 15 years of experience, we've helped countless businesses secure their intellectual property rights.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Expert Team</h3>
                  <p className="text-gray-600">Our team consists of experienced IP attorneys and technical experts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Comprehensive Solutions</h3>
                  <p className="text-gray-600">End-to-end IP services from filing to maintenance and litigation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Timely Delivery</h3>
                  <p className="text-gray-600">Quick turnaround times with attention to detail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
