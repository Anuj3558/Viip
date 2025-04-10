import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaUser, FaFileSignature } from 'react-icons/fa'; // Import React Icons

import Notification from '../../../components/NOtification';
const SoleProprietorshipRegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'sole_proprietorship_inquiry'
      });
    
      const [notification, setNotification] = useState(null);
    
      const showSuccessNotification = () => {
        setNotification({
          type: 'success',
          message: 'Success',
          description: 'Form submitted successfully!'
        });
      };
    
      const showErrorNotification = (message) => {
        setNotification({
          type: 'error',
          message: 'Error',
          description: message
        });
      };
    
      const closeNotification = () => {
        setNotification(null);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/sole-proprietorship-registration`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            showSuccessNotification();
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
              type: 'sole_proprietorship_inquiry'
            });
          } else {
            showErrorNotification('Failed to submit the form.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          showErrorNotification('An error occurred while submitting the form.');
        }
      };

    return (
        <>
            <Helmet>
                <title>Sole Proprietorship Registration | Vastav Intellect and IP Solutions</title>
                <meta
                    name="description"
                    content="Register your Sole Proprietorship with Vastav Intellect and IP Solutions. Simple, quick, and compliant setup for your business."
                />
                <meta
                    name="keywords"
                    content="sole proprietorship, registration, business registration, MSME registration, Udyam registration, GST registration, India, Vastav Intellect, IP Solutions"
                />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                {/* Main Registration Section */}
                {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          description={notification.description}
          onClose={closeNotification}
        />
      )}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">Sole Proprietorship Registration Services</h2>
                            <p className="text-lg text-gray-700">
                                Vastav Intellect and IP Solutions helps you quickly establish your Sole Proprietorship by assisting with
                                the necessary registrations and licenses to operate legally and efficiently.
                            </p>
                            <div className="space-y-4">
                                {[{
                                    icon: <FaUser />,
                                    title: "Simple Setup",
                                    description: "Sole proprietorships are easy to establish with minimal regulatory requirements."
                                }, {
                                    icon: <FaCheckCircle />,
                                    title: "Essential Registrations",
                                    description: "We help you obtain the necessary registrations like MSME (Udyam), GST, and others."
                                }, {
                                    icon: <FaFileSignature />,
                                    title: "Operational Efficiency",
                                    description: "Start operating your business smoothly with the right paperwork in place."
                                }].map(({ icon, title, description }, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">{icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{title}</h3>
                                            <p className="text-gray-600">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Register Your Sole Proprietorship</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Form Fields */}
                                {['name', 'email', 'phone'].map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field} className="block text-gray-700 font-medium mb-1 capitalize">
                                            {field}
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder={`Enter your ${field}`}
                                            required
                                        />
                                    </div>
                                ))}
                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us about your business and what registrations you need"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Submit Registration Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Sole Proprietorship Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileSignature className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">MSME (Udyam) Registration</h3>
                                <p className="text-gray-600 mb-4">Registering your business as a Micro, Small & Medium Enterprise to avail government benefits.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Eligibility assessment
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Documentation & Filing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Udyam Certificate issuance
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCheckCircle className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">GST Registration</h3>
                                <p className="text-gray-600 mb-4">Obtaining Goods and Services Tax (GST) registration for your business.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        GST applicability assessment
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        GST application filing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        GSTIN certificate issuance
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaUser className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Other Licenses & Registrations</h3>
                                <p className="text-gray-600 mb-4">Assistance with other licenses and registrations as per your business needs (e.g., trade license, shop & establishment registration).</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        License identification
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Application processing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Liaison with authorities
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Simplified Registration Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Consultation</h3>
                            <p className="text-gray-600">We discuss your business activities and identify required registrations.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Documentation</h3>
                            <p className="text-gray-600">We assist you in preparing all the necessary documents.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Application Filing</h3>
                            <p className="text-gray-600">We handle the application filing process with the relevant authorities.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Registration</h3>
                            <p className="text-gray-600">We provide you with the registration certificates and licenses.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Your Registration?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaUser className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Simplified Process</h3>
                                <p className="text-gray-600">We make sole proprietorship registration simple and straightforward.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Complete Assistance</h3>
                                <p className="text-gray-600">We assist you with all required registrations and licenses.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaFileSignature className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                                <p className="text-gray-600">Our experts guide you on the best way to register your business.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Additional sections can be added here */}
            </div>
        </>
    );
};

export default SoleProprietorshipRegistrationPage;
