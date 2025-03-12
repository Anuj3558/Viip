import React from 'react';

const Services = () => {
  const marqueeServices = [
    {
      title: "Expert Consultation",
      description: "Get expert advice from seasoned professionals.",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    },
    {
      title: "Lawyer Consultation",
      description: "Connect with experienced lawyers for legal guidance.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Company Registration",
      description: "Start your business the right way with our registration services.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Trademark Registration",
      description: "Secure your brand identity with trademark services.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      title: "Licenses",
      description: "Get all types of licenses with easy process.",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    },
     {
      title: "Accounting and Taxes",
      description: "We will handle all your accounting and tax related issues.",
      icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
    },
  ];

  const gridServices = [
    {
      title: "Business Formation & Structuring",
      description: "Guidance on choosing the right business entity and legal structure",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure adherence to all legal and industry-specific regulations",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      animationDelay: '0.2s'
    },
    {
      title: "Tax Advisory Services",
      description: "Comprehensive tax planning and compliance solutions",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      animationDelay: '0.4s'
    },
    {
      title: "Contract Management",
      description: "Drafting, review, and negotiation of legal agreements",
      icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
    },
    {
      title: "Licensing Solutions",
      description: "Obtain all necessary business licenses and certifications",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      animationDelay: '0.2s'
    },
    {
      title: "Risk Management",
      description: "Identify and mitigate potential business risks",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      animationDelay: '0.4s'
    }
  ];
  

  return (
    <section id="Services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden mb-16">
          <div className="service-marquee animate__animated animate__fadeIn">
            <div className="flex space-x-8 animate-marquee">
              {/* Duplicate the content to ensure a continuous loop */}
              {[...marqueeServices, ...marqueeServices].map((service, index) => (
                <div key={index} className="flex-shrink-0 w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp`}
              style={{ animationDelay: service.animationDelay || '0s' }}
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Adjust based on the number of services */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .service-marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;
