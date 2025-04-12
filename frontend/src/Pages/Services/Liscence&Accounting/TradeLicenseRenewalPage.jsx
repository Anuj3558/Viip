import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaCheckCircle,
  FaFileSignature,
  FaClock,
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaRegCalendarCheck
} from "react-icons/fa";
import { GiTakeMyMoney, GiCommercialAirplane } from "react-icons/gi";
import { MdOutlinePayment, MdOutlineBusinessCenter } from "react-icons/md";
import Notification from "../../../components/NOtification";

const TradeLicenseRenewalPage = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    message: "",
    businessType: "",
    licenseType: ""
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [notification, setNotification] = useState(null);

  const businessTypes = [
    "Retail Shop",
    "Wholesale Business",
    "Manufacturing Unit",
    "Service Provider",
    "Restaurant/Food Business",
    "Professional Services",
    "Other"
  ];

  const licenseTypes = [
    "Shop License",
    "Industrial License",
    "Food Establishment License",
    "Service License",
    "Professional License",
    "Other"
  ];

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
      description: "Trade License Renewal inquiry submitted successfully! We'll contact you within 2 business hours.",
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
      }, 5000);

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
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/trade-license-renewal`,
        {
          ...formData,
          type: 'trade_license_renewal_inquiry'
        }
      );
      console.log("Form submitted:", response.data);
      showSuccessNotification();

      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        licenseNumber: "",
        message: "",
        businessType: "",
        licenseType: ""
      });
      setEmailError("");
      setPhoneError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification(
        error.response?.data?.message ||
          "Failed to submit the inquiry. Please try again or call us directly."
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
        <title>Trade License Renewal Services | Vastav Intellect and IP Solutions</title>
        <meta
          name="description"
          content="Professional Trade License Renewal services for businesses across India. Hassle-free renewal with expert guidance from Vastav Intellect and IP Solutions."
        />
        <meta
          name="keywords"
          content="trade license renewal, business license renewal, shop license, municipal license, business compliance, license consultant, Vastav Intellect"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
  

        {/* Main Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">
                Why Renew Your Trade License On Time?
              </h2>
              <p className="text-lg text-gray-700">
                Operating without a valid trade license can result in heavy penalties, 
                business closure, and legal complications. Our experts ensure your renewal 
                is processed smoothly before expiration.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Benefits of Our Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Penalty avoidance with timely renewal processing</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Expert handling of municipal corporation requirements</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Document preparation and verification support</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaClock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Express Processing</h3>
                    <p className="text-gray-600">
                      Priority processing options available for urgent renewals with same-day submission.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Compliance Assurance</h3>
                    <p className="text-gray-600">
                      We verify all compliance requirements specific to your business type and location.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaHandshake className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Post-Renewal Support</h3>
                    <p className="text-gray-600">
                      Assistance with license display requirements and renewal reminders for next cycle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Documents Typically Required</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Current Trade License</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>ID Proof (Aadhaar/PAN)</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Address Proof</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Property Tax Receipt</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Latest Electricity Bill</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Business Proof</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Start Your Trade License Renewal
              </h2>
              <p className="text-gray-600 mb-6">
                Complete this form to get a free consultation and quotation for your trade license renewal.
                We'll contact you within 2 business hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Business Name*
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="As per current license"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Owner/Proprietor Name*
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="License holder's name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Business Type*
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="licenseType"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    License Type*
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select license type</option>
                    {licenseTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="licenseNumber"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Current License Number*
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your trade license number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="For renewal updates"
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
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="For urgent communication"
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
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mention your renewal urgency, special requirements, or questions"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get Free Renewal Consultation
                </button>
                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will only be used for your license renewal process.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Comprehensive Trade License Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFileSignature className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">New Trade License</h3>
                <p className="text-gray-600 mb-4">
                  Assistance with obtaining a new trade license for your business establishment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Application preparation
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Document verification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Liaison with authorities
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GiCommercialAirplane className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Fast-Track Renewal
                </h3>
                <p className="text-gray-600 mb-4">
                  Expedited renewal processing for businesses with urgent requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Priority processing
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Same-day submission
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Emergency support
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MdOutlineBusinessCenter className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  License Modification
                </h3>
                <p className="text-gray-600 mb-4">
                  Assistance with modifying existing license details (address change, business expansion, etc.).
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Change of address
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Business expansion
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Activity addition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our 5-Step Trade License Renewal Process
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Document Collection</h3>
              <p className="text-gray-600">
                We collect your current license and required supporting documents
              </p>
            </div>
            <div className="md:w-1/5 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Application Preparation</h3>
              <p className="text-gray-600">
                Our experts prepare your renewal application with accuracy
              </p>
            </div>
            <div className="md:w-1/5 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Fee Calculation</h3>
              <p className="text-gray-600">
                We calculate applicable fees and any pending penalties
              </p>
            </div>
            <div className="md:w-1/5 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Submission</h3>
              <p className="text-gray-600">
                Submission to municipal corporation with follow-up
              </p>
            </div>
            <div className="md:w-1/5 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Digital copy sent immediately, physical copy couriered
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Benefits of Timely Trade License Renewal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold">Legal Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Avoid penalties (up to ₹5,000/month in some states) and potential business closure for operating without a valid license.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <GiTakeMyMoney className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold">Financial Advantages</h3>
                </div>
                <p className="text-gray-600">
                  Maintain eligibility for bank loans, government tenders, and MSME schemes that require current license status.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaRegCalendarCheck className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold">Business Continuity</h3>
                </div>
                <p className="text-gray-600">
                  Prevent disruptions to your operations and maintain professional credibility with clients and partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
     
      </div>
    </>
  );
};

export default TradeLicenseRenewalPage;