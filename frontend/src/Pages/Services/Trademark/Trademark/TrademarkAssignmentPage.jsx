import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaHandshake, FaFileSignature } from 'react-icons/fa'; // Import React Icons
import Notification from '../../../../components/NOtification'; // Import Notification component

const TrademarkAssignmentPage = () => {
    const [formData, setFormData] = useState({
        trademarkName: '',
        assignorName: '',
        assigneeName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [notification, setNotification] = useState(null);

    const showSuccessNotification = () => {
        setNotification({
            type: 'success',
            message: 'Success',
            description: 'Trademark assignment submitted successfully!',
        });
    };

    const showErrorNotification = (message) => {
        setNotification({
            type: 'error',
            message: 'Error',
            description: message,
        });
    };

    const closeNotification = () => {
        setNotification(null);
    };

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
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/trademark-ip/trademark-assignment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                showSuccessNotification();
                setFormData({
                    trademarkName: '',
                    assignorName: '',
                    assigneeName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                showErrorNotification('Failed to submit the assignment.');
            }
        } catch (error) {
            console.error('Error submitting assignment:', error);
            showErrorNotification('An error occurred while submitting the assignment.');
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
                <title>Trademark Assignment | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Assign your Trademark with Vastav Intellect and IP Solutions. Transfer ownership of your brand assets smoothly and legally." />
                <meta name="keywords" content="trademark assignment, trademark transfer, brand ownership, assign trademark, Vastav Intellect, IP Solutions, India" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                {/* Main Assignment Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">Trademark Assignment Services</h2>
                            <p className="text-lg text-gray-700">
                                Vastav Intellect and IP Solutions offers comprehensive trademark assignment services to help you transfer ownership of your trademark efficiently and in compliance with legal requirements.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaHandshake className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Seamless Transfer</h3>
                                        <p className="text-gray-600">Ensure a smooth and legally sound transfer of your trademark rights.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Due Diligence</h3>
                                        <p className="text-gray-600">We handle all necessary legal checks and documentation for a valid assignment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileSignature className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Filing</h3>
                                        <p className="text-gray-600">We manage the entire assignment recording process with the Trademark Registry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Initiate Your Trademark Assignment</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="trademarkName" className="block text-gray-700 font-medium mb-1">Trademark Name</label>
                                    <input
                                        type="text"
                                        id="trademarkName"
                                        name="trademarkName"
                                        value={formData.trademarkName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the Trademark Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="assignorName" className="block text-gray-700 font-medium mb-1">Assignor Name (Current Owner)</label>
                                    <input
                                        type="text"
                                        id="assignorName"
                                        name="assignorName"
                                        value={formData.assignorName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the name of the current trademark owner"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="assigneeName" className="block text-gray-700 font-medium mb-1">Assignee Name (New Owner)</label>
                                    <input
                                        type="text"
                                        id="assigneeName"
                                        name="assigneeName"
                                        value={formData.assigneeName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the name of the new trademark owner"
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
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us about the trademark assignment and any specific requirements"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Submit Assignment Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Trademark Assignment Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaHandshake className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Assignment Agreement Drafting</h3>
                                <p className="text-gray-600 mb-4">Preparing a legally sound agreement that clearly outlines the terms of the trademark transfer.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Customized agreement
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Clear terms and conditions
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileSignature className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Assignment Recording</h3>
                                <p className="text-gray-600 mb-4">Filing the assignment with the Indian Trademark Registry to officially record the change in ownership.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Documentation & filing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Official fees payment
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCheckCircle className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Due Diligence & Legal Checks</h3>
                                <p className="text-gray-600 mb-4">Ensuring the assignment is legally sound and that all necessary checks are performed.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Verification of ownership
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Compliance checks
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Trademark Assignment Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                            <p className="text-gray-600">We discuss the assignment requirements and gather necessary information.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Agreement Drafting</h3>
                            <p className="text-gray-600">We prepare the assignment agreement.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Filing & Recording</h3>
                            <p className="text-gray-600">We file the assignment with the Trademark Registry.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Completion</h3>
                            <p className="text-gray-600">The assignment is officially recorded, and ownership is transferred.</p>
                        </div>
                    </div>
                </section>

                {/* Footer Section (Add your footer here) */}
            +
            </div>
        </>
    );
};

export default TrademarkAssignmentPage;
