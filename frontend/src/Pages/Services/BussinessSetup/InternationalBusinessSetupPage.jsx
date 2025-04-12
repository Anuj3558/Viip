import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Notification from '../../../components/NOtification';

const InternationalBusinessSetupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: ''
  });
  const [currentRoute, setCurrentRoute] = useState('');
  const [notification, setNotification] = useState(null);

  const countries = [
    { name: "Netherlands Incorporation", link: "/netherlands-incorporation" },
    { name: "United Kingdom Incorporation", link: "/united-kingdom-incorporation" },
    { name: "China Incorporation", link: "/china-incorporation" },
    { name: "Malaysia Incorporation", link: "/malaysia-incorporation" },
    { name: "Hong Kong Incorporation", link: "/hong-kong-incorporation" },
    { name: "Australia Incorporation", link: "/australia-incorporation" },
    { name: "USA Incorporation", link: "/usa-incorporation" },
    { name: "Singapore Incorporation", link: "/singapore-incorporation" },
    { name: "Dubai Incorporation", link: "/dubai-incorporation" },
    { name: "Canada Incorporation", link: "/canada-incorporation" },
    { name: "Germany Incorporation", link: "/germany-incorporation" },
    { name: "France Incorporation", link: "/france-incorporation" },
    { name: "Japan Incorporation", link: "/japan-incorporation" },
    { name: "South Korea Incorporation", link: "/south-korea-incorporation" },
    { name: "India Incorporation", link: "/india-incorporation" },
    { name: "Thailand Incorporation", link: "/thailand-incorporation" },
    { name: "Vietnam Incorporation", link: "/vietnam-incorporation" },
    { name: "Indonesia Incorporation", link: "/indonesia-incorporation" },
    { name: "Philippines Incorporation", link: "/philippines-incorporation" },
    { name: "Saudi Arabia Incorporation", link: "/saudi-arabia-incorporation" },
    { name: "Qatar Incorporation", link: "/qatar-incorporation" },
    { name: "Switzerland Incorporation", link: "/switzerland-incorporation" },
    { name: "Ireland Incorporation", link: "/ireland-incorporation" },
    { name: "Luxembourg Incorporation", link: "/luxembourg-incorporation" },
    { name: "Cyprus Incorporation", link: "/cyprus-incorporation" },
    { name: "Malta Incorporation", link: "/malta-incorporation" },
    { name: "Mauritius Incorporation", link: "/mauritius-incorporation" },
    { name: "Seychelles Incorporation", link: "/seychelles-incorporation" },
    { name: "British Virgin Islands Incorporation", link: "/bvi-incorporation" },
    { name: "Cayman Islands Incorporation", link: "/cayman-islands-incorporation" },
    { name: "Other Country", link: "/other-country-incorporation" }
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
      type: 'international_business_setup_inquiry'
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/international-business-setup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', country: '' });
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
        <title>International Business Setup | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Set up your international business with Vastav Intellect and IP Solutions. We offer expert guidance and time-efficient processing for global incorporation in 30+ countries." />
        <meta name="keywords" content="international business setup, global incorporation, company registration abroad, foreign business setup, overseas company formation" />
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
              <h1 className="text-4xl font-bold text-blue-800">Global Business Expansion Made Simple</h1>
              <p className="text-lg text-gray-700">
                At Vastav Intellect and IP Solutions, we simplify the complex process of international business setup, helping you establish your business entity quickly and efficiently across the globe. Our expertise spans 30+ countries with specialized knowledge of local regulations, tax structures, and compliance requirements.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Why Choose Our International Business Setup Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>End-to-end support from entity selection to bank account opening</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Local legal and tax advisory for optimal business structure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated relationship manager for each jurisdiction</span>
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
                    <h3 className="font-semibold text-lg">Strategic Jurisdiction Selection</h3>
                    <p className="text-gray-600">We analyze your business needs to recommend the most favorable jurisdiction based on tax treaties, industry regulations, and growth objectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Rapid Incorporation</h3>
                    <p className="text-gray-600">Our established networks with local authorities enable faster processing times compared to direct applications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Compliance Management</h3>
                    <p className="text-gray-600">We provide annual compliance packages including financial reporting, tax filings, and corporate secretarial services.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Global Coverage</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>North America</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Europe</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Middle East</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Asia Pacific</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Africa</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Offshore Jurisdictions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Start Your Global Expansion Today</h2>
              <p className="text-gray-600 mb-6">Complete this form to receive a customized international business setup proposal within 24 hours.</p>
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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your phone number with country code"
                    required
                  />
                  {!isPhoneValid(formData.phone) && formData.phone && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
                <div>
                  <label htmlFor="country" className="block text-gray-700 font-medium mb-1">Preferred Country of Incorporation*</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a country</option>
                    <optgroup label="Popular Destinations">
                      {countries.slice(0, 9).map((country, index) => (
                        <option key={index} value={country.name}>{country.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Other Countries">
                      {countries.slice(9).map((country, index) => (
                        <option key={index + 9} value={country.name}>{country.name}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Business Requirements*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your business activities, expected turnover, and specific needs"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get Free Consultation
                </button>
                <p className="text-sm text-gray-500 text-center">We respect your privacy. Your information will not be shared with third parties.</p>
              </form>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">International Business Setup Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">1. Initial Consultation</h3>
                <p className="text-gray-600">We assess your business objectives, recommend suitable jurisdictions, and provide a detailed cost breakdown.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">2. Document Preparation</h3>
                <p className="text-gray-600">Our team prepares all required incorporation documents and assists with notarization and legalization if needed.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">3. Registration Submission</h3>
                <p className="text-gray-600">We submit your application to the relevant authorities and handle all follow-ups until approval is received.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">4. Post-Incorporation Services</h3>
                <p className="text-gray-600">We assist with bank account opening, tax registration, and other essential services to get your business operational.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-3">5. Ongoing Support</h3>
                <p className="text-gray-600">Our team provides continuous compliance support and advisory services as your international business grows.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>How long does international business setup typically take?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    Processing times vary by country, ranging from 2-3 business days in jurisdictions like Singapore and Hong Kong to 4-6 weeks in countries with more complex regulatory requirements. We provide estimated timelines during our initial consultation based on your specific case.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>What documents are typically required for international incorporation?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    Common requirements include passport copies of directors/shareholders, proof of address, bank reference letters, and business plan details. Some countries may require additional documents like notarized declarations or local registered office addresses. We provide a customized checklist for your chosen jurisdiction.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 bg-gray-50 hover:bg-gray-100">
                  <span>Can you help with tax optimization for international businesses?</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">
                    Yes, our international tax specialists work closely with our incorporation team to structure your business in a tax-efficient manner, considering double taxation treaties, transfer pricing regulations, and local tax incentives. We ensure full compliance while optimizing your tax position.
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

export default InternationalBusinessSetupPage;