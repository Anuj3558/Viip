import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaEdit, FaBuilding } from 'react-icons/fa'; // Import React Icons

const CompanyNameChangePage = () => {
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
        <title>Company Name Change | Vastav Intellect and IP Solutions</title>
        <meta name="description" content="Change your Company Name with Vastav Intellect and IP Solutions. We handle the entire process, ensuring compliance." />
        <meta name="keywords" content="company name change, name change, company registration, MCA, ROC, business name, Vastav Intellect, IP Solutions, India" />
        <link rel="canonical" href="YOUR_CANONICAL_URL_HERE" /> {/* Replace with your actual URL */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">

        {/* Main Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Information Column */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-800">Company Name Change Services</h2>
              <p className="text-lg text-gray-700">
               Vastav Intellect and IP Solutions provides expert assistance for changing your company's name,
                ensuring a smooth, compliant, and hassle-free process with the Ministry of Corporate Affairs (MCA).
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaEdit className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Smooth Transition</h3>
                    <p className="text-gray-600">We ensure a seamless transition to your new company name.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Regulatory Compliance</h3>
                    <p className="text-gray-600">We handle all required filings and documentation to meet MCA regulations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaBuilding className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Brand Alignment</h3>
                    <p className="text-gray-600">A new name can better reflect your evolving brand and business strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Request a Company Name Change</h2>
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
                    placeholder="Tell us about your company and why you want to change the name"
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

        {/* Call to Action Section */}
      
      </div>
    </>
  );
};

export default CompanyNameChangePage;
