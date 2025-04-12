import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Notification from '../../../components/NOtification';

const UdyamRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    businessType: ''
  });
  const [currentRoute, setCurrentRoute] = useState('');
  const [notification, setNotification] = useState(null);

  const businessTypes = [
    "Manufacturing",
    "Service",
    "Retail Business",
    "Wholesale Business",
    "Startup",
    "Other"
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
      description: 'Udyam Registration inquiry submitted successfully!'
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
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phone === '' || phoneRegex.test(phone);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === '' || emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      route: currentRoute,
      type: 'udyam_registration'
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/udyam-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', businessType: '' });
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
        <title>Udyam Registration | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Get your Udyam Registration with Vastav Intellect and IP Solutions. Expert assistance for MSMEs to obtain Udyam Certificate with all government benefits." />
        <meta name="keywords" content="Udyam registration, MSME registration, Udyam certificate, small business registration, government schemes for MSME" />
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
              <h1 className="text-4xl font-bold text-blue-800">Complete Udyam Registration for Your MSME</h1>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions provides expert services for obtaining Udyam Registration, enabling Micro, Small, and Medium Enterprises (MSMEs) to access government schemes, subsidies, and financial benefits designed to support business growth.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Why Udyam Registration is Essential</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to priority sector lending with lower interest rates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Eligibility for government tenders reserved for MSMEs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tax rebates and exemptions under various schemes</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">End-to-End Assistance</h3>
                    <p className="text-gray-600">We handle the entire registration process from document collection to certificate issuance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fast Processing</h3>
                    <p className="text-gray-600">Get your Udyam Registration Number within 24-48 hours of document submission.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Documentation Support</h3>
                    <p className="text-gray-600">We help prepare all necessary documents including Aadhaar, PAN, and business details.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Micro Enterprises</span>
                      <p className="text-sm text-gray-600">Investment  ₹1 crore and turnover  ₹5 crore</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Small Enterprises</span>
                      <p className="text-sm text-gray-600">Investment  ₹10 crore and turnover  ₹50 crore</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Medium Enterprises</span>
                      <p className="text-sm text-gray-600">Investment  ₹50 crore and turnover  ₹250 crore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Get Your Udyam Registration Today</h2>
              <p className="text-gray-600 mb-6">Complete this form to receive a free consultation and quotation for your Udyam registration.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name as per Aadhaar"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address*</label>
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
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${!isPhoneValid(formData.phone) && formData.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your 10-digit mobile number"
                    required
                  />
                  {!isPhoneValid(formData.phone) && formData.phone && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-gray-700 font-medium mb-1">Business Type*</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Business Details*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your business activities, approximate investment, and turnover"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get Free Consultation
                </button>
                <p className="text-sm text-gray-500 text-center">We'll contact you within 2 business hours to discuss your Udyam registration</p>
              </form>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Udyam Registration Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">1. Document Collection</h3>
                <p className="text-gray-600">We collect your Aadhaar, PAN, business address proof, and other required documents.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">2. Application Filing</h3>
                <p className="text-gray-600">Our experts prepare and file your Udyam registration application with all details.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">3. Verification</h3>
                <p className="text-gray-600">We handle all verification processes with the Udyam registration portal.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">4. Certificate Delivery</h3>
                <p className="text-gray-600">You receive your Udyam Registration Certificate directly in your email.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Benefits of Udyam Registration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Financial Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collateral-free loans from banks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Subsidies on patent registration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Credit linked capital subsidy</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Government Tenders</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive access to MSME reserved tenders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exemption from earnest money deposit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preference in government procurement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Tax Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Income tax exemptions under Section 80IA</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Concessional rate of interest on overdrafts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reimbursement of ISO certification charges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Udyam Registration FAQs</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>What documents are required for Udyam registration?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    The main documents required are Aadhaar card of the proprietor/partner/director, PAN card, business address proof, bank account details, and information about your business activities and investments. For companies and LLPs, additional documents like incorporation certificate and MOA/AOA may be required.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>How long is the Udyam registration valid?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    Udyam Registration has lifetime validity and doesn't require renewal. However, you should update your details if there are any changes in your business like turnover crossing thresholds or changes in business activities.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>Can existing Udyog Aadhaar holders migrate to Udyam?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    Yes, businesses registered under Udyog Aadhaar Memorandum (UAM) need to migrate to Udyam Registration before June 30, 2023. We can help with this migration process while ensuring no loss of benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UdyamRegistrationPage;