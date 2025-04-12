import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaPencilAlt, FaEdit, FaBuilding, FaFileAlt, FaCalculator, FaSyncAlt, FaTruck, FaFileSignature } from 'react-icons/fa';
import Notification from '../../../components/NOtification';

const GSTFilingCompliancePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
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
            route: '/tax-services/gst-filing-compliance',
            type: 'gst_filing_inquiry'
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/tax-services/gst-filing-compliance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
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
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phone === '' || phoneRegex.test(phone);
    };

    const isEmailValid = (email) => {
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
                <title>GST Filing & Compliance Services | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Professional GST filing and compliance services by Vastav Intellect and IP Solutions. Ensure timely and accurate GST returns for your business." />
                <meta name="keywords" content="GST filing, GST compliance, GST returns, GSTR-1, GSTR-3B, GST reconciliation, e-way bill, LUT filing, Vastav Intellect, IP Solutions, India" />
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

                {/* Main Registration Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">GST Filing & Compliance Services</h2>
                            <p className="text-lg text-gray-700">
                                At Vastav Intellect and IP Solutions, we provide comprehensive GST filing and compliance services to ensure your business meets all regulatory requirements while minimizing your tax liabilities.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert GST Consultants</h3>
                                        <p className="text-gray-600">Our team of GST professionals stays updated with the latest regulations to provide accurate filing services.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaPencilAlt className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Timely Filing</h3>
                                        <p className="text-gray-600">We ensure all your GST returns are filed before deadlines to avoid penalties.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileAlt className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Comprehensive Services</h3>
                                        <p className="text-gray-600">From monthly returns to annual reconciliation, we handle all your GST compliance needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Request GST Filing Services</h2>
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
                                    <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-1">Service Required</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Select GST Service</option>
                                        <option value="GSTR-1 (Monthly)">GSTR-1 (Monthly) - Outward supplies return</option>
                                        <option value="GSTR-3B">GSTR-3B - Summary return with tax payment</option>
                                        <option value="GSTR-9 & GSTR-9C">GSTR-9 & GSTR-9C - Annual return and reconciliation</option>
                                        <option value="GST Amendment">GST Amendment - Corrections to filed returns</option>
                                        <option value="GST Reconciliation">GST Reconciliation - Matching books with returns</option>
                                        <option value="E-Way Bill Generation">E-Way Bill Generation - For goods transportation</option>
                                        <option value="LUT Filing">LUT Filing - Letter of Undertaking for exports</option>
                                    </select>
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
                                        placeholder="Tell us about your GST filing requirements"
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
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our GST Filing & Compliance Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileAlt className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Regular GST Returns</h3>
                                <p className="text-gray-600 mb-4">Monthly and quarterly filing of GSTR-1, GSTR-3B, and other periodic returns.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Accurate data preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Timely filing before deadlines
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Tax liability calculation
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCalculator className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Annual GST Compliance</h3>
                                <p className="text-gray-600 mb-4">Annual return (GSTR-9) and reconciliation statement (GSTR-9C) filing services.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Annual return preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Reconciliation with books
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Certified audit when required
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaSyncAlt className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">GST Reconciliation</h3>
                                <p className="text-gray-600 mb-4">Matching your books with filed returns to identify and correct discrepancies.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        2A/2B reconciliation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Input tax credit verification
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Discrepancy resolution
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaEdit className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">GST Amendments</h3>
                                <p className="text-gray-600 mb-4">Correction of errors in previously filed GST returns.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Error identification
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Amendment filing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Interest calculation
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaTruck className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">E-Way Bill Services</h3>
                                <p className="text-gray-600 mb-4">Generation and management of e-way bills for goods transportation.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        E-way bill generation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Bulk generation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Cancellation and updates
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileSignature className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">LUT Filing</h3>
                                <p className="text-gray-600 mb-4">Letter of Undertaking filing for export without tax payment.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        LUT preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Online filing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Annual renewal
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our GST Filing Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                            <p className="text-gray-600">We collect all necessary invoices and documents from you.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Data Processing</h3>
                            <p className="text-gray-600">Our experts process and verify your transaction data.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Return Preparation</h3>
                            <p className="text-gray-600">We prepare accurate GST returns with tax calculations.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Filing & Payment</h3>
                            <p className="text-gray-600">We file returns and guide you through tax payment process.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for GST Compliance?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaFileAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                                <p className="text-gray-600">Our team includes GST professionals with deep knowledge of tax laws and regulations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                                <p className="text-gray-600">We ensure 100% accurate filings to prevent notices and penalties.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaBuilding className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Comprehensive</h3>
                                <p className="text-gray-600">From monthly returns to annual compliance, we handle all your GST needs.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaPencilAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Timely</h3>
                                <p className="text-gray-600">We file all returns well before deadlines to avoid last-minute issues.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaSyncAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Reconciliation</h3>
                                <p className="text-gray-600">We reconcile your books with filed returns to maintain consistency.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaTruck className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Support</h3>
                                <p className="text-gray-600">Dedicated support for all your GST queries and compliance needs.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Benefits of Professional GST Compliance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Avoid Penalties</h3>
                            <p className="text-gray-600">
                                Late filing or incorrect GST returns can attract heavy penalties and interest. Our experts ensure timely and accurate filing to keep your business compliant.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Maximize Input Tax Credit</h3>
                            <p className="text-gray-600">
                                We help you claim all eligible input tax credits by properly reconciling your purchases with vendor filings, maximizing your working capital.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Focus on Business</h3>
                            <p className="text-gray-600">
                                Outsource your GST compliance to us and focus on growing your business while we handle all the complex tax filings and paperwork.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Audit Ready</h3>
                            <p className="text-gray-600">
                                Our systematic approach ensures your records are always audit-ready, minimizing risk during GST department scrutiny or audits.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default GSTFilingCompliancePage;