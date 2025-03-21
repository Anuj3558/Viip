import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaCalendarAlt, FaShieldAlt, FaGlobe } from "react-icons/fa";
import Notification from "../../../../components/NOtification"; // Assuming you have a Notification component

const TrademarkRenewal = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    trademarkNumber: "",
    renewalYear: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.trademarkNumber)
      newErrors.trademarkNumber = "Trademark Number is required";
    if (!formData.renewalYear)
      newErrors.renewalYear = "Renewal Year is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showSuccessNotification();
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          trademarkNumber: "",
          renewalYear: "",
        });
      } else {
        showErrorNotification(
          "Failed to submit your inquiry. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification("An error occurred while submitting your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showSuccessNotification = () => {
    setNotification({
      type: "success",
      message: "Success",
      description:
        "Your trademark renewal inquiry has been submitted successfully! We'll get back to you soon.",
    });
  };

  const showErrorNotification = (message) => {
    setNotification({
      type: "error",
      message: "Error",
      description: message,
    });
  };

  const closeNotification = () => setNotification(null);

  useEffect(() => {
    if (notification && notification.type === "success") {
      const timer = setTimeout(() => closeNotification(), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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
        <title>Trademark Renewal | Vastav Intellect and IP Solutions</title>
        <meta
          name="description"
          content="Renew your trademark registration with our hassle-free trademark renewal service. Protect your brand identity and maintain your exclusive rights."
        />
        <meta
          name="keywords"
          content="trademark renewal, trademark registration, intellectual property, Vastav Intellect, IP Solutions, India, brand protection"
        />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Main Trademark Renewal Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Trademark Renewal Service
              </h2>
              <p className="text-lg text-gray-700">
                Protect your valuable brand by renewing your trademark
                registration before it expires. Our expert team ensures a smooth
                and timely renewal process.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-800 text-xl mb-2">
                  Why Renew Your Trademark?
                </h3>
                <p className="text-gray-700">
                  Trademark registrations in India are valid for 10 years from
                  the date of application. Renewal is essential to maintain your
                  exclusive rights to use the mark and prevent others from using
                  similar marks.
                </p>
              </div>

              {/* Features */}
              {[
                {
                  icon: FaCalendarAlt,
                  title: "Timely Renewals",
                  description:
                    "We track your renewal deadlines and ensure applications are filed within the required timeframe.",
                },
                {
                  icon: FaShieldAlt,
                  title: "Continuous Protection",
                  description:
                    "Maintain uninterrupted protection for your valuable brand assets",
                },
                {
                  icon: FaGlobe,
                  title: "Expert Support",
                  description:
                    "Our experienced team guides you through the entire renewal process",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Get Expert Assistance
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
                    Message
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
                    placeholder="Please provide details about your trademark and the objection received"
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
              <p className="text-xs text-gray-500 mt-4">
                *T&C: Turnaround time is subject to the complexity of the
                objection and complete submission of required documents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrademarkRenewal;
