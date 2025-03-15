import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  FaStethoscope,
  FaFileContract,
  FaMedkit,
  FaCheckCircle,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Notification from "../../../../components/NOtification";

const ISO13485CertificationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    products: "",
    employees: "",
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
      description: "ISO 13485 inquiry submitted successfully!",
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
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/iso/13485`,
        formData
      );

      console.log("Form data submitted successfully:", response.data);
      showSuccessNotification();

      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        products: "",
        employees: "",
        message: "",
      });
      setEmailError("");
      setPhoneError("");
    } catch (error) {
      console.error("Error submitting form data:", error);
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
          ISO 13485 Certification Services | Vastav Intellect and IP Solutions
        </title>
        <meta
          name="description"
          content="Achieve ISO 13485 Certification for your medical devices with Vastav Intellect and IP Solutions. Expert QMS consulting."
        />
        <meta
          name="keywords"
          content="ISO 13485, medical devices, quality management system, QMS, certification, Vastav Intellect, regulatory compliance, India"
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
                ISO 13485 Certification Services
              </h2>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions offers specialized consulting
                services to help medical device manufacturers achieve ISO 13485
                certification and implement a robust Quality Management System
                (QMS).
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaStethoscope className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Regulatory Compliance
                    </h3>
                    <p className="text-gray-600">
                      Ensure compliance with global medical device regulations
                      and standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaFileContract className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Enhanced Product Quality
                    </h3>
                    <p className="text-gray-600">
                      Improve the safety, reliability, and performance of your
                      medical devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaMedkit className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Market Access</h3>
                    <p className="text-gray-600">
                      Gain access to new markets and expand your business
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Get a Quote for ISO 13485 Certification
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
                    htmlFor="products"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Medical Devices
                  </label>
                  <input
                    type="text"
                    id="products"
                    name="products"
                    value={formData.products}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="List the medical devices you manufacture"
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
                    placeholder="Tell us about your company and ISO 13485 certification goals"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Request ISO 13485 Certification Quote
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our ISO 13485 Certification Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaStethoscope className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gap Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Identifying gaps in your current QMS compared to ISO 13485
                  requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    QMS assessment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Reporting and recommendations
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFileContract className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Documentation & Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Developing and implementing the necessary documentation and
                  processes for ISO 13485 compliance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    QMS procedure creation
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Training and support
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GiTakeMyMoney className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Audit Support</h3>
                <p className="text-gray-600 mb-4">
                  Assistance with internal and external audits to ensure
                  successful ISO 13485 certification.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Pre-audit assessment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Corrective action planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our ISO 13485 Certification Process
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your organization's needs and the scope of your
                medical device QMS.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Gap Analysis</h3>
              <p className="text-gray-600">
                We assess your current QMS to identify gaps in meeting ISO 13485
                requirements.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">
                We help you implement the necessary QMS processes, procedures,
                and documentation.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Certification Audit</h3>
              <p className="text-gray-600">
                We assist you in preparing for and successfully completing the
                ISO 13485 certification audit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ISO13485CertificationPage;
