import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaHandHoldingHeart, FaGlobe, FaUsers, FaCheckCircle } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const ISO26000ConsultingPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    employees: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would typically send to backend API
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      industry: "",
      employees: "",
      message: "",
    });
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Helmet>
        <title>
          ISO 26000 Social Responsibility Consulting | Vastav Intellect and IP
          Solutions
        </title>
        <meta
          name="description"
          content="Implement ISO 26000 Social Responsibility guidelines with Vastav Intellect and IP Solutions. Expert consulting for a sustainable and ethical business."
        />
        <meta
          name="keywords"
          content="ISO 26000, social responsibility, sustainability, consulting, CSR, Vastav Intellect, ethical business, India"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />{" "}
        {/* Replace with your actual URL */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Registration Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                ISO 26000 Social Responsibility Consulting
              </h2>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions provides expert consulting to
                help your organization integrate social responsibility
                principles based on the ISO 26000 guidelines into your
                strategies, systems, and practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaHandHoldingHeart className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Enhanced Reputation
                    </h3>
                    <p className="text-gray-600">
                      Improve your brand image and build trust with
                      stakeholders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaGlobe className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Sustainable Practices
                    </h3>
                    <p className="text-gray-600">
                      Adopt environmentally and socially responsible practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUsers className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Improved Stakeholder Relations
                    </h3>
                    <p className="text-gray-600">
                      Strengthen relationships with employees, customers, and
                      the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Request a Consultation for ISO 26000 Implementation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your contact name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email Address
                  </label>
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
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Phone Number
                  </label>
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
                  <label
                    htmlFor="industry"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your industry"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="employees"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the number of employees in your organization"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your company and social responsibility goals"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Request ISO 26000 Consultation
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our ISO 26000 Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaGlobe className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Assessment & Gap Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Evaluating your current social responsibility practices
                  against ISO 26000 guidelines.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Stakeholder engagement assessment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Reporting and recommendations
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaHandHoldingHeart className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Implementation Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Developing and implementing strategies to integrate social
                  responsibility into your operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Policy development
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Action planning
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GiTakeMyMoney className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Reporting & Communication
                </h3>
                <p className="text-gray-600 mb-4">
                  Assisting with the development of social responsibility
                  reports and communication strategies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Stakeholder communication strategies
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Report development guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our ISO 26000 Implementation Process
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We assess your current social responsibility practices and
                identify areas for improvement.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              <p className="text-gray-600">
                We develop a customized social responsibility strategy aligned
                with ISO 26000 guidelines.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">
                We help you implement the strategy across your organization.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Monitoring & Reporting</h3>
              <p className="text-gray-600">
                We provide ongoing support to monitor and report on your social
                responsibility performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ISO26000ConsultingPage;
