import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Vastav Intellect IP Solutions</h3>
          <p className="text-sm">From Concepts to Trademarks, We Got Your IP Covered.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Services</h3>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-blue-500">Patent Filing</a></li>
            <li><a href="#" className="hover:text-blue-500">Trademark Registration</a></li>
            <li><a href="#" className="hover:text-blue-500">IP Consulting</a></li>
            <li><a href="#" className="hover:text-blue-500">Legal Support</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <p className="text-sm">123 Business Avenue</p>
          <p className="text-sm">Mumbai, Maharashtra</p>
          <p className="text-sm">Phone: +91 123-456-7890</p>
          <p className="text-sm">Email: info@vastavip.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm">© 2024 Vastav Intellect IP Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
