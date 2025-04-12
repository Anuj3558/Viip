import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Notification from '../../../components/NOtification'; // Import the Notification component
// Create custom notification components to replace antd notifications

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
  const [activeTab, setActiveTab] = useState('overview');

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

        {/* Hero Section */}
    

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">Consult and Expert for Business</h2>
              <p className="text-lg text-gray-700">
                At Vastav Intellect and IP Solutions, we provide expert consultation services to help you navigate the complexities of business strategy, financial planning, legal compliance, and more. Our experienced consultants work closely with you to understand your unique challenges and develop tailored strategies for sustainable growth.
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
                    <p className="text-gray-600">Our team of experienced professionals will guide you through every step of your business journey, providing insights and solutions tailored to your specific industry and market conditions.</p>
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
                    <p className="text-gray-600">We provide customized solutions to meet your specific business needs, focusing on actionable strategies that deliver measurable results and long-term value.</p>
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
                    <p className="text-gray-600">Ensure your business meets all legal and regulatory requirements with our comprehensive compliance assessment and implementation strategies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg" id="request-form">
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

        {/* Our Consultation Services Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-3 inline-block rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Business Strategy</h3>
                <p className="text-gray-600 mb-4">Develop comprehensive strategies for business growth, market positioning, and competitive advantage through data-driven insights and industry expertise.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Market entry strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Strategic partnerships
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Business model innovation
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-3 inline-block rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Financial Planning</h3>
                <p className="text-gray-600 mb-4">Optimize your financial resources with comprehensive planning services that enhance profitability, manage cash flow, and secure funding for growth initiatives.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Cash flow optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Investment strategy
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Capital raising
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-3 inline-block rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Legal Compliance</h3>
                <p className="text-gray-600 mb-4">Navigate complex regulatory landscapes with our legal compliance services that help minimize risk, ensure adherence to laws, and protect your business interests.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Regulatory compliance
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Contract review
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Risk mitigation
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-3 inline-block rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">International Expansion</h3>
                <p className="text-gray-600 mb-4">Expand your business globally with strategic guidance on market entry, cross-border operations, and cultural adaptation tailored to your industry and goals.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Market assessment
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Operational setup
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Cross-cultural management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Consultation Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Consultation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 mt-2">Discovery</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive assessment of your business needs, challenges, and goals through detailed discussions and analysis of your current situation.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 mt-2">Strategy Development</h3>
                <p className="text-gray-600">
                  Our team develops a customized strategy tailored to your specific requirements, taking into account market conditions, industry trends, and competitive landscape.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 mt-2">Implementation Planning</h3>
                <p className="text-gray-600">
                  We create detailed implementation plans with clear timelines, resource requirements, and measurable milestones to ensure successful execution.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-blue-800 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 mt-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous guidance and support during implementation, with regular reviews and adjustments to ensure optimal results and sustainable success.
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* Testimonials Section */}
                
        {/* CTA Section */}
    
      </div>
    </>
  );
};

export default ConsultAndExpertForBusinessPage;