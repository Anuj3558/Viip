import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Award,
  FileText,
  DollarSign,
  Phone,
  X,
} from "lucide-react";
import { logo } from "../assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeBusinessSubMenu, setActiveBusinessSubMenu] = useState(null);
  const [activeLicenseSubMenu, setActiveLicenseSubMenu] = useState(null);
  const [activeTrademarkSubMenu, setActiveTrademarkSubMenu] = useState(null);
  const [activeDocumentSubMenu, setActiveDocumentSubMenu] = useState(""); // Tracks the active submenu in "Documents"

  

  
  const dropdownRef = useRef(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (openDropdown) setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Enhanced animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smoother motion
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 3,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Dropdown data
  const dropdownItems = {
    expert: ["Expert Consultation"],
    business: ["Company Registration"],
    trademarks: [
      { name: "Trademark Registration", link: "/trademark-registration" },
      {
        name: "Trademark Registration for Individuals",
        link: "/trademark-registration-individual",
      },
      { name: "Trademark Assignment", link: "/trademark-assignment" },
      {
        name: "Legal Support",
        link: "", // No direct link, will use submenu
        submenu: {
          name: "Legal Support",
          items: [
            { name: "IP Due Diligence", link: "/ip-due-diligence" },
            { name: "IP Litigation Support", link: "/ip-litigation-support" },
            { name: "IP Strategy Consulting", link: "/ip-strategy-consulting" },
            {
              name: "International IP Protection",
              link: "/international-ip-protection",
            },
          ],
        },
      },
      {
        name: "IP Services",
        link: "", // No direct link, will use submenu
        submenu: {
          name: "IP Services",
          items: [
            { name: "Patent Registration", link: "/patent-registration" },
            { name: "Copyright Registration", link: "/copyright-registration" },
            {
              name: "Industrial Design Registration",
              link: "/industrial-design-registration",
            },
            { name: "IP Valuation", link: "/ip-valuation" },
            { name: "IP Licensing", link: "/ip-licensing" },
            {
              name: "IP Portfolio Management",
              link: "/ip-portfolio-management",
            },
          ],
        },
      },
    ],
    licenses: ["Licenses", "Registrations", "ISO Certification"],
    documents: [
      "Free Legal Documents",
      "Business Contracts",
      "Personal & Family",
      "Real Estate",
      "Notices",
      "HR Policies",
    ],
    accounting: [
      { name: "Income Tax Return (ITR)", link: "/income-tax-return" },
      { name: "Payroll Management System", link: "/payroll-management-system" },
    ],
  };

  // Submenu data for Expert Consultation
  const expertSubMenu = {
    "Expert Consultation": ["Talk To Expert"],
  };

const businessSubMenu = {
  "Company Registration": [
    {
      name: "Company Registration",
      link: "/company-registrion",
    },
    {
      name: "LLP Annual Compliance",
      link: "/llpannual-compliance",
    },
    {
      name: "LLP Annual Filings",
      link: "/llp-annual-filing",
    },
    {
      name: "LLP Designated Partner Change",
      link: "/llpdesignated-partner-change",
    },
    {
      name: "Sole Proprietorship Registration",
      link: "/sole-proprietorship-registration",
    },
    {
      name: "Producer Company Registration",
      link: "/producer-company-registration",
    },
    {
      name: "Nidhi Company Registration",
      link: "/nidhi-company-registration",
    },
    {
      name: "Startup India Registration",
      link: "/startup-india-registration",
    },
    {
      name: "Partnership Deed Drafting",
      link: "/partnership-deed-drafting",
    },
    {
      name: "One Person Company Registration",
      link: "/one-person-company-registration",
    },
    {
      name: "Authorized Share Capital",
      link: "/authorized-share-capital",
    },
    {
      name: "Memorandum Of Understanding (MOU) Drafting",
      link: "/mou-drafting",
    },
    {
      name: "Change Company Name",
      link: "/company-name-change",
    },
  ],
  "International Business Setup": [
    { name: "International Business Setup", link: "/international-business-setupPage" }, // Note: You need to define this route // Note: You need to define this route
  ],
  "Company Name Search": [
    { name: "Change Company Name", link: "/company-name-change" }, // Note: You need to define this route // Note: You need to define this route
  ],
  "Licenses & Registrations": [
    {
      name: "Digital Signature Certificate",
      link: "/digital-signature-certificate",
    }, // Note: You need to define this route // Note: You need to define this route
    { name: "Udyam Registration", link: "/udyam-registration" }, // Note: You need to define this route // Note: You need to define this route
    { name: "IEC [Import/Export Code]", link: "/IEC-importexportcode" }, // Note: You need to define this route // Note: You need to define this route
    { name: "MSME Registration", link: "/MSME-registration" },
    { name: "FSSAI", link: "/fssai-license" },
    { name: "Apeda RCMC", link: "/APEDA-RCMC" },
    { name: "Spice Board Registration", link: "/spiceboard-registration" },
    { name: "FIEO Registration", link: "/FIEO-registration" },
    { name: "Legal Metrology", link: "/legal-metrology" },
    { name: "Hallmark Registration", link: "/hallmark-registration" },
    { name: "BIS Registration", link: "/BIS-certification" },
    { name: "Liquor License", link: "/liquor-license" },
    { name: "CLRA Registration & Licensing", link: "/CLRA-registration" },
    { name: "AD Code Registration", link: "/AD-code-registration" },
    { name: "IRDAI Registration", link: "/IRDAI-registration" },
    { name: "Drug & Cosmetic License", link: "/drugs-and-cosmetics-license" },
    { name: "Customs Clearance", link: "/customer-clearance" },
    { name: "PSARA License", link: "/psara-license" },
      {
        name: "Trade License Renewal Registration",
        link: "/trade-license-renewal",
      },
      {
        name: "Professional Tax Registration",
        link: "/professional-tax-registration",
      },
      { name: "Online PF Registration", link: "/online-pf-registration" },
      { name: "Online ESI Registration", link: "/online-esi-registration" },
      { name: "Udyog Aadhaar Registration", link: "/udyog-aadhaar-registration" },
     
    // Note: You need to define this route // Note: You need to define this route
  ],
  "Web Development": [
    { name: "Web/E-Commerce Website Development", link: "/website-ecommerce-development" }, // Note: You need to define this route // Note: You need to define this route
  ],
  "ISO Certification": [
    { name: "ISO Certification", link: "/iso-certification" },
    { name: "ISO Certification 22000", link: "/iso-22000-certification" },
    { name: "ISO Certification 27001", link: "/iso-27001-certification" },
    { name: "ISO Certification 9001", link: "/iso-9001-certification" },
    { name: "ISO Certification 13485", link: "/iso-13485-certification" },
    { name: "ISO Certification 26000", link: "/iso-26000-consulting" },
    {
      name: "ISO Certification 9000 2005",
      link: "/iso-9000-2005-certification",
    }, // Note: This route needs to be defined
    { name: "ISO Certification 14001", link: "/iso-14001-certification" },
    { name: "ISO Certification 31000", link: "/iso-31000-certification" },
    {
      name: "Benefits Of ISO Certification",
      link: "/benefits-of-iso-certification",
    },
    
  ],

};

const trademarkIpSubMenu = {
  Trademarks: [
    { name: "Trademark Registration", link: "/trademark-registration" },
    {
      name: "Trademark Registration for Individuals",
      link: "/trademark-registration-individual",
    },
    { name: "Trademark Assignment", link: "/trademark-assignment" },
    { name: "Trademark Search", link: "/trademark-search" },
    { name: "Respond to TM Objection", link: "/respond-to-tm-objection" },
    { name: "Well Known Trademark", link: "/well-known-trademark" },
    { name: "Trademark Watch", link: "/trademark-watch" },
    { name: "Trademark Renewal", link: "/trademark-renewal" },
    { name: "USA Trademark", link: "/usa-trademark" },
    { name: "International Trademark", link: "/international-trademark" },
    { name: "Trademark Class Finder", link: "/trademark-class-finder" },
  ],
  Copyright: [
    { name: "Copyright Registration", link: "/copyright-registration" },
    { name: "Copyright Music", link: "/copyright-music" },
  ],
  Patent: [
    { name: "Indian Patent Search", link: "/indian-patent-search" },
    {
      name: "Provisional Patent Application",
      link: "/provisional-patent-application",
    },
    { name: "Patent Registration", link: "/patent-registration" },
  ],
  Infringement: [
    { name: "Copyright Infringement", link: "/copyright-infringement" },
    { name: "Patent Infringement", link: "/patent-infringement" },
    { name: "Trademark Infringement", link: "/trademark-infringement" },
  ],
  "Design Registration": [
    { name: "Logo Design", link: "/logo-design" },
    { name: "Design Registration", link: "/design-registration" },
  ],
  "Legal Support": [
    { name: "IP Due Diligence", link: "/ip-due-diligence" },
    { name: "IP Litigation Support", link: "/ip-litigation-support" },
    { name: "IP Strategy Consulting", link: "/ip-strategy-consulting" },
    {
      name: "International IP Protection",
      link: "/international-ip-protection",
    },
  ],
  "IP Services": [
    
    {
      name: "Industrial Design Registration",
      link: "/industrial-design-registration",
    },
    { name: "IP Valuation", link: "/ip-valuation" },
    { name: "IP Licensing", link: "/ip-licensing" },
    { name: "IP Portfolio Management", link: "/ip-portfolio-management" },
  ],
};




  const licenseSubMenu = {
    Fundraising: [
      { name: "Fundraising", link: "/fundraising" },
      { name: "Pitch Deck", link: "/pitch-deck" },
      { name: "Business loan", link: "/business-loan" },
      { name: "DPR Service", link: "/drp-service" },
    ],
    NGO: [
      { name: "Section 8 Company", link: "/section-8-company" },
      { name: "Trust Registration", link: "/trust-registration" },
      { name: "Society Registration", link: "/society-registration" },
      { name: "NGO Compliance", link: "/ngo-compliance" },
      { name: "Section 8 Compliance", link: "/section-8-compliance" },
      { name: "CSR-1 Filing", link: "/csr-1-filing" },
      { name: "Sec.80G & Sec.12A", link: "/sec-80g-sec-12a" },
      { name: "Darpan Registration", link: "/darpan-registration" },
      { name: "FCRA Registration", link: "/fcra-registration" },
    ],
    Property: [
      {
        name: "Property Title Verification",
        link: "/property-title-verification",
      },
      { name: "Property Registration", link: "/property-registration" },
      { name: "Rera Complaint", link: "/rera-complaint" },
      { name: "Gun License", link: "/gun-license" },
      { name: "Name Change", link: "/name-change" },
      { name: "Religion Change", link: "/religion-change" },
      { name: "Gender Change", link: "/gender-change" },
      { name: "Online Police Complaint", link: "/online-police-complaint" },
      { name: "Marriage Registration", link: "/marriage-registration" },
      { name: "Court Marriage", link: "/court-marriage" },
      { name: "Mutual Divorce", link: "/mutual-divorce" },
      { name: "Divorce Alimony", link: "/divorce-alimony" },
      {
        name: "Restitution of Conjugal Rights",
        link: "/restitution-conjugal-rights",
      },
      { name: "Corporate Immigration", link: "/corporate-immigration" },
      { name: "Family Immigration", link: "/family-immigration" },
      { name: "College Immigration", link: "/college-immigration" },
      { name: "Online Consumer Complaint", link: "/online-consumer-complaint" },
    ],
  };
  const documentationSubMenu = {
    "Free Legal Documents": [
      { name: "All Legal Documents", link: "/documents" },
      { name: "Rental Agreement", link: "/rental-agreement-download-format" },
      {
        name: "Commercial Rental Agreement",
        link: "/commercial-rental-agreement",
      },
      { name: "Experience Letter", link: "/experience-letter-format" },
      { name: "Appointment Letter", link: "/appointment-letter-format" },
      { name: "Affidavit Format", link: "/affidavit-format-download" },
      { name: "Power Of Attorney", link: "/power-of-attorney-format" },
      {
        name: "Income Certificate",
        link: "/income-certificate-format-download",
      },
      {
        name: "No Objection Certificate",
        link: "/no-objection-certificate-noc-format-download",
      },
      { name: "Salary Slip", link: "/salary-slip-sample-download" },
      {
        name: "Resignation Letter",
        link: "/resignation-letter-format-download",
      },
      {
        name: "Legal Heir Certificate",
        link: "/legal-heir-certificate-format-download",
      },
      { name: "Relieving Letter", link: "/relieving-letter-format" },
      {
        name: "Bonafide Certificate",
        link: "/bonafide-certificate-format-download",
      },
      { name: "Partnership Deed", link: "/partnership-deed-format-download" },
      { name: "Gst Invoice", link: "/gst-invoice-format" },
      {
        name: "Authorised Signatory In Gst",
        link: "/authorised-signatory-in-gst",
      },
      { name: "Delivery Challan", link: "/delivery-challan-format" },
      { name: "Offer Letter", link: "/offer-letter-format" },
      {
        name: "Consent Letter For Gst Registration",
        link: "/consent-letter-for-gst-registration-format-download",
      },
      { name: "Rent Receipt", link: "/generate-free-rent-receipt" },
    ],
    "Business Contracts": [
      {
        name: "Non Disclosure Agreement NDA",
        link: "/non-disclosure-agreement-nda",
      },
      { name: "Service Level Agreement", link: "/service-level-agreement" },
      { name: "Franchise Agreement", link: "/franchise-agreement" },
      { name: "Master Service Agreement", link: "/master-service-agreement" },
      { name: "Shareholders Agreement", link: "/shareholders-agreement" },
      { name: "Joint Venture Agreement", link: "/joint-venture-agreement" },
      { name: "Founders Agreement", link: "/founders-agreement" },
      { name: "Vendor Agreement", link: "/vendor-agreement" },
      { name: "Consultancy Agreement", link: "/consultancy-agreement" },
      {
        name: "Memorandum of Understanding",
        link: "/memorandum-of-understanding",
      },
      { name: "Succession Certificate", link: "/succession-certificate" },
      { name: "Scope of Work Agreement", link: "/scope-of-work-agreement" },
      { name: "Share Purchase Agreement", link: "/share-purchase-agreement" },
      { name: "Relinquishment Deed", link: "/relinquishment-deed" },
      { name: "Legal Heir Certificate", link: "/legal-heir-certificate" },
      { name: "Trade License", link: "/trade-license" },
      { name: "Noncompete Agreement", link: "/noncompete-agreement" },
      { name: "Finance Agreement", link: "/finance-agreement" },
      { name: "GDPR", link: "/gdpr" },
    ],
    "Personal & Family": [
      { name: "Will Registration", link: "/will-registration" },
      { name: "Probate of Will", link: "/probate-of-will" },
      { name: "Power of Attorney", link: "/power-of-attorney" },
    ],
    "Real Estate": [
      { name: "Rental Agreement", link: "/rental-agreement" },
      { name: "Sale Deed", link: "/sale-deed" },
      { name: "Gift Deed", link: "/gift-deed" },
      { name: "Rental Tenant Notice", link: "/rental-tenant-notice" },
    ],
    Notices: [
      { name: "Legal Notice", link: "/legal-notice" },
      {
        name: "Legal Notice for Money Recovery",
        link: "/legal-notice-for-money-recovery",
      },
      {
        name: "Legal Notice for recovery of dues",
        link: "/legal-notice-for-recovery-of-dues",
      },
      { name: "Cheque Bounce Notice", link: "/cheque-bounce-notice" },
      {
        name: "Legal Notice Under Consumer Protection Act",
        link: "/legal-notice-under-consumer-protection-act",
      },
    ],
    "HR Policies": [
      { name: "Employment Agreement", link: "/employment-agreement" },
      { name: "ESOP", link: "/esop" },
      { name: "Payroll Maintenance", link: "/payroll-maintenance" },
    ],
  };

  // Map icons to dropdown categories
  const menuIcons = {
    home: <Home size={18} />,
    expert: <Award size={18} />,
    business: <Briefcase size={18} />,
    trademarks: <FileText size={18} />,
    licenses: <Award size={18} />,
    accounting: <DollarSign size={18} />,
    contact: <Phone size={18} />,
  };

  return (
    <nav className="w-full border-b  border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8 justify-items-start">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Vastav Intellect" className="h-20" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex items-center space-x-6"
            ref={dropdownRef}
          >
            {/* Home Link */}

            {/* Expert Consultation Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("expert")}
                className={`flex items-center text-gray-700 hover:text-blue-900 w-full  transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "expert" ? "bg-blue-50 text-blue-900" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">{menuIcons.expert}</span>
                <span className="inline text-sm min-w-full">
                  Consult an Expert
                </span>
                <motion.span
                  animate={{ rotate: openDropdown === "expert" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openDropdown === "expert" && (
                  <motion.div
                    className="absolute mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2 w-2/5 border-r border-gray-100 max-h-[70vh] overflow-y-auto">
                      {dropdownItems.expert.map((item, index) => (
                        <motion.a
                          key={index}
                          href={`/`}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                            activeSubMenu === item
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveSubMenu(item)}
                          variants={itemVariants}
                          whileHover="hover"
                        >
                          <span>{item}</span>
                          {expertSubMenu[item] && (
                            <ChevronRight size={14} className="text-blue-600" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                    {/* Submenu with Two-Column Layout */}
                    <AnimatePresence mode="wait">
                      {activeSubMenu && expertSubMenu[activeSubMenu] && (
                        <motion.div
                          className="py-2 w-3/5 bg-gray-50 max-h-[70vh] overflow-y-auto"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                          key={activeSubMenu}
                        >
                          <div className="px-4 py-2 text-sm font-bold text-blue-900 border-b border-gray-200 mb-1 sticky top-0 bg-gray-50">
                            {activeSubMenu}
                          </div>
                          <div className="grid grid-cols-2 gap-x-2">
                            {expertSubMenu[activeSubMenu].map(
                              (subItem, index) => (
                                <motion.a
                                  key={index}
                                  href={`/${subItem
                                    .replace(/\s+/g, "")
                                    .toLowerCase()}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors rounded-md m-1"
                                  variants={linkVariants}
                                  initial="initial"
                                  whileHover="hover"
                                  whileTap={{ scale: 0.98 }}
                                >
                                  {subItem}
                                </motion.a>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business Setup Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("business")}
                className={`flex items-center mx-3 text-gray-700 hover:text-blue-900 transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "business" ? "bg-blue-50 text-blue-900" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">
                  {menuIcons.business}
                </span>
                <span className="inline text-sm  min-w-full">
                  Business Setup
                </span>
                <motion.span
                  animate={{ rotate: openDropdown === "business" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openDropdown === "business" && (
                  <motion.div
                    className="absolute mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2 w-2/5 border-r border-gray-100 max-h-[70vh] overflow-y-auto">
                      {Object.keys(businessSubMenu).map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                            activeBusinessSubMenu === item
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveBusinessSubMenu(item)}
                          variants={itemVariants}
                          whileHover="hover"
                        >
                          <span>{item}</span>
                          {businessSubMenu[item] && (
                            <ChevronRight size={14} className="text-blue-600" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                    {/* Submenu with Two-Column Layout */}
                    <AnimatePresence mode="wait">
                      {activeBusinessSubMenu &&
                        businessSubMenu[activeBusinessSubMenu] && (
                          <motion.div
                            className="py-2 w-3/5 bg-gray-50 max-h-[70vh] overflow-y-auto"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            key={activeBusinessSubMenu}
                          >
                            <div className="px-4 py-2 text-sm font-bold text-blue-900 border-b border-gray-200 mb-1 sticky top-0 bg-gray-50">
                              {activeBusinessSubMenu}
                            </div>
                            <div className="grid grid-cols-2 gap-x-2">
                              {businessSubMenu[activeBusinessSubMenu].map(
                                (subItem, index) => (
                                  <Link to={subItem.link} key={index}>
                                    <motion.a
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors rounded-md m-1"
                                      variants={linkVariants}
                                      initial="initial"
                                      whileHover="hover"
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      {subItem.name}
                                    </motion.a>
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Trademarks & IP Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("trademarks")}
                className={`flex items-center text-gray-700 hover:text-blue-900 transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "trademarks"
                    ? "bg-blue-50 text-blue-900"
                    : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">
                  {menuIcons.trademarks}
                </span>
                <span className="inline text-sm min-w-full">
                  Trademarks & IP
                </span>
                <motion.span
                  animate={{ rotate: openDropdown === "trademarks" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openDropdown === "trademarks" && (
                  <motion.div
                    className="absolute mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2 w-2/5 border-r border-gray-100 max-h-[70vh] overflow-y-auto">
                      {Object.keys(trademarkIpSubMenu).map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                            activeTrademarkSubMenu === item
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveTrademarkSubMenu(item)}
                          variants={itemVariants}
                          whileHover="hover"
                        >
                          <span>{item}</span>
                          {trademarkIpSubMenu[item] && (
                            <ChevronRight size={14} className="text-blue-600" />
                          )}
                        </motion.a>
                      ))}
                    </div>

                    {/* Submenu with Two-Column Layout */}
                    <AnimatePresence mode="wait">
                      {activeTrademarkSubMenu &&
                        trademarkIpSubMenu[activeTrademarkSubMenu] && (
                          <motion.div
                            className="py-2 w-3/5 bg-gray-50 max-h-[70vh] overflow-y-auto"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            key={activeTrademarkSubMenu}
                          >
                            <div className="px-4 py-2 text-sm font-bold text-blue-900 border-b border-gray-200 mb-1 sticky top-0 bg-gray-50">
                              {activeTrademarkSubMenu}
                            </div>
                            <div className="grid grid-cols-2 gap-x-2">
                              {trademarkIpSubMenu[activeTrademarkSubMenu].map(
                                (subItem, index) => (
                                  <Link to={subItem.link} key={index}>
                                    <motion.a
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors rounded-md m-1"
                                      variants={linkVariants}
                                      initial="initial"
                                      whileHover="hover"
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      {subItem.name}
                                    </motion.a>
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Licenses & Registrations Dropdown */}
           

            {/* Documents Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("documents")}
                className={`flex items-center text-gray-700 mx-1 hover:text-blue-900 transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "documents" ? "bg-blue-50 text-blue-900" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">
                  {menuIcons.documents}{" "}
                  {/* Replace with your icon for Documents */}
                </span>
                <span className="text-sm min-w-full">Documents</span>
                <motion.span
                  animate={{ rotate: openDropdown === "documents" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openDropdown === "documents" && (
                  <motion.div
                    className="absolute mt-2 left-[-20vh] w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    {/* Left Panel with Categories */}
                    <div className="py-2 w-2/5 border-r border-gray-100 max-h-[70vh] overflow-y-auto">
                      {Object.keys(documentationSubMenu).map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                            activeDocumentSubMenu === item
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveDocumentSubMenu(item)}
                          variants={itemVariants}
                          whileHover="hover"
                        >
                          <span>{item}</span>
                          {documentationSubMenu[item] && (
                            <ChevronRight size={14} className="text-blue-600" />
                          )}
                        </motion.a>
                      ))}
                    </div>

                    {/* Right Panel with Two Column Layout */}
                    <AnimatePresence mode="wait">
                      {activeDocumentSubMenu &&
                        documentationSubMenu[activeDocumentSubMenu] && (
                          <motion.div
                            className="py-2 w-3/5 bg-gray-50 max-h-[70vh] overflow-y-auto"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            key={activeDocumentSubMenu}
                          >
                            <div className="px-4 py-2 text-sm font-bold text-blue-900 border-b border-gray-200 mb-1 sticky top-0 bg-gray-50">
                              {activeDocumentSubMenu}
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                              {documentationSubMenu[activeDocumentSubMenu].map(
                                (subItem, index) => (
                                  <Link to={subItem.link} key={index}>
                                    <motion.a
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors rounded-md m-1"
                                      variants={linkVariants}
                                      initial="initial"
                                      whileHover="hover"
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      {subItem.name}
                                    </motion.a>
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accounting Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("accounting")}
                className={`flex items-center text-gray-700 hover:text-blue-900 transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "accounting"
                    ? "bg-blue-50 text-blue-900"
                    : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">
                  {menuIcons.accounting}
                </span>
                <span className="text-sm">Accounting</span>
                <motion.span
                  animate={{ rotate: openDropdown === "accounting" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openDropdown === "accounting" && (
                  <motion.div
                    className="absolute mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2">
                      {dropdownItems.accounting.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          variants={itemVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link to={item.link} className="block w-full">
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative ">
              <motion.button
                onClick={() => toggleDropdown("licenses")}
                className={`flex items-center text-gray-700 mx-1 hover:text-blue-900 transition-colors px-2 py-1 rounded-md ${
                  openDropdown === "licenses" ? "bg-blue-50 text-blue-900" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-1.5 text-blue-800">
                  {menuIcons.licenses}
                </span>
                <span className="  text-sm min-w-full">Others</span>
                <motion.span
                  animate={{ rotate: openDropdown === "licenses" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openDropdown === "licenses" && (
                  <motion.div
                    className="absolute left-[-60vh] mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex z-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-2 w-2/5 border-r border-gray-100 max-h-[70vh] overflow-y-auto">
                      {Object.keys(licenseSubMenu).map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors ${
                            activeLicenseSubMenu === item
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveLicenseSubMenu(item)}
                          variants={itemVariants}
                          whileHover="hover"
                        >
                          <span>{item}</span>
                          {licenseSubMenu[item] && (
                            <ChevronRight size={14} className="text-blue-600" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                    {/* Submenu with Two-Column Layout */}
                    <AnimatePresence mode="wait">
                      {activeLicenseSubMenu &&
                        licenseSubMenu[activeLicenseSubMenu] && (
                          <motion.div
                            className="py-2 w-3/5 bg-gray-50 max-h-[70vh] overflow-y-auto"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            key={activeLicenseSubMenu}
                          >
                            <div className="px-4 py-2 text-sm font-bold text-blue-900 border-b border-gray-200 mb-1 sticky top-0  bg-gray-50">
                              {activeLicenseSubMenu}
                            </div>
                            <div className="grid grid-cols-2 gap-x-2">
                              {licenseSubMenu[activeLicenseSubMenu].map(
                                (subItem, index) => (
                                  <Link to={subItem.link} key={index}>
                                    <motion.a
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors rounded-md m-1"
                                      variants={linkVariants}
                                      initial="initial"
                                      whileHover="hover"
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      {subItem.name}
                                    </motion.a>
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us Link */}
            <motion.a
              href="/contact"
              className="flex items-center text-gray-700 border-2 w-[20vh] hover:text-blue-900 transition-colors px-2 py-1 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-1.5 text-blue-800">{menuIcons.contact}</span>
              <span className="inline text-sm  min-w-full">Contact Us</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-blue-900 hover:text-blue-700 focus:outline-none p-2 rounded-md"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex flex-col divide-y divide-gray-100">
              <motion.a
                href="#Home"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 text-blue-800">{menuIcons.home}</span>
                <span>Home</span>
              </motion.a>

              <div>
                <motion.button
                  onClick={() => toggleDropdown("expert")}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-800">
                      {menuIcons.expert}
                    </span>
                    <span>Consult an Expert</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openDropdown === "expert" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openDropdown === "expert" && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dropdownItems.expert.map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors border-l-2 border-blue-200 ml-4"
                          variants={itemVariants}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <motion.button
                  onClick={() => toggleDropdown("business")}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-800">
                      {menuIcons.business}
                    </span>
                    <span>Business Setup</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openDropdown === "business" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openDropdown === "business" && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Object.keys(businessSubMenu).map((category, idx) => (
                        <div key={idx}>
                          <motion.div
                            className="px-8 py-2 text-sm font-medium text-blue-900 bg-gray-100"
                            variants={itemVariants}
                          >
                            {category}
                          </motion.div>
                          {businessSubMenu[category].map((item, index) => (
                            <motion.a
                              key={index}
                              href={`#${item.replace(/\s+/g, "")}`}
                              className="block px-10 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors border-l-2 border-blue-200 ml-8"
                              variants={itemVariants}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </motion.a>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <motion.button
                  onClick={() => toggleDropdown("trademarks")}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-800">
                      {menuIcons.trademarks}
                    </span>
                    <span>Trademarks & IP</span>
                  </div>
                  <motion.span
                    animate={{
                      rotate: openDropdown === "trademarks" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openDropdown === "trademarks" && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dropdownItems.trademarks.map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors border-l-2 border-blue-200 ml-4"
                          variants={itemVariants}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <motion.button
                  onClick={() => toggleDropdown("licenses")}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-800">
                      {menuIcons.licenses}
                    </span>
                    <span>Licenses & Registrations</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openDropdown === "licenses" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openDropdown === "licenses" && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Object.keys(licenseSubMenu).map((category, idx) => (
                        <div key={idx}>
                          <motion.div
                            className="px-8 py-2 text-sm font-medium text-blue-900 bg-gray-100"
                            variants={itemVariants}
                          >
                            {category}
                          </motion.div>
                          {licenseSubMenu[category].map((item, index) => (
                            <motion.a
                              key={index}
                              href={`#${item.replace(/\s+/g, "")}`}
                              className="block px-10 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors border-l-2 border-blue-200 ml-8"
                              variants={itemVariants}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </motion.a>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <motion.button
                  onClick={() => toggleDropdown("accounting")}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-800">
                      {menuIcons.accounting}
                    </span>
                    <span>Accounting</span>
                  </div>
                  <motion.span
                    animate={{
                      rotate: openDropdown === "accounting" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openDropdown === "accounting" && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dropdownItems.accounting.map((item, index) => (
                        <motion.a
                          key={index}
                          href={`#${item.replace(/\s+/g, "")}`}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors border-l-2 border-blue-200 ml-4"
                          variants={itemVariants}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="#Contact"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 text-blue-800">{menuIcons.contact}</span>
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
