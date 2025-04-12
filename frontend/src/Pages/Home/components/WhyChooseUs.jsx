import React, { useEffect, useState } from 'react';

// CounterItem Component
const CounterItem = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animateCounter = () => {
      let currentCount = 0;
      const speed = 2000 / target;

      const updateCount = () => {
        const increment = target / speed;
        currentCount = Math.ceil(currentCount + increment);

        if (currentCount < target) {
          setCount(currentCount);
          setTimeout(updateCount, 1);
        } else {
          setCount(target);
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(document.getElementById(`counter-${label}`));

    return () => {
      observer.disconnect();
    };
  }, [target, label]);

  return (
    <div className="counter-item">
      <div id={`counter-${label}`} className="text-4xl font-bold mb-2">{count}</div>
      <p>{label}</p>
    </div>
  );
};

// Card Component
const Card = ({ icon, title, description, delay }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-16 w-16 mx-auto mb-6">
        <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
        <div className="absolute inset-0 bg-blue-900 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
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
          <Card
            icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>}
            title="Comprehensive Solutions"
            description="We offer a wide array of services, from expert consultations to business setup and compliance."
            delay={0}
          />

          {/* Card 2 */}
          <Card
            icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>}
            title="Client-Focused Approach"
            description="Your success is our priority; we tailor our services to align with your specific business goals."
            delay={0.2}
          />

          {/* Card 3 */}
          <Card
            icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
            title="Extensive Network"
            description="Benefit from our broad network of legal experts and business consultants, ensuring top-notch service."
            delay={0.4}
          />

          {/* Success Rate Counter */}
          <div className="lg:col-span-3 mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 animate__animated animate__fadeIn">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                <CounterItem target={3300} label="Client Satisfaction" />
                <CounterItem target={321} label="Businesses Supported" />
                <CounterItem target={2743} label="Happy Clients" />
                <CounterItem target={7} label="Years of Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
