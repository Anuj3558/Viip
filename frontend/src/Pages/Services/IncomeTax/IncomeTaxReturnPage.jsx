import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaFileInvoiceDollar, FaCalculator } from 'react-icons/fa';
import Notification from '../../../components/NOtification';
const IncomeTaxReturnPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pan: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/accounting/itr-filing`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                showSuccessNotification();
                setFormData({ name: '', email: '', phone: '', pan: '', message: '' });
            } else {
                showErrorNotification('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showErrorNotification('An error occurred while submitting the form.');
        }
    };

    // Notification handling functions
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

    return (
        <>
            <Helmet>
                <title>Income Tax Return Filing | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="File your Income Tax Return with Vastav Intellect and IP Solutions. Get expert assistance for accurate and timely ITR filing." />
                <meta name="keywords" content="income tax return, ITR filing, tax filing, income tax, Vastav Intellect, financial services, India" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" />
            </Helmet>
 {/* Display Notification */}
           {notification && (
                    <Notification
                        type={notification.type}
                        message={notification.message}
                        description={notification.description}
                        onClose={closeNotification}
                    />
                )}
        
            <div className="min-h-screen bg-gray-50">
                
                {/* Main Registration Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">Income Tax Return Filing Services</h2>
                            <p className="text-lg text-gray-700">
                                Vastav Intellect and IP Solutions offers professional income tax return filing services to help you file your ITR accurately, on time, and in compliance with all applicable tax laws.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileInvoiceDollar className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Accurate Filing</h3>
                                        <p className="text-gray-600">Ensure your ITR is filed correctly and avoid any potential issues with the tax authorities.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Timely Submission</h3>
                                        <p className="text-gray-600">We ensure your ITR is filed before the deadline to avoid penalties.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCalculator className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Tax Optimization</h3>
                                        <p className="text-gray-600">We help you identify all eligible deductions and exemptions to minimize your tax liability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">File Your Income Tax Return with Us</h2>
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
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
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
                                    <label htmlFor="pan" className="block text-gray-700 font-medium mb-1">PAN Number</label>
                                    <input
                                        type="text"
                                        id="pan"
                                        name="pan"
                                        value={formData.pan}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your PAN number"
                                        required
                                    />
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
                                        placeholder="Tell us about your income and any specific requirements"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Submit ITR Filing Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Income Tax Return Filing Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCalculator className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Income Assessment & Planning</h3>
                                <p className="text-gray-600 mb-4">Comprehensive assessment of your income and tax planning strategies.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Income analysis
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Tax saving strategies
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileInvoiceDollar className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">ITR Filing & Submission</h3>
                                <p className="text-gray-600 mb-4">Preparing and filing your income tax return accurately and on time.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Form 16 analysis
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Online filing
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                </div>
                                <h3 className="text-xl font-bold mb-2">Refund Processing</h3>
                                <p className="text-gray-600 mb-4">Assistance with tracking and expediting your income tax refund.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Refund status tracking
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Communication with authorities
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Income Tax Return Filing Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Information Gathering</h3>
                            <p className="text-gray-600">We collect all necessary financial documents and information from you.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Income Calculation</h3>
                            <p className="text-gray-600">We calculate your taxable income and identify eligible deductions.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">ITR Filing</h3>
                            <p className="text-gray-600">We file your income tax return online.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Acknowledgement</h3>
                            <p className="text-gray-600">You receive an acknowledgement of successful ITR filing.</p>
                        </div>
                    </div>
                </section>

           
            </div>
        </>
    );
};

export default IncomeTaxReturnPage;
