import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaPencilAlt, FaEdit, FaBuilding, FaFileAlt, FaCalculator, FaSyncAlt, FaBook, FaMoneyBillWave, FaChartBar } from 'react-icons/fa';
import Notification from '../../../components/NOtification';

const AccountsMaintenancePage = () => {
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
            route: '/api/financial-services/accounts-maintenance',
            type: 'accounts_maintenance_inquiry'
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/financial-services/accounts-maintenance`, {
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
                <title>Accounts Maintenance Services | Vastav Intellect and IP Solutions</title>
                <meta name="description" content="Professional Accounts Maintenance services by Vastav Intellect and IP Solutions. Ensure accurate bookkeeping and financial records for your business." />
                <meta name="keywords" content="Accounts maintenance, bookkeeping, ledger maintenance, bank reconciliation, sales invoice, purchase invoice, journal entries, balance sheet, profit loss account, Vastav Intellect, IP Solutions, India" />
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
                            <h2 className="text-3xl font-bold text-blue-800">Accounts Maintenance Services</h2>
                            <p className="text-lg text-gray-700">
                                At Vastav Intellect and IP Solutions, we provide comprehensive accounts maintenance services to ensure your financial records are accurate, up-to-date, and compliant with accounting standards.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaCheckCircle className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Expert Accountants</h3>
                                        <p className="text-gray-600">Our team of qualified accountants ensures your books are maintained with precision and accuracy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaPencilAlt className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Timely Processing</h3>
                                        <p className="text-gray-600">We ensure all your financial transactions are recorded promptly and accurately.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaFileAlt className="h-6 w-6 text-blue-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Comprehensive Services</h3>
                                        <p className="text-gray-600">From basic bookkeeping to advanced financial statement preparation, we handle all your accounting needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Accounts Maintenance Services</h2>
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
                                        <option value="">Select Accounts Service</option>
                                        <option value="Sales Invoice Entry">Sales Invoice Entry</option>
                                        <option value="Purchase Invoice Entry">Purchase Invoice Entry</option>
                                        <option value="Bank Reconciliation">Bank Reconciliation</option>
                                        <option value="Journal Entries">Journal Entries</option>
                                        <option value="Petty Cash Book">Petty Cash Book</option>
                                        <option value="Ledger Maintenance">Ledger Maintenance</option>
                                        <option value="TDS Payable & Receivable">TDS Payable & Receivable</option>
                                        <option value="Trial Balance & Finalization">Trial Balance & Finalization</option>
                                        <option value="Balance Sheet Preparation">Balance Sheet Preparation</option>
                                        <option value="Profit & Loss Account">Profit & Loss Account</option>
                                        <option value="Cost Sheet Preparation">Cost Sheet Preparation</option>
                                        <option value="Inventory Management">Inventory Management</option>
                                        <option value="Branch Transfer & Inter-Unit Billing">Branch Transfer & Inter-Unit Billing</option>
                                        <option value="Audit Data Preparation">Audit Data Preparation</option>
                                        <option value="ROC Filing Support">ROC Filing Support</option>
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
                                        placeholder="Tell us about your accounts maintenance requirements"
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
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Accounts Maintenance Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaFileAlt className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Invoice Processing</h3>
                                <p className="text-gray-600 mb-4">Accurate processing of sales and purchase invoices to maintain your books.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Sales invoice entry
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Purchase invoice processing
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Tax categorization
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaCalculator className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Ledger & Books</h3>
                                <p className="text-gray-600 mb-4">Maintenance of all ledgers, journals, and cash books for complete financial tracking.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Ledger maintenance
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Journal entries
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Petty cash management
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaSyncAlt className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Bank Reconciliation</h3>
                                <p className="text-gray-600 mb-4">Regular reconciliation of bank statements with your books of accounts.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Statement matching
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Discrepancy identification
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Error rectification
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaEdit className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">TDS Management</h3>
                                <p className="text-gray-600 mb-4">Tracking and management of TDS payable and receivable transactions.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        TDS calculation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Deduction tracking
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Certificate management
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaChartBar className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Financial Statements</h3>
                                <p className="text-gray-600 mb-4">Preparation of trial balance, balance sheet, and profit & loss statements.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Trial balance finalization
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Balance sheet preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        P&L account preparation
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FaBook className="h-8 w-8 text-blue-800" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Inventory & Cost Management</h3>
                                <p className="text-gray-600 mb-4">Tracking of inventory and preparation of cost sheets for your business.</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Inventory tracking
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Cost sheet preparation
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                                        Cost analysis
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Accounts Maintenance Process</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Collection</h3>
                            <p className="text-gray-600">We collect all necessary documents and transaction details from you.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Processing</h3>
                            <p className="text-gray-600">Our accountants process and categorize all transactions systematically.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Reconciliation</h3>
                            <p className="text-gray-600">We reconcile records with bank statements and other source documents.</p>
                        </div>
                        <div className="md:w-1/4 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Reporting</h3>
                            <p className="text-gray-600">We prepare and deliver accurate financial statements and reports.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Why Choose Vastav for Accounts Maintenance?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaFileAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                                <p className="text-gray-600">Our team includes qualified accountants with extensive experience in financial record keeping.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaCheckCircle className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                                <p className="text-gray-600">We ensure 100% accurate account maintenance to prevent financial discrepancies.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaBuilding className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Comprehensive</h3>
                                <p className="text-gray-600">From basic bookkeeping to advanced financial reporting, we handle all accounting needs.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaPencilAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Timely</h3>
                                <p className="text-gray-600">We maintain your books in real-time to provide up-to-date financial information.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaSyncAlt className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Reliable</h3>
                                <p className="text-gray-600">Our systematic processes ensure error-free and reliable financial records.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                                <FaMoneyBillWave className="mx-auto h-12 w-12 text-blue-800 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                                <p className="text-gray-600">Outsourcing your accounts maintenance to us saves costs on in-house accounting staff.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Benefits of Professional Accounts Maintenance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Financial Clarity</h3>
                            <p className="text-gray-600">
                                Well-maintained accounts provide clear insights into your business's financial health, helping in better decision-making.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Compliance Assurance</h3>
                            <p className="text-gray-600">
                                Our accurate bookkeeping ensures compliance with accounting standards and regulatory requirements.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Time Savings</h3>
                            <p className="text-gray-600">
                                Outsource your accounting tasks to us and focus on your core business activities for better productivity.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Audit Readiness</h3>
                            <p className="text-gray-600">
                                Our systematic approach ensures your records are always audit-ready, simplifying statutory audit processes.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AccountsMaintenancePage;