import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaBalanceScale, FaFileSignature, FaRuler } from 'react-icons/fa'; // Import React Icons
import { GiScales } from "react-icons/gi";

const LegalMetrologyRegistrationPage = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        productType: '',
        state: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - would typically send to backend API
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ businessName: '', ownerName: '', email: '', phone: '', productType: '', state: '', message: '' });
        alert('Form submitted successfully!');
    };

    return (
        <>
            <Helmet>
                <title>Legal Metrology Registration | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Get your Legal Metrology Registration with Vastav Intellect and IP Solutions. Ensure compliance with weights and measures regulations." />
                <meta name="keywords" content="legal metrology, weights and measures, registration, compliance, Vastav Intellect, legal services, India" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
            </Helmet>

            <div className="min-h-screen bg-gray-50">

                {/* Main Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">Legal Metrology Registration Services</h2>
                            <p className="text-lg text-gray-700">
                                Vastav Intellect and IP Solutions offers expert assistance in obtaining Legal Metrology registration, ensuring your
                                business complies with the regulations governing weights and measures in India.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <GiScales className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Regulatory Compliance</h3>
                                        <p className="text-gray-600">Ensure your business complies with all Legal Metrology regulations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Simplified Process</h3>
                                        <p className="text-gray-600">We simplify the Legal Metrology registration process, making it easy and efficient.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileSignature className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Guidance</h3>
                                        <p className="text-gray-600">Get professional advice and support to navigate Legal Metrology regulations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Register for Legal Metrology with Us</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="businessName" className="block text-gray-700 font-medium mb-1">Business Name</label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your business name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ownerName" className="block text-gray-700 font-medium mb-1">Owner Name</label>
                                    <input
                                        type="text"
                                        id="ownerName"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the owner's name"
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
                                    <label htmlFor="productType" className="block text-gray-700 font-medium mb-1">Type of Product/Service</label>
                                    <input
                                        type="text"
                                        id="productType"
                                        name="productType"
                                        value={formData.productType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="e.g., Weighing scales, Measuring tapes, Packaged goods"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-gray-700 font-medium mb-1">State for Registration</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the state for Legal Metrology registration"
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
                                        placeholder="Tell us about your business and any specific requirements"
                                        required
                                    ></textarea>
                                </div>
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

                {/* Services Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Legal Metrology Registration Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileSignature className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Documentation Assistance</h3>
                                <p className="text-gray-600 mb-4">Helping you gather and prepare all necessary documents for Legal Metrology registration.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Application form filling
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Document verification
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaBalanceScale className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Compliance Guidance</h3>
                                <p className="text-gray-600 mb-4">Providing guidance on compliance with Legal Metrology regulations and standards.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Labeling requirements
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Inspection preparation
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaRuler className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Application Filing & Follow-up</h3>
                                <p className="text-gray-600 mb-4">Filing your Legal Metrology registration application and following up with the authorities.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Online submission
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Status tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Legal Metrology Registration Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Information Gathering</h3>
                            <p className="text-gray-600">We collect all the necessary information about your business and products.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Document Preparation</h3>
                            <p className="text-gray-600">We assist you in preparing all the required documents for registration.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Application Filing</h3>
                            <p className="text-gray-600">We file your Legal Metrology registration application online.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Registration Certificate</h3>
                            <p className="text-gray-600">You receive your Legal Metrology registration certificate.</p>
                        </div>
                    </div>
                </section>

                {/* Footer Section (Add your footer here) */}
        
            </div>
        </>
    );
};

export default LegalMetrologyRegistrationPage;
