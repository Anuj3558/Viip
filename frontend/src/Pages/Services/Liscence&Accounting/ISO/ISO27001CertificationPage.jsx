import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaCheckCircle,
  FaFileContract,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Notification from "../../../../components/NOtification";

const ISO27001CertificationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    employees: "",
    industry: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [notification, setNotification] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = (phone) => {
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const showSuccessNotification = () => {
    setNotification({
      type: "success",
      message: "Success",
      description: "ISO 27001 inquiry submitted successfully!",
    });
  };

  const showErrorNotification = (message) => {
    setNotification({
      type: "error",
      message: "Error",
      description: message,
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification && notification.type === "success") {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    } else if (name === "phone") {
      validatePhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (!isEmailValid || !isPhoneValid) {
      return;
    }

    try {
      console.log(`${import.meta.env.VITE_APP_BACKEND_URL}/api/iso/27001`);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/iso/27001`,
        formData
      );

      console.log("Form data submitted successfully:", response.data);
      showSuccessNotification();

      // Reset form
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        employees: "",
        industry: "",
        message: "",
      });
      setEmailError("");
      setPhoneError("");
    } catch (error) {
      console.error("Error submitting form data:", error);
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      ); // Improved error logging
      showErrorNotification(
        error.response?.data?.message ||
          "Failed to submit the inquiry. Please try again."
      );
    }
  };

  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          description={notification.description}
          onClose={closeNotification}
        />
      )}
      <Helmet>
        <title>
          ISO 27001 Certification Services | Vastav Intellect and IP Solutions
        </title>
        <meta
          name="description"
          content="Achieve ISO 27001 Certification with Vastav Intellect and IP Solutions. Expert information security management system consulting."
        />
        <meta
          name="keywords"
          content="ISO 27001, information security, ISMS, cybersecurity, data protection, certification, Vastav Intellect, India"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Registration Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                ISO 27001 Certification Services
              </h2>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions provides expert consulting to
                help your organization achieve ISO 27001 certification and
                implement an effective Information Security Management System
                (ISMS).
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaLock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Enhanced Information Security
                    </h3>
                    <p className="text-gray-600">
                      Protect your sensitive data and information assets from
                      security threats and breaches.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Risk Management</h3>
                    <p className="text-gray-600">
                      Identify and mitigate security risks before they impact
                      your business operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUserShield className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Customer & Stakeholder Trust
                    </h3>
                    <p className="text-gray-600">
                      Build confidence with customers and partners by
                      demonstrating your commitment to information security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Get a Quote for ISO 27001 Certification
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
                    placeholder="Tell us about your information security needs and ISO 27001 certification goals"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Request ISO 27001 Certification Quote
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our ISO 27001 Certification Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaLock className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Risk Assessment & Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive risk assessments to identify and manage
                  information security risks.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Risk identification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Risk analysis
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Risk mitigation planning
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFileContract className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  ISMS Documentation & Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance in developing and implementing the necessary
                  ISMS documentation and processes for ISO 27001 compliance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Policy and procedure development
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Control implementation
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Training and awareness programs
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GiTakeMyMoney className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Internal Audit & Compliance Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Assistance in conducting internal audits and ensuring ongoing
                  compliance with information security standards and ISO 27001
                  requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Internal audit planning and execution
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Corrective action planning
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Compliance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our ISO 27001 Certification Process
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FaCheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We conduct a thorough assessment of your current information
                security posture.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FaFileContract className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                ISMS Implementation
              </h3>
              <p className="text-gray-600">
                Our experts help you develop and implement an Information
                Security Management System (ISMS).
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <GiTakeMyMoney className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Internal Audit</h3>
              <p className="text-gray-600">
                We conduct internal audits to ensure compliance with ISO 27001
                standards.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FaLock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">
                We assist you in the certification process, ensuring a
                successful audit and ISO 27001 certification.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ISO27001CertificationPage;
