import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaClock, FaLightbulb } from 'react-icons/fa'; // Import React Icons

const OnePersonCompanyRegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Form submitted successfully!');
    };

    return (
        <>
            <Helmet>
                <title>One Person Company (OPC) Registration | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Register your One Person Company (OPC) with Vastav Intellect and IP Solutions.  Ideal for solo entrepreneurs, we offer quick, expert, and compliant services." />
                <meta name="keywords" content="one person company, OPC, registration, company registration, solo entrepreneur, vastav intellect, ip solutions, india" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
            </Helmet>

            <div className="min-h-screen bg-gray-50">

                {/* Main Registration Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">One Person Company (OPC) Registration Services</h2>
                            <p className="text-lg text-gray-700">
                               Vastav Intellect and IP Solutions specializes in One Person Company (OPC) registration, empowering solo entrepreneurs
                               with the benefits of a private limited company but with simplified compliance.  Start your entrepreneurial journey with confidence.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Guidance</h3>
                                        <p className="text-gray-600">We guide you through every step of OPC registration, ensuring a smooth and compliant process.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaClock className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Time-Efficient Process</h3>
                                        <p className="text-gray-600">We streamline the OPC registration process, saving you valuable time and resources.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaLightbulb className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Simplified Compliance</h3>
                                        <p className="text-gray-600">OPCs have fewer compliance requirements than other company types, and we help you stay on top of them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Register Your One Person Company (OPC)</h2>
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
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tell us about your business idea and requirements for your OPC"
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
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our One Person Company (OPC) Registration Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCheckCircle className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">OPC Formation & Registration</h3>
                                <p className="text-gray-600 mb-4">We handle all aspects of OPC formation, from name approval to certificate of incorporation.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Name reservation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        MOA & AOA drafting
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Certificate of Incorporation
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaClock className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Nominee Appointment</h3>
                                <p className="text-gray-600 mb-4">We assist in the appointment of a nominee, a mandatory requirement for OPC registration.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Nominee identification
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Consent documentation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Nominee details filing
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaLightbulb className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Post-Registration Support</h3>
                                <p className="text-gray-600 mb-4">We provide ongoing support to ensure your OPC remains compliant and successful.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        PAN & TAN application
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        GST registration assistance
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Compliance guidance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Simplified OPC Registration Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Consultation</h3>
                            <p className="text-gray-600">We understand your business vision and guide you on the OPC structure.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Documentation</h3>
                            <p className="text-gray-600">We assist you in preparing all required documents, including nominee consent.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Registration</h3>
                            <p className="text-gray-600">We handle the entire registration process, ensuring compliance with MCA guidelines.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Certification</h3>
                            <p className="text-gray-600">We provide you with the Certificate of Incorporation and post-registration support.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for OPC Registration?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                                <p className="text-gray-600">Our experienced team provides expert guidance throughout the OPC registration process.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaClock className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Quick & Efficient</h3>
                                <p className="text-gray-600">We ensure a fast and efficient OPC registration, minimizing your time investment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaLightbulb className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Compliance Focus</h3>
                                <p className="text-gray-600">We ensure your OPC meets all legal and regulatory requirements, providing peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                
            </div>
        </>
    );
};

export default OnePersonCompanyRegistrationPage;
