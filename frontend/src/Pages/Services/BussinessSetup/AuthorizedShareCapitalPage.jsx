import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaBuilding,FaCoins,FaChartLine  } from 'react-icons/fa'; // Import React Icons
import Notification from '../../../components/NOtification'; // Import the Notification component

const AuthorizedShareCapitalPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            route: '/bussiness-setup/authorized-share-capital',
            type: 'authorized_share_capital_inquiry'
        };

        try {
            // Send data to backend API
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/authorized-share-capital`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                showSuccessNotification();
            } else {
                console.error('Form submission failed:', response.status);
                showErrorNotification('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showErrorNotification('An error occurred while submitting the form. Please try again.');
        }
    };

    const isPhoneValid = (phone) => {
        // Basic validation for phone numbers
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phone === '' || phoneRegex.test(phone);
    };

    const isEmailValid = (email) => {
        // Basic validation for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email === '' || emailRegex.test(email);
    };

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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (notification && notification.type === 'success') {
                closeNotification();
            }
        }, 4500);

        return () => clearTimeout(timer);
    }, [notification]);

    return (
        <>
            <Helmet>
                <title>Authorized Share Capital | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Manage your company's authorized share capital with Vastav Intellect and IP Solutions. Ensure compliance and optimize your business structure." />
                <meta name="keywords" content="Authorized Share Capital, company structure, compliance, Vastav Intellect, IP Solutions, India" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
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
                            <h2 className="text-3xl font-bold text-blue-800">Authorized Share Capital Services</h2>
                            <p className="text-lg text-gray-700">
                                At Vastav Intellect and IP Solutions, we assist in managing your company's authorized share capital,
                                ensuring compliance with regulatory requirements and optimizing your business structure.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Guidance</h3>
                                        <p className="text-gray-600">Our team of experienced professionals will guide you through every step.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaBuilding className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Optimized Business Structure</h3>
                                        <p className="text-gray-600">Ensure your company's structure is optimized for growth and compliance.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Complete Compliance</h3>
                                        <p className="text-gray-600">Ensure your business meets all legal and regulatory requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Authorized Share Capital Services</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
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
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border ${!isEmailValid(formData.email) && formData.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    {!isEmailValid(formData.email) && formData.email && (
                                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border ${!isPhoneValid(formData.phone) && formData.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                    {!isPhoneValid(formData.phone) && formData.phone && (
                                        <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us about your business and requirements"
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
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Authorized Share Capital Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCoins className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Initial Capital Determination</h3>
                                <p className="text-gray-600 mb-4">We help determine the appropriate Authorized Share Capital for your company during formation.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Business plan analysis
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Funding requirements assessment
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Regulatory compliance
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaChartLine className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Capital Increase Assistance</h3>
                                <p className="text-gray-600 mb-4">We guide you through the process of increasing your Authorized Share Capital as your business grows.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Board resolution preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Shareholder approval process
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Filing with the MCA
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCheckCircle className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Compliance & Regulatory Filing</h3>
                                <p className="text-gray-600 mb-4">Ensuring all filings and documentation related to your Authorized Share Capital are compliant with regulations.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Form SH-7 preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        ROC filing assistance
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Maintaining statutory records
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Consultation</h3>
                            <p className="text-gray-600">We discuss your company's business plan and capital requirements.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Analysis</h3>
                            <p className="text-gray-600">We analyze your financial projections and recommend an optimal capital structure.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Implementation</h3>
                            <p className="text-gray-600">We assist in implementing the chosen Authorized Share Capital strategy.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Compliance</h3>
                            <p className="text-gray-600">We ensure all filings are completed accurately and on time.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Capital Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCoins className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Financial Expertise</h3>
                                <p className="text-gray-600">We understand the financial implications of Authorized Share Capital decisions.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Compliance Focus</h3>
                                <p className="text-gray-600">We ensure full compliance with all applicable regulations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaChartLine className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Growth-Oriented Advice</h3>
                                <p className="text-gray-600">We provide advice that supports your company's long-term growth strategy.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AuthorizedShareCapitalPage;
