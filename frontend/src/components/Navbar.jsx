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
    hover: { scale: 1.05 },
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              Vastav Intellect
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#Home"
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
              href="#WhyUs"
              className="text-gray-700 hover:text-blue-900 transition-colors"
              whileHover="hover"
              variants={linkVariants}
            >
              Why Us
            </motion.a>
            <motion.a
              href="#Team"
              className="text-gray-700 hover:text-blue-900 transition-colors"
              whileHover="hover"
              variants={linkVariants}
            >
              Team
            </motion.a>
            <motion.a
              href="#Contact"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-blue-900 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="flex flex-col py-2 space-y-1">
                <motion.a
                  href="#Home"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#Services"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#AboutUs"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#IPRights"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  IP Rights
                </motion.a>
                <motion.a
                  href="#WhyUs"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us
                </motion.a>
                <motion.a
                  href="#Team"
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 transition-colors"
                  whileHover="hover"
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </motion.a>
                <motion.a
                  href="#Contact"
                  className="block mx-4 my-3 py-3 bg-blue-900 text-white text-center rounded hover:bg-blue-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
