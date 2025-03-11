import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaFileContract, FaHandshake } from 'react-icons/fa'; // Import React Icons

const MOUDraftingPage = () => {
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
                <title>MOU Drafting & Review Services | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Draft and review your Memorandum of Understanding (MOU) with Vastav Intellect and IP Solutions.  Expert legal drafting for clear, enforceable agreements." />
                <meta name="keywords" content="memorandum of understanding, MOU, drafting, review, legal agreement, contract, vastav intellect, ip solutions" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
            </Helmet>

            <div className="min-h-screen bg-gray-50">

                {/* Main Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">MOU Drafting & Review Services</h2>
                            <p className="text-lg text-gray-700">
                               Vastav Intellect and IP Solutions provides expert legal services for drafting and reviewing Memoranda of Understanding (MOUs),
                               ensuring clear, comprehensive, and legally sound agreements that protect your interests.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileContract className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Legal Drafting</h3>
                                        <p className="text-gray-600">Our experienced legal professionals draft MOUs that clearly define the terms and scope of your agreements.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Thorough Review & Analysis</h3>
                                        <p className="text-gray-600">We meticulously review existing MOUs, identifying potential risks and ensuring your interests are protected.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaHandshake className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Comprehensive Agreement Solutions</h3>
                                        <p className="text-gray-600">We provide tailored MOU solutions for various business scenarios, collaborations, and partnerships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Inquire About MOU Services</h2>
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
                                        placeholder="Tell us about your MOU requirements, including the parties involved and the purpose of the agreement."
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
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our MOU Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileContract className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">MOU Drafting</h3>
                                <p className="text-gray-600 mb-4">We create comprehensive MOUs tailored to your specific needs and objectives.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Defining Scope & Objectives
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Obligations & Responsibilities
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Confidentiality Clauses
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCheckCircle className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">MOU Review & Analysis</h3>
                                <p className="text-gray-600 mb-4">We meticulously review your existing MOUs, identifying potential risks and areas for improvement.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Risk Assessment
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Legal Compliance Check
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Clarity & Enforceability
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaHandshake className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">MOU Negotiation Support</h3>
                                <p className="text-gray-600 mb-4">We provide expert guidance and support throughout the MOU negotiation process.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Strategic Guidance
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Terms & Conditions Review
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Fairness & Equity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our MOU Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Consultation</h3>
                            <p className="text-gray-600">We discuss your objectives and the scope of the MOU.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Drafting/Review</h3>
                            <p className="text-gray-600">We draft or review the MOU, ensuring clarity and legal soundness.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Negotiation</h3>
                            <p className="text-gray-600">We provide support during the negotiation phase to reach a mutually agreeable outcome.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Finalization</h3>
                            <p className="text-gray-600">We finalize the MOU, ensuring it accurately reflects the agreed-upon terms.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Your MOU?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaFileContract className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Legal Expertise</h3>
                                <p className="text-gray-600">Our experienced legal team has extensive knowledge in contract law and MOU best practices.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
                                <p className="text-gray-600">We provide end-to-end support, from drafting to negotiation and finalization.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaHandshake className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Client-Focused Approach</h3>
                                <p className="text-gray-600">We prioritize your needs and objectives, ensuring the MOU aligns with your goals.</p>
                            </div>
                        </div>
                    </div>
                </section>

              
            </div>
        </>
    );
};

export default MOUDraftingPage;
