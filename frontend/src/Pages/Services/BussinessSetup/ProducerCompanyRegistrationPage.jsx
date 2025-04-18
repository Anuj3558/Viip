import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Notification from '../../../components/NOtification';// Assuming Notification component is in ui folder

const ProducerCompanyRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [currentRoute, setCurrentRoute] = useState('');
  const [notification, setNotification] = useState(null);

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
      description: 'Producer Company registration inquiry submitted successfully!'
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

  const isPhoneValid = (phone) => {
    // Basic validation for phone numbers
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phone === '' || phoneRegex.test(phone);
  };

  const isEmailValid = (email) => {
    // Basic validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === '' || emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      route: currentRoute,
      type: 'producer_company_registration'
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/producer-company-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
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

  return (
    <>
      <Helmet>
        <title>Producer Company Registration | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Register your Producer Company with Vastav Intellect and IP Solutions. We provide specialized expertise and efficient processing." />
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
              <h2 className="text-3xl font-bold text-blue-800">Producer Company Registration Services</h2>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions specializes in registering Producer Companies, enabling agricultural and allied sector businesses to thrive through collective strength and professional management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Specialized Expertise</h3>
                    <p className="text-gray-600">We understand the unique requirements of Producer Company registration.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Efficient Processing</h3>
                    <p className="text-gray-600">We streamline the registration process to get your company up and running quickly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Regulatory Compliance</h3>
                    <p className="text-gray-600">We ensure full compliance with all legal and regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Register Your Producer Company</h2>
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
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your agricultural business and requirements"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Registration Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Producer Company Registration Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Formation & Registration</h3>
                <p className="text-gray-600 mb-4">Comprehensive assistance in forming and registering your Producer Company under the Companies Act.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Name reservation
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Drafting MOA & AOA
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Obtaining Certificate of Incorporation
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Post-Registration Support</h3>
                <p className="text-gray-600 mb-4">Guidance and support for post-registration compliance and operational setup.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    PAN and TAN application
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    GST registration assistance
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Compliance advisory
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Legal & Regulatory Guidance</h3>
                <p className="text-gray-600 mb-4">Expert advice on legal and regulatory aspects specific to Producer Companies.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Compliance with Companies Act
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Understanding producer-specific regulations
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advisory on member benefits and operations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Registration Process</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We understand your business model and objectives for the Producer Company.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Document Collection</h3>
              <p className="text-gray-600">We assist in gathering all necessary documents, including member details.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Registration Filing</h3>
              <p className="text-gray-600">We handle the filing process with the Registrar of Companies (ROC).</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Certification & Support</h3>
              <p className="text-gray-600">We provide the Certificate of Incorporation and post-registration support.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Producer Company Registration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 4.75 7.5 4.75a2.25 2.25 0 00-2.25 2.25c0 .974.521 1.273 1.932 1.928m0 0c1.861.893 3.05 1.435 3.05 2.342M15.75 6.003v13m0-13c1.168-.77 2.754-1.493 4.5-1.493a2.25 2.25 0 012.25 2.25c0 .974-.521 1.273-1.932 1.928m0 0c-1.861.893-3.05 1.435-3.05 2.342" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">We possess deep understanding of the agricultural sector and related regulations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7m-5 6v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v5a1 1 0 001 1h11a1 1 0 001-1v-2l2-2L5 13z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">End-to-End Support</h3>
                <p className="text-gray-600">We provide comprehensive support from initial consultation to post-registration.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-800 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M3 17v-3a2 2 0 012-2h14a2 2 0 012 2v3m-18 0v3h18v-3m-18 0l3-3m12 3l3-3" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Compliance Assurance</h3>
                <p className="text-gray-600">We ensure complete compliance, allowing you to focus on your core business.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProducerCompanyRegistrationPage;
