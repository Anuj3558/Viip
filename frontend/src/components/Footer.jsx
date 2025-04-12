import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and social */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Vastav Intellect IP Solutions</h2>
          <p className="text-md italic text-gray-600 mb-5">From Concepts to Trademarks, We Got Your IP Covered.</p>
          <div className="flex space-x-5">
            <a href="https://www.facebook.com/vastavintellect" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.linkedin.com/company/vastavintellect/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/vastavintellectipsolutions/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.youtube.com/@VastavIntellect" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaYoutube size={22} />
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
              VIIPS empowers entrepreneurs with clarity, compliance, and confidence.
              We simplify growth through strategic legal, business, and innovation support.
              Trusted by startups, enterprises, and institutions across sectors.
              Partner with us to turn your vision into lasting impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><Link to="/" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> Home
              </Link></li>
              <li><Link to="/about" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> About Us
              </Link></li>
              <li><Link to="/services" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> Services
              </Link></li>
              <li><Link to="/contact" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> Contact
              </Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> Privacy Policy
              </Link></li>
              <li><Link to="/tnc" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300 flex items-center">
                <span className="mr-2"></span> Terms & Conditions
              </Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Our Services</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/services" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Business Setup
                </Link>
              </li>
              <li>
                <Link to="/services#Business Setup" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  International Business
                </Link>
              </li>
              <li>
                <Link to="/services#license" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Licenses & Registrations
                </Link>
              </li>
              <li>
                <Link to="/services#Tradem" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Trademarks
                </Link>
              </li>
              <li>
                <Link to="/services#Copyrigh" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Copyright
                </Link>
              </li>
              <li>
                <Link to="/services#Paten" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Patent
                </Link>
              </li>
              <li>
                <Link to="/services#Design Registrat" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Design Registration
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* More Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">More Services</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/services#NGO" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  NGO Services
                </Link>
              </li>
              <li>
                <Link to="/services#Proper" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Property Services
                </Link>
              </li>
              <li>
                <Link to="/services#legal do" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Free Legal Documents
                </Link>
              </li>
              <li>
              
              </li>
              <li>
                <Link to="/services#Family" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Personal & Family
                </Link>
              </li>
            
              <li>
                <Link to="/services#Notic" className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-300">
                  Legal Notices
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 border-b border-blue-200 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm">Rajouri Garden, New Delhi - 110027</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3 flex-shrink-0" />
                <p className="text-sm">+91-8448077010, 9667576014</p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  info@vastavintellect.com<br />
                  helpdesk@vastavintellect.com<br />
                  support@vastavintellect.com<br />
                  vastav@vastavintellect.com
                </p>
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