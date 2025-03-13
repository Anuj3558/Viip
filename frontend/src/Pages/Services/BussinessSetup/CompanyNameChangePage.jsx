import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaPencilAlt,FaEdit,FaBuilding } from 'react-icons/fa'; // Import React Icons
import Notification from '../../../components/NOtification'; // Import the Notification component

const CompanyNameChangePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        newCompanyName: '',
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
            route: '/bussiness-setup/company-name-change',
            type: 'company_name_change_inquiry'
        };

        try {
            // Send data to backend API
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/bussiness-setup/company-name-change`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setFormData({ name: '', email: '', phone: '', companyName: '', newCompanyName: '', message: '' });
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
                <title>Company Name Change | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Change your company name with Vastav Intellect and IP Solutions. Ensure a smooth and compliant process." />
                <meta name="keywords" content="Company Name Change, business name change, legal name change, Vastav Intellect, IP Solutions, India" />
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
                            <h2 className="text-3xl font-bold text-blue-800">Company Name Change Services</h2>
                            <p className="text-lg text-gray-700">
                                At Vastav Intellect and IP Solutions, we offer seamless services for changing your company name,
                                ensuring a legally compliant and hassle-free process.
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
                                        <FaPencilAlt className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Smooth and Compliant Process</h3>
                                        <p className="text-gray-600">We handle all the paperwork and legal requirements for a smooth transition.</p>
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
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Company Name Change Services</h2>
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
                                    <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">Current Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your current company name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newCompanyName" className="block text-gray-700 font-medium mb-1">Proposed New Company Name</label>
                                    <input
                                        type="text"
                                        id="newCompanyName"
                                        name="newCompanyName"
                                        value={formData.newCompanyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your proposed new company name"
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
                                        placeholder="Tell us about your company name change requirements"
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
                <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Company Name Change Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaEdit className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Name Availability Check</h3>
                <p className="text-gray-600 mb-4">We verify the availability of your desired new company name with the MCA.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Name search and verification
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Trademark conflict analysis
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaCheckCircle className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">Board Resolution & Filing</h3>
                <p className="text-gray-600 mb-4">We prepare and file the necessary board resolutions and forms with the ROC.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Drafting board resolutions
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Filing Form INC-24 with MCA
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaBuilding className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">New Certificate of Incorporation</h3>
                <p className="text-gray-600 mb-4">We assist in obtaining the new Certificate of Incorporation with the updated company name.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Liaison with ROC
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    Obtaining revised certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Company Name Change Process</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Name Search</h3>
              <p className="text-gray-600">We conduct a name availability search with the MCA.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Board Resolution</h3>
              <p className="text-gray-600">We prepare the necessary board resolution for the name change.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">MCA Filing</h3>
              <p className="text-gray-600">We file the required forms with the Ministry of Corporate Affairs.</p>
            </div>
            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">New Certificate</h3>
              <p className="text-gray-600">We assist in obtaining the new Certificate of Incorporation.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Name Change?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaEdit className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Efficient Process</h3>
                <p className="text-gray-600">We streamline the Company Name Change process for quick results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance Expertise</h3>
                <p className="text-gray-600">We ensure full compliance with MCA regulations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <FaBuilding className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
                <p className="text-gray-600">We handle all aspects of the name change process from start to finish.</p>
              </div>
            </div>
          </div>
        </section>
            </div>
        </>
    );
};

export default CompanyNameChangePage;
