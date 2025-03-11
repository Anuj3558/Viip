import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaUser, FaShieldAlt, FaSearch } from 'react-icons/fa'; // Import React Icons

const TrademarkRegistrationIndividualPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would typically send to backend API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Form submitted successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Trademark Registration for Individuals | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Trademark Registration for Individuals with Vastav Intellect and IP Solutions. Protect your personal brand, name, and logo." />
        <meta name="keywords" content="trademark registration, individual, personal brand, name registration, logo registration, India, Vastav Intellect, IP Solutions" />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* Main Registration Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">Trademark Registration for Individuals</h2>
              <p className="text-lg text-gray-700">
               Vastav Intellect and IP Solutions helps individuals protect their personal brand, name, logo, or unique creations through trademark registration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Protect Your Identity</h3>
                    <p className="text-gray-600">Safeguard your name, likeness, or brand from unauthorized use.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Build Brand Recognition</h3>
                    <p className="text-gray-600">Establish a strong brand identity and prevent others from using your name or logo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUser className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Control Your Image</h3>
                    <p className="text-gray-600">Maintain control over how your name and brand are used in the marketplace.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Register Your Personal Trademark</h2>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
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
                    placeholder="Tell us about what you want to trademark (name, logo, etc.)"
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

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Trademark Services for Individuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaSearch className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Trademark Search</h3>
                <p className="text-gray-600 mb-4">Ensuring your name or logo is unique and available for trademark registration.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Database search for existing marks
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Analysis of similar trademarks
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trademark Application Filing</h3>
                <p className="text-gray-600 mb-4">Preparing and submitting your trademark application to the Indian Trademark Registry.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Expert application drafting
                  </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    </li>
                  </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaUser className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support & Monitoring</h3>
                <p className="text-gray-600 mb-4">Protecting your registered trademark through monitoring and enforcement assistance.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                   Trademark monitoring services
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Enforcement assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Trademark Registration Process</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Search & Clearance</h3>
              <p className="text-gray-600">We conduct a thorough search to ensure the trademark is available.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Application Prep</h3>
              <p className="text-gray-600">We prepare and file your trademark application with the Registry.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Registry Process</h3>
              <p className="text-gray-600">We handle all communications and potential objections from the Trademark Office.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Trademark Secured</h3>
              <p className="text-gray-600">We assist in securing and receiving your trademark registration certificate.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Your Trademark?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaShieldAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Protect your Assets</h3>
                <p className="text-gray-600">We know how to properly safeguard what matters to you most.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expertise You Can Trust</h3>
                <p className="text-gray-600">With years of experience, we ensure your business remains compliant.s</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaUser className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">We Value Your Safety</h3>
                <p className="text-gray-600">We are committed to helping individuals thrive in all aspects of business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Give Yourself the Brand Attention You Deserve</h2>
            <p className="text-lg mb-6">Contact us today for expert Trademark Registration services.</p>
            <button className="bg-white text-blue-800 font-medium py-3 px-6 rounded-md hover:bg-blue-100 transition duration-300">
              Get Started Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Vastav Intellect and IP Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrademarkRegistrationIndividualPage;
