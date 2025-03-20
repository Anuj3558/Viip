import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaSearch, FaShieldAlt, FaGlobe, FaCheckCircle, FaUserTie, FaClock, FaChartLine } from "react-icons/fa";

const TrademarkWatchPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // API call would go here
      setTimeout(() => {
        showSuccessNotification();
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification("An error occurred while submitting your inquiry.");
      setIsSubmitting(false);
    }
  };

  const showSuccessNotification = () => {
    setNotification({
      type: "success",
      message: "Success",
      description:
        "Your inquiry has been submitted successfully! We'll get back to you soon.",
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

  // Custom Notification component
  const Notification = ({ type, message, description, onClose }) => (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${
        type === "success"
          ? "bg-green-50 border-green-500"
          : "bg-red-50 border-red-500"
      } border-l-4 z-50`}
    >
      <div className="flex justify-between">
        <div>
          <h3
            className={`font-bold ${
              type === "success" ? "text-green-800" : "text-red-800"
            }`}
          >
            {message}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
    </div>
  );

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
        <title>Trademark Watch | Vastav Intellect IP Solutions</title>
        <meta
          name="description"
          content="Protect your brand with our comprehensive trademark monitoring service. Get real-time alerts on similar trademark filings and potential infringements."
        />
        <meta
          name="keywords"
          content="trademark watch, trademark monitoring, intellectual property, Vastav Intellect, IP Solutions, India, brand protection"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Trademark Watch Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Trademark Watch Service
              </h2>
              <p className="text-lg text-gray-700">
                Protect your brand by monitoring new trademark applications that
                could infringe on your intellectual property rights.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-800 text-xl mb-2">
                  What is a Trademark Monitoring Service?
                </h3>
                <p className="text-gray-700">
                  Registering a trademark is the first step towards protecting
                  your brand name. To ensure you have full control over it, you
                  must keep a close watch on all probable attempts by other
                  businesses and individuals to register similar trademarks,
                  even if they are related to other domains.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaSearch className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Comprehensive Monitoring
                    </h3>
                    <p className="text-gray-600">
                      We monitor trademark databases across India and globally
                      to identify potential conflicts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Proactive Protection
                    </h3>
                    <p className="text-gray-600">
                      Early detection allows you to take timely action against
                      potential infringements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaGlobe className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Coverage</h3>
                    <p className="text-gray-600">
                      Our monitoring extends beyond India to international
                      trademark offices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Get Started with Trademark Watch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your 10-digit phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Tell us about your trademark
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Please provide details about your trademark and monitoring requirements"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Types of Trademark Watch */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Types of Trademark Watch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaSearch className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Identical Trademark Watch
                </h3>
                <p className="text-gray-600 mb-4">
                  Monitors for exact matches to your trademark across all
                  registered marks and new applications.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Exact match identification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Cross-class monitoring
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Real-time alerts
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaGlobe className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Similar Trademark Watch
                </h3>
                <p className="text-gray-600 mb-4">
                  Identifies trademarks that are similar to yours in appearance,
                  sound, or meaning.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Phonetic similarity detection
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Visual resemblance analysis
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Conceptual similarity monitoring
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaUserTie className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Trademark Watch with Opinion
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive monitoring with expert legal analysis and
                  recommendations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Legal risk assessment
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Strategic recommendations
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Action plan development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Digital Trademark Monitoring - Step By Step Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Consultation</h3>
                </div>
                <p className="text-gray-600">
                  You discuss your business and brand with our lawyers. The
                  lawyers recommend the variations on your brand name that need
                  to be tracked.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Database Monitoring</h3>
                </div>
                <p className="text-gray-600">
                  We have access to the database of all trademark filings across
                  industries. We keep a watch on all new filings and capture the
                  mention of similar or identical brands.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-b old mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Reporting</h3>
                </div>
                <p className="text-gray-600">
                  We provide you with a detailed report of all the trademark
                  filings that are similar to your brand. You can take
                  appropriate action based on the report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Benefits of Trademark Watch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Early Detection</h3>
                </div>
                <p className="text-gray-600">
                  Identify potential infringements before they become a threat
                  to your brand.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Legal Protection</h3>
                </div>
                <p className="text-gray-600">
                  Gain legal protection by taking prompt action against
                  potential trademark infringements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Brand Integrity</h3>
                </div>
                <p className="text-gray-600">
                  Maintain the integrity and reputation of your brand by
                  preventing unauthorized use.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrademarkWatchPage;
