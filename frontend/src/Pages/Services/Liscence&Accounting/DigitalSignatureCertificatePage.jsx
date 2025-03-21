import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaCheckCircle, FaKey, FaFileSignature, FaLock } from "react-icons/fa"; // Import React Icons
import Notification from "../../../components/NOtification"; 

const DigitalSignatureCertificatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    certificateType: "",
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
      description:
        "Digital Signature Certificate application submitted successfully!",
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
        `${
          import.meta.env.VITE_APP_BACKEND_URL
        }/api/digital-signature-certificate`,
        formData
      );
      console.log("Form submitted:", response.data);
      showSuccessNotification();

      setFormData({
        name: "",
        email: "",
        phone: "",
        certificateType: "",
        message: "",
      });
      setEmailError("");
      setPhoneError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification(
        error.response?.data?.message ||
          "Failed to submit the application. Please try again."
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
          Digital Signature Certificate | Vastav Intellect and IP Solutions
        </title>
        <meta
          name="description"
          content="Get your Digital Signature Certificate (DSC) with Vastav Intellect and IP Solutions. Secure online transactions and ensure legal validity."
        />
        <meta
          name="keywords"
          content="digital signature certificate, DSC, online signature, secure transactions, Vastav Intellect, legal services, India"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />{" "}
        {/* Replace with your actual URL */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Digital Signature Certificate Services
              </h2>
              <p className="text-lg text-gray-700">
                Vastav Intellect and IP Solutions offers expert assistance in
                obtaining Digital Signature Certificates (DSC), ensuring secure
                online transactions, legal validity, and compliance with
                regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaLock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Secure Online Transactions
                    </h3>
                    <p className="text-gray-600">
                      Ensure secure and legally valid online transactions with a
                      Digital Signature Certificate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Regulatory Compliance
                    </h3>
                    <p className="text-gray-600">
                      Comply with regulations requiring DSC for various online
                      filings and transactions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaFileSignature className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Get professional advice and support to obtain the right
                      type of DSC for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Apply for Your Digital Signature Certificate
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
                    htmlFor="certificateType"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Certificate Type
                  </label>
                  <select
                    id="certificateType"
                    name="certificateType"
                    value={formData.certificateType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Certificate Type</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="DGFT">DGFT</option>
                  </select>
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
                    placeholder="Tell us about your requirements for the Digital Signature Certificate"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our Digital Signature Certificate Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFileSignature className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Documentation Assistance
                </h3>
                <p className="text-gray-600 mb-4">
                  Helping you gather and prepare all the necessary documents for
                  DSC application.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Identity proof
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Address proof
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaKey className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  DSC Type Selection Guidance
                </h3>
                <p className="text-gray-600 mb-4">
                  Providing guidance on selecting the appropriate type of DSC
                  based on your requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Class 2 DSC
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Class 3 DSC
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4"></div>
                <h3 className="text-xl font-bold mb-2">
                  Application Filing and Processing
                </h3>
                <p className="text-gray-600 mb-4">
                  Filing your DSC application and assisting with the
                  verification process.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Online application
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Verification assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our Digital Signature Certificate Process
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Information Gathering</h3>
              <p className="text-gray-600">
                We collect all the necessary information and documents from you.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Application Filing</h3>
              <p className="text-gray-600">
                We file your Digital Signature Certificate application online.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Verification</h3>
              <p className="text-gray-600">
                We assist you with the verification process as required by the
                Certifying Authority.
              </p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">DSC Issuance</h3>
              <p className="text-gray-600">
                You receive your Digital Signature Certificate.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section (Add your footer here) */}
      </div>
    </>
  );
};

export default DigitalSignatureCertificatePage;
