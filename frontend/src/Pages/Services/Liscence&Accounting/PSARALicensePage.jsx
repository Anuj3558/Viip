import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaFileSignature, FaGavel, FaBuilding } from 'react-icons/fa'; // Import React Icons
import { GiPoliceBadge } from "react-icons/gi";

const PSARALicensePage = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        name: '',
        email: '',
        phone: '',
        state: '',
        employeeCount: '',
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
        const response = await axios.post(
          `${import.meta.env.VITE_APP_URL}/api/psara-license`,
          formData
        );
        console.log("Form submitted:", response.data);
        setFormData({
          companyName: "",
          name: "",
          email: "",
          phone: "",
          state: "",
          employeeCount: "",
          message: "",
        });
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      }
    };

    return (
        <>
            <Helmet>
                <title>PSARA License | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Get your PSARA License with Vastav Intellect and IP Solutions. Expert assistance for Private Security Agency Regulation Act compliance." />
                <meta name="keywords" content="PSARA license, security agency license, private security agency, security license, Vastav Intellect, legal services, India" />
                <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
            </Helmet>

            <div className="min-h-screen bg-gray-50">

                {/* Main Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left Information Column */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-800">PSARA License Services</h2>
                            <p className="text-lg text-gray-700">
                                Vastav Intellect and IP Solutions offers expert assistance in obtaining a PSARA license, ensuring your private security agency
                                complies with the Private Security Agency Regulation Act.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <GiPoliceBadge className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Compliance Expertise</h3>
                                        <p className="text-gray-600">Ensure your agency meets all regulatory requirements for a PSARA license.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Smooth Application Process</h3>
                                        <p className="text-gray-600">We guide you through the entire application process, minimizing delays and complications.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaGavel className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Legal Support</h3>
                                        <p className="text-gray-600">Get expert legal support to address any queries or concerns during the licensing process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Apply for Your PSARA License</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your company name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Contact Person Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your name"
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
                                    <label htmlFor="state" className="block text-gray-700 font-medium mb-1">State Applying For</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the state where you are applying"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="employeeCount" className="block text-gray-700 font-medium mb-1">Expected Number of Employees</label>
                                    <input
                                        type="number"
                                        id="employeeCount"
                                        name="employeeCount"
                                        value={formData.employeeCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter the expected number of employees"
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
                                        placeholder="Tell us about your security agency and any specific requirements"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Submit License Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our PSARA License Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileSignature className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Application Preparation</h3>
                                <p className="text-gray-600 mb-4">Preparing all necessary documents and information for your PSARA license application.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Document collection
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Application review
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaBuilding className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Liaison with Authorities</h3>
                                <p className="text-gray-600 mb-4">Communicating with the relevant authorities on your behalf to facilitate the licensing process.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Follow-up with department
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Addressing queries
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaGavel className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Compliance Assistance</h3>
                                <p className="text-gray-600 mb-4">Providing guidance and support to ensure your agency complies with all PSARA regulations.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Regulatory updates
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Compliance audits
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our PSARA License Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Document Collection</h3>
                            <p className="text-gray-600">Gathering all necessary documents and information from you.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Application Filing</h3>
                            <p className="text-gray-600">Preparing and submitting your PSARA license application.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Liaison</h3>
                            <p className="text-gray-600">Following up with the authorities and addressing any queries.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">License Issuance</h3>
                            <p className="text-gray-600">Assisting you in obtaining your PSARA license.</p>
                        </div>
                    </div>
                </section>

                {/* Footer Section (Add your footer here) */}
            
            </div>
        </>
    );
};

export default PSARALicensePage;
