import React, { useEffect } from 'react';

const WhyChooseUs = () => {
  useEffect(() => {
    const animateCounter = (counter, target) => {
      let count = 0;
      const speed = 2000 / target;
      
      const updateCount = () => {
        const increment = target / speed;
        count = Math.ceil(count + increment);
        
        if(count < target) {
          counter.innerText = count;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCount();
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);
          animateCounter(counter, target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5
    });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => observer.observe(counter));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="WhyChooseUs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            WHY CHOOSE
            <span className="block text-blue-900">Vastav Intellect IP Solutions?</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="relative h-16 w-16 mx-auto mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 text-center mb-4">Expertise & Experience</h3>
            <p className="text-gray-600 text-center">15+ years of experience in handling complex IP matters with a proven track record</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="relative h-16 w-16 mx-auto mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 text-center mb-4">Personalized Approach</h3>
            <p className="text-gray-600 text-center">Tailored solutions that match your specific business needs and objectives</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="relative h-16 w-16 mx-auto mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 text-center mb-4">Global Protection</h3>
            <p className="text-gray-600 text-center">Comprehensive IP protection strategies across international markets</p>
          </div>

          {/* Success Rate Counter */}
          <div className="lg:col-span-3 mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 animate__animated animate__fadeIn">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                <div className="counter-item">
                  <div className="text-4xl font-bold mb-2 counter" data-target="98">0</div>
                  <p>Success Rate</p>
                </div>
                <div className="counter-item">
                  <div className="text-4xl font-bold mb-2 counter" data-target="500">0</div>
                  <p>Patents Filed</p>
                </div>
                <div className="counter-item">
                  <div className="text-4xl font-bold mb-2 counter" data-target="1000">0</div>
                  <p>Satisfied Clients</p>
                </div>
                <div className="counter-item">
                  <div className="text-4xl font-bold mb-2 counter" data-target="50">0</div>
                  <p>Countries Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
