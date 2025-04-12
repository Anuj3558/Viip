    import React, { useState, useEffect } from 'react';
    import { Helmet } from 'react-helmet';
    import { FaCheckCircle, FaPencilAlt, FaEdit, FaBuilding, FaFileAlt, FaCalculator, FaSyncAlt, FaMoneyBillWave, FaFileSignature } from 'react-icons/fa';
    import Notification from '../../../components/NOtification';

    const IncomeTaxFilingPage = () => {
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
                route: '/tax-services/income-tax-filing',
                type: 'income_tax_inquiry'
            };

            try {
                const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/income-tax/income-tax-filing`, {
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
                    <title>Income Tax Filing (As per IT norms) | Vastav Intellect and IP Solutions</title>
                    <meta name="description" content="Professional Income Tax filing services by Vastav Intellect and IP Solutions. Ensure timely and accurate income tax returns for individuals and businesses." />
                    <meta name="keywords" content="Income tax filing, ITR filing, Tax returns, ITR-1, ITR-2, ITR-3, ITR-4, Income tax registration, Vastav Intellect, IP Solutions, India" />
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
                                <h2 className="text-3xl font-bold text-blue-800">Income Tax Filing (As per IT norms)</h2>
                                <p className="text-lg text-gray-700">
                                    At Vastav Intellect and IP Solutions, we provide comprehensive Income Tax filing services to ensure your returns are filed accurately and on time, maximizing your tax benefits while keeping you compliant with all IT norms.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                            <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Expert Tax Consultants</h3>
                                            <p className="text-gray-600">Our team of tax professionals stays updated with the latest tax laws to provide accurate filing services.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                            <FaPencilAlt className="h-6 w-6 text-blue-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Timely Filing</h3>
                                            <p className="text-gray-600">We ensure all your income tax returns are filed before deadlines to avoid penalties.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                            <FaFileAlt className="h-6 w-6 text-blue-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Comprehensive Services</h3>
                                            <p className="text-gray-600">From individual returns to business tax filings, we handle all your income tax requirements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form Column */}
                            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Income Tax Filing Services</h2>
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
                                            <option value="">Select Income Tax Service</option>
                                            <option value="ITR-1 (Sahaj)">ITR-1 (Sahaj)</option>
                                            <option value="ITR-2">ITR-2</option>
                                            <option value="ITR-3">ITR-3</option>
                                            <option value="ITR-4 (Sugam)">ITR-4 (Sugam)</option>
                                            <option value="ITR for LLP">ITR for LLP</option>
                                            <option value="ITR for Pvt Ltd & Public Ltd Co.">ITR for Pvt Ltd & Public Ltd Co.</option>
                                            <option value="Income Tax Registration">Income Tax Registration</option>
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
                                            placeholder="Tell us about your income tax filing requirements"
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
                            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Income Tax Filing Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaFileAlt className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Individual Tax Returns</h3>
                                    <p className="text-gray-600 mb-4">Filing of ITR-1 (Sahaj), ITR-2, and ITR-4 (Sugam) for individuals and professionals.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Salaried individuals
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Freelancers & consultants
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Small business owners
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaCalculator className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Business Tax Returns</h3>
                                    <p className="text-gray-600 mb-4">Filing of ITR-3, ITR for LLP, and ITR for Private & Public Limited Companies.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Business income reporting
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Deduction maximization
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Tax liability calculation
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaSyncAlt className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Income Tax Registration</h3>
                                    <p className="text-gray-600 mb-4">Registration of PAN and TAN for individuals and businesses.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            PAN application
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            TAN registration
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Document preparation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaEdit className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Tax Planning</h3>
                                    <p className="text-gray-600 mb-4">Strategic planning to minimize tax liability within legal framework.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Investment planning
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Deduction maximization
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Tax-saving strategies
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaMoneyBillWave className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Tax Notices & Appeals</h3>
                                    <p className="text-gray-600 mb-4">Assistance with handling Income Tax notices and filing appeals.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Notice interpretation
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Response preparation
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Appeal filing
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        <FaFileSignature className="h-8 w-8 text-blue-800" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Tax Consultation</h3>
                                    <p className="text-gray-600 mb-4">Expert advice on income tax matters and compliance requirements.</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            One-on-one consultation
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Compliance guidance
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                            Ongoing support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="container mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Income Tax Filing Process</h2>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                                <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                                <p className="text-gray-600">We collect all necessary financial documents and information from you.</p>
                            </div>
                            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                                <h3 className="text-xl font-bold mb-2">Analysis</h3>
                                <p className="text-gray-600">Our experts analyze your financial data and identify tax-saving opportunities.</p>
                            </div>
                            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                                <h3 className="text-xl font-bold mb-2">Return Preparation</h3>
                                <p className="text-gray-600">We prepare accurate tax returns with optimized deductions and credits.</p>
                            </div>
                            <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                                <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                                <h3 className="text-xl font-bold mb-2">Filing & Payment</h3>
                                <p className="text-gray-600">We file returns electronically and guide you through the tax payment process.</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="bg-gray-100 py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Income Tax Filing?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaFileAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Expertise</h3>
                                    <p className="text-gray-600">Our team includes certified tax professionals with in-depth knowledge of tax laws.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                                    <p className="text-gray-600">We ensure 100% accurate filings to prevent notices and penalties.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaBuilding className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Comprehensive</h3>
                                    <p className="text-gray-600">From individual returns to business filings, we handle all income tax needs.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaPencilAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Timely</h3>
                                    <p className="text-gray-600">We file all returns well before deadlines to avoid last-minute rush.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaSyncAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Optimization</h3>
                                    <p className="text-gray-600">We maximize your tax benefits through strategic planning and deductions.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                    <FaMoneyBillWave className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Support</h3>
                                    <p className="text-gray-600">Dedicated support for all your income tax queries and compliance needs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="container mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Benefits of Professional Income Tax Filing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Avoid Penalties</h3>
                                <p className="text-gray-600">
                                    Late filing or incorrect tax returns can attract hefty penalties and interest. Our experts ensure timely and accurate filing to keep you compliant.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Maximize Refunds</h3>
                                <p className="text-gray-600">
                                    We help you claim all eligible deductions and credits to maximize your tax refunds or minimize your tax liability.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Peace of Mind</h3>
                                <p className="text-gray-600">
                                    Outsource your tax filing worries to us and gain peace of mind knowing professionals are handling your tax matters.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Audit Support</h3>
                                <p className="text-gray-600">
                                    Our systematic approach ensures your records are always audit-ready, with full support in case of income tax notices or scrutiny.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    };

    export default IncomeTaxFilingPage;