import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaCheckCircle, FaGlobe, FaFileSignature } from "react-icons/fa";
import Notification from "../../../../components/NOtification"; // Import Notification component

const InternationalIpProtectionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        "International IP Protection inquiry submitted successfully!",
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
      const dataToSend = {
        ...formData,
        route: "/international-ip-protection",
        type: "International IP Protection",
      };

      const response = await fetch(
        `${
          import.meta.env.VITE_APP_BACKEND_URL
        }/api/international-ip-protection`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        showSuccessNotification();
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setEmailError("");
        setPhoneError("");
      } else {
        showErrorNotification("Failed to submit the inquiry.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      showErrorNotification("An error occurred while submitting the inquiry.");
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
          International IP Protection | Vastav Intellect and IP Solutions
        </title>
        <meta
          name="description"
          content="Vastav Intellect and IP Solutions offers international IP protection services to safeguard your intellectual property rights globally."
        />
        <meta
          name="keywords"
          content="international IP protection, global IP rights, Vastav Intellect, IP Solutions, India"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                International IP Protection Services
              </h2>
              <p className="text-lg text-gray-700">
                Secure your intellectual property rights globally with our
                comprehensive international IP protection services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaGlobe className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Worldwide Coverage
                    </h3>
                    <p className="text-gray-600">
                      Protect your IP in key markets around the globe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaFileSignature className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Filings</h3>
                    <p className="text-gray-600">
                      Expert guidance on international patent and trademark
                      filings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Enforcement Support
                    </h3>
                    <p className="text-gray-600">
                      Assistance with enforcing your IP rights in international
                      jurisdictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Inquire About International IP Protection
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
                      emailError ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email address"
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
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
                      phoneError ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
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
                    placeholder="Tell us about your international IP protection needs"
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
              Our International IP Protection Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaGlobe className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Global Trademark Registration
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure your brand identity worldwide with our global trademark
                  registration services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Comprehensive trademark search
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Filing and prosecution support
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFileSignature className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  International Patent Filings
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect your inventions across the globe with our
                  international patent filing services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    PCT application assistance
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Direct country filings
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaCheckCircle className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  IP Enforcement Abroad
                </h3>
                <p className="text-gray-600 mb-4">
                  Enforce your IP rights effectively in foreign jurisdictions
                  with our expert support.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Cease and desist letters
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Litigation support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InternationalIpProtectionPage;
