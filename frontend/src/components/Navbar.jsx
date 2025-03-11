import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#1E3A8A" }, // Blue-900
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-blue-900">Vastav Intellect</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            href="#Hero"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            Home
          </motion.a>
          <motion.a
            href="#Services"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            Services
          </motion.a>
          <motion.a
            href="#AboutUs"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            About Us
          </motion.a>
          <motion.a
            href="#IPRights"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            IP Rights
          </motion.a>
          <motion.a
            href="#WhyChooseUs"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            Why Us
          </motion.a>
          <motion.a
            href="#ExpertTeam"
            className="text-gray-700 hover:text-blue-900 transition-colors"
            whileHover="hover"
            variants={linkVariants}
          >
            Team
          </motion.a>
          <motion.a
            href="#ContactForm"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobileMenu"
            className="md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <motion.a
                href="#Hero"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                Home
              </motion.a>
              <motion.a
                href="#Services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                Services
              </motion.a>
              <motion.a
                href="#AboutUs"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                About Us
              </motion.a>
              <motion.a
                href="#IPRights"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                IP Rights
              </motion.a>
              <motion.a
                href="#WhyChooseUs"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                Why Us
              </motion.a>
              <motion.a
                href="#ExpertTeam"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                whileHover="hover"
                variants={linkVariants}
              >
                Team
              </motion.a>
              <motion.a
                href="#ContactForm"
                className="block px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
