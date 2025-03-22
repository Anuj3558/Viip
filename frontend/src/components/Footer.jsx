import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and social */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Vastav Intellect IP Solutions</h2>
          <p className="text-md italic text-gray-600 mb-5">From Concepts to Trademarks, We Got Your IP Covered.</p>
          <div className="flex space-x-5">
            <a href="https://www.facebook.com/vastavintellect" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.linkedin.com/company/vastavintellect/?viewAsMember=true" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/vastavintellectipsolutions/" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-200 my-6"></div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">About Us</h3>
            <p className="text-sm leading-relaxed">
              Vastav Intellect IP Solutions provides comprehensive intellectual property services to protect and manage your valuable business assets. Our team of experts is dedicated to securing your innovations and brand identity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><a href="/" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> Home
              </a></li>
              <li><a href="/about" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> About Us
              </a></li>
              <li><a href="/services" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> Services
              </a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> Contact
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Our Services</h3>
            <ul className="list-none space-y-2">
              <li><a href="/llpannual-compliance" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> LLP Annual Compliance
              </a></li>
              <li><a href="/trademark-registration" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> Trademark Registration
              </a></li>
              <li><a href="/talktoexpert" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> IP Consulting
              </a></li>
              <li><a href="/income-tax-return" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2">→</span> Income Tax Return Filing
              </a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                <p className="text-sm">A-61-C Shivaji Enclave Rajori Garden, New Delhi-27</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3" />
                <p className="text-sm">+91-9891679693</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <p className="text-sm">helpdesk@vastavintellect.com</p>
              </div>
              <div className="pt-2">
                <p className="text-sm font-medium">GSTIN: 07ABVFA1465B1ZI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 pt-6 border-t border-blue-200">
        <p className="text-sm">© {new Date().getFullYear()} Vastav Intellect IP Solutions. All rights reserved.</p>
        <p className="text-xs mt-1 text-gray-500">Designed with care to protect what matters most - your intellectual property.</p>
      </div>
    </footer>
  );
};

export default Footer;