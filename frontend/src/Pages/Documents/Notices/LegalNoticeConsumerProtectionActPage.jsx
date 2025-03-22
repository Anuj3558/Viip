import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaBalanceScale, FaUserShield, FaHandshake } from "react-icons/fa"; // Import React Icons
import Notification from "../../../components/NOtification";

const LegalNoticeConsumerProtectionActPage = () => {
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
      route: "/legal-notice-consumer-protection-act",
      type: "legal_notice_consumer_protection_act_inquiry",
    };

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_BACKEND_URL
        }/document/legal-notice-consumer-protection-act`,
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
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phone === "" || phoneRegex.test(phone);
  };

  const isEmailValid = (email) => {
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
          Legal Notice Under Consumer Protection Act | Vastav Intellect and IP
          Solutions
        </title>
        <meta
          name="description"
          content="Send a Legal Notice under the Consumer Protection Act to protect your consumer rights. Vastav Intellect and IP Solutions provides expert legal assistance for consumer protection cases."
        />
        <meta
          name="keywords"
          content="legal notice under consumer protection act, consumer protection, legal notice, Vastav Intellect"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
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

        {/* Main Legal Notice Under Consumer Protection Act Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Legal Notice Under Consumer Protection Act
              </h2>
              <p className="text-lg text-gray-700">
                Send a Legal Notice under the Consumer Protection Act to protect
                your consumer rights. Vastav Intellect and IP Solutions provides
                expert legal assistance for consumer protection cases.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaBalanceScale className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Protect Consumer Rights
                    </h3>
                    <p className="text-gray-600">
                      Send a legal notice to address grievances and protect your
                      rights as a consumer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUserShield className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Legal Expertise</h3>
                    <p className="text-gray-600">
                      Our legal experts ensure your notice is drafted with
                      precision and clarity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaHandshake className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Timely Resolution</h3>
                    <p className="text-gray-600">
                      We ensure your legal notice is delivered promptly for
                      quick resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Send a Legal Notice Under Consumer Protection Act
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
                    placeholder="Describe your consumer grievance and requirements"
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
      </div>
    </>
  );
};

export default LegalNoticeConsumerProtectionActPage;
