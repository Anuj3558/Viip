import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaShieldAlt,
  FaFileAlt,
  FaUser,
  FaLock,
  FaCheckCircle,
  } from "react-icons/fa"; // Import React Icons
import Notification from "../../../components/NOtification";

const DPRServicePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      route: "/dpr-service",
      type: "dpr_service_inquiry",
    };

    try {
      // Send data to backend API
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/dpr/dpr-service`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        showSuccessNotification();
      } else {
        console.error("Form submission failed:", response.status);
        showErrorNotification("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  const isPhoneValid = (phone) => {
    // Basic validation for phone numbers
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phone === "" || phoneRegex.test(phone);
  };

  const isEmailValid = (email) => {
    // Basic validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === "" || emailRegex.test(email);
  };

  const showSuccessNotification = () => {
    setNotification({
      type: "success",
      message: "Success",
      description: "Form submitted successfully!",
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
    const timer = setTimeout(() => {
      if (notification && notification.type === "success") {
        closeNotification();
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <>
      <Helmet>
        <title>
          Data Protection and Representation (DPR) Services | Vastav Intellect
          and IP Solutions
        </title>
        <meta
          name="description"
          content="Protect your data and ensure compliance with data protection laws. Vastav Intellect and IP Solutions offers expert DPR services."
        />
        <meta
          name="keywords"
          content="data protection, DPR services, compliance, intellectual property, Vastav Intellect, IP Solutions"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />{" "}
        {/* Replace with your actual URL */}
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

        {/* Main Registration Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Data Protection and Representation (DPR) Services
              </h2>
              <p className="text-lg text-gray-700">
                Protect your data and ensure compliance with data protection
                laws. Vastav Intellect and IP Solutions offers expert DPR
                services to safeguard your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaLock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Data Security and Compliance
                    </h3>
                    <p className="text-gray-600">
                      Ensure your business complies with data protection laws
                      and regulations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Legal Representation
                    </h3>
                    <p className="text-gray-600">
                      Get expert legal representation for data protection
                      matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUser className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Our team of experts will guide you through the DPR
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Request DPR Services
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Full Name
                  </label>
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
                    className={`w-full px-4 py-2 border ${
                      !isEmailValid(formData.email) && formData.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email address"
                    required
                  />
                  {!isEmailValid(formData.email) && formData.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email address
                    </p>
                  )}
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
                    className={`w-full px-4 py-2 border ${
                      !isPhoneValid(formData.phone) && formData.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {!isPhoneValid(formData.phone) && formData.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid phone number
                    </p>
                  )}
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
                    placeholder="Tell us about your DPR needs (e.g., data protection, compliance, etc.)"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our DPR Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaLock className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Data Protection Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  We help you comply with data protection laws and regulations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    GDPR compliance
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Data security audits
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaShieldAlt className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Legal Representation</h3>
                <p className="text-gray-600 mb-4">
                  We provide expert legal representation for data protection
                  matters.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Legal advice and support
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Dispute resolution
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaUser className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-600 mb-4">
                  We provide ongoing support to ensure your data protection
                  compliance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Regular compliance checks
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Policy updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
              Why Choose Vastav for DPR Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaLock className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Data Security</h3>
                <p className="text-gray-600">
                  We specialize in ensuring data security and compliance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaShieldAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Legal Support</h3>
                <p className="text-gray-600">
                  We provide expert legal representation for data protection
                  matters.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaUser className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  We provide tailored solutions for your DPR needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DPRServicePage;
