import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Create custom notification components to replace antd notifications
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

const ConsultAndExpertForBusinessPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consultationType: ''
  });
  const [currentRoute, setCurrentRoute] = useState('');
  const [notification, setNotification] = useState(null);

  const consultationTypes = [
    { name: "Business Strategy Consultation", value: "business_strategy" },
    { name: "Financial Planning Consultation", value: "financial_planning" },
    { name: "Legal Compliance Consultation", value: "legal_compliance" },
    { name: "Tax Advisory Consultation", value: "tax_advisory" },
    { name: "Market Research Consultation", value: "market_research" },
    { name: "International Expansion Consultation", value: "international_expansion" },
    { name: "Startup Advisory Consultation", value: "startup_advisory" },
    { name: "IP and Patent Consultation", value: "ip_patent" }
  ];

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showSuccessNotification = () => {
    setNotification({
      type: 'success',
      message: 'Success',
      description: 'Form submitted successfully!'
    });
  };

  const showErrorNotification = (message) => {
    setNotification({
      type: 'error',
      message: 'Error',
      description: message
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      route: currentRoute,
      type: 'consult_and_expert_inquiry'
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/expert/consult-and-expert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', consultationType: '' });
        showSuccessNotification();
      } else {
        console.error('Form submission failed:', response.status);
        showErrorNotification('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showErrorNotification('An error occurred while submitting the form. Please try again.');
    }
  };

  const isPhoneValid = (phone) => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phone === '' || phoneRegex.test(phone);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === '' || emailRegex.test(email);
  };

  return (
    <>
      <Helmet>
        <title>Consult and Expert for Business | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Get expert consultation for your business needs. We offer strategic, financial, legal, and tax advisory services to help your business grow." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            description={notification.description}
            onClose={closeNotification}
          />
        )}

        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">Consult and Expert for Business</h2>
              <p className="text-lg text-gray-700">
                At Vastav Intellect and IP Solutions, we provide expert consultation services to help you navigate the complexities of business strategy, financial planning, legal compliance, and more.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-gray-600">Our team of experienced professionals will guide you through every step.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                    <p className="text-gray-600">We provide customized solutions to meet your specific business needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Complete Compliance</h3>
                    <p className="text-gray-600">Ensure your business meets all legal and regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${!isEmailValid(formData.email) && formData.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email address"
                    required
                  />
                  {!isEmailValid(formData.email) && formData.email && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${!isPhoneValid(formData.phone) && formData.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {!isPhoneValid(formData.phone) && formData.phone && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
                <div>
                  <label htmlFor="consultationType" className="block text-gray-700 font-medium mb-1">Type of Consultation</label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a consultation type</option>
                    {consultationTypes.map((type, index) => (
                      <option key={index} value={type.value}>{type.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your business and requirements"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultAndExpertForBusinessPage;