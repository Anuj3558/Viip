import React, { useState } from "react";
import SubMenu from "./SubMenu";
import ServiceCards from "./ServiceCards";
import SubmissionsTable from "./SubmissionsTable";

const Content = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [submissions, setSubmissions] = useState([]); // Initialize submissions

  const dropdownItems = {
    expert: [
      "Expert Consultation",
      "Lawyer Consultation",
      "Property Lawyer",
      "Family Lawyer",
      "Consumer Lawyer",
      "Civil Lawyer",
      "Criminal Lawyer",
      "Intellectual Property Lawyer",
      "Business Lawyer",
      "Labour Lawyer",
      "Constitutional Lawyer",
    ],
    business: ["Company Registration", "International Business Setup"],
    trademarks: [
      "Trademark Registration",
      "Trademark Registration in USA",
      "Trademark Registration for Individuals",
      "Trademark Assignment",
    ],
    licenses: ["Licenses", "Registrations", "ISO Certification"],
    accounting: ["Income Tax Return (ITR)", "Payroll Management System"],
  };

  const expertSubMenu = {
    "Expert Consultation": ["Talk To Company Secretary", "Talk To CA"],
    "Lawyer Consultation": ["Talk To Lawyer"],
    "Property Lawyer": [
      "Property Dispute",
      "Real Estate Transactions",
      "Landlord Tenant Issues",
      "Title Deeds Registration",
      "Zoning And Land Use",
      "Easements And Rights Of Way",
      "Homeowners Association",
      "Property Tax Disputes",
      "Property Inheritance And Wills",
      "Foreclosure",
    ],
    "Family Lawyer": [
      "Divorce",
      "Child Custody",
      "Child Support",
      "Adoption",
      "Domestic Violence",
      "Paternity",
      "Alimony",
      "Legal Separation",
      "Guardianship",
    ],
    "Consumer Lawyer": [
      "Product Liability",
      "False Advertising",
      "Unfair Trade Practices",
      "Consumer Fraud",
      "Warranty Claims",
      "Debt Collection Practices",
      "Credit Reporting Issues",
      "Bankruptcy",
      "Privacy And Data Protection",
      "Lemon Law",
    ],
    "Civil Lawyer": [
      "Personal Injury",
      "Breach Of Contract",
      "Defamation",
      "Employment Disputes",
      "Debt Collection",
    ],
    "Criminal Lawyer": [
      "Drug Offence Charges",
      "Dui Dwi Charges",
      "Assault Battery Cases",
      "Theft Burglary Cases",
      "Fraud Cases",
      "Sexual Offenses Cases",
      "White Collar Crimes",
      "Cyber Crimes",
      "Domestic Violence Cases",
      "Embezzlement Cases",
      "Insider Trading Cases",
      "Money Laundering Cases",
      "Bribery Corruption Cases",
      "Tax Evasion Cases",
      "Corporate Espionage",
      "Identity Theft",
      "Forgery Case",
      "Antitrust Violations",
      "Homicide Cases",
    ],
    "Intellectual Property Lawyer": [
      "Patent",
      "Trademark",
      "Copyrights",
      "Trade Secrets",
      "Domain Name Disputes",
      "Litigation",
      "Counterfeiting Piracy",
      "Digital Rights Management",
      "International IP",
      "IP Valuation",
      "Licensing Agreements",
      "Open Source Licensing",
      "Genetic Patents",
      "Artificial Intelligence And Ip",
      "Traditional Cultural Expression",
      "Moral Rights",
      "Right Of Publicity",
      "Trademark Parody And Satire",
      "Fair Use And Fair Dealing",
      "First Sale Doctrine",
      "Orphan Works",
      "Patent Troll",
    ],
    "Business Lawyer": [
      "Business Formation",
      "Contract Law",
      "IP For Business",
      "Employment",
      "Mergers And Acquisitions",
      "Antitrust And Competition",
      "Tax Lawyer",
      "Business Litigation",
      "Commercial Real Estate",
      "Corporate Governance",
    ],
    "Labour Lawyer": [
      "Employment Contracts",
      "Wrongful Termination",
      "Workplace Discrimination",
      "Harassment",
      "Wage And Hour Disputes",
      "Collective Bargaining",
      "Health And Safety",
      "Leave Entitlements",
      "Retirement And Benefits",
      "Workplace Policies And Handbooks",
    ],
    "Constitutional Lawyer": [
      "Civil Rights Liberties",
      "Equal Protection",
      "Due Process",
      "Freedom Of Speech",
      "Freedom Of Religion",
      "Right To Privacy",
      "Separation Of Powers",
      "Voting Rights",
      "Criminal Procedure",
      "Federalism",
    ],
  };

  const businessSubMenu = {
    "Company Registration": [
      "Company Registration",
      "LLP Registration",
      "LLP Annual Compliance",
      "LLP Annual Filings",
      "LLP Designated Partner",
      "Sole Proprietorship Registration",
      "Producer Company Registration",
      "Nidhi Company Registration",
      "Startup India Scheme",
      "Partnership Firm Deed",
      "One Person Company Registration",
      "Authorised Share Capital",
      "Memorandum Of Understanding",
      "Change Company Name",
    ],
    "International Business Setup": [
      "Netherlands Incorporation",
      "United Kingdom Incorporation",
      "China Incorporation",
      "Malaysia Incorporation",
      "Hong Kong Incorporation",
      "Australia Incorporation",
      "USA Incorporation",
      "Singapore Incorporation",
      "Business Setup In Dubai",
    ],
  };

  const licenseSubMenu = {
    Licenses: ["PSARA License", "Trade License Renewal Registration", "FSSAI"],
    Registrations: [
      "Professional Tax Registration",
      "Online PF Registration",
      "NGO Registration",
      "Online ESI Registration",
      "Udyog Aadhaar Registration",
      "Digital Signature Certificate",
      "Legal Metrology",
    ],
    "ISO Certification": [
      "ISO Certification",
      "ISO Certification 22000",
      "ISO Certification 27001",
      "ISO Certification 9001",
      "ISO Certification 13485",
      "ISO Certification 26000",
      "ISO Certification 9000 2005",
      "ISO Certification 14001",
      "ISO Certification 31000",
      "Benefits Of ISO Certification",
    ],
  };

  const menuItems = {
    expert: {
      title: "Expert Consultation",
      subItems: expertSubMenu,
    },
    business: {
      title: "Business Setup",
      subItems: businessSubMenu,
    },
    trademarks: {
      title: "Trademarks & IP",
      subItems: dropdownItems.trademarks, // Add subItems for trademarks
    },
    licenses: {
      title: "Licenses & Registrations",
      subItems: licenseSubMenu,
    },
    accounting: {
      title: "Accounting",
    },
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
    setActiveSubMenu("");
    setSelectedService(null);
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
    setSelectedService(null);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {activeMenu && menuItems[activeMenu]?.subItems && (
        <SubMenu
          subItems={menuItems[activeMenu].subItems}
          activeSubMenu={activeSubMenu}
          onSubMenuClick={handleSubMenuClick}
        />
      )}

      {activeSubMenu || activeMenu === "trademarks" ? (
        <ServiceCards
          activeMenu={activeMenu}
          activeSubMenu={activeSubMenu}
          selectedService={selectedService}
          handleServiceClick={handleServiceClick}
          menuItems={menuItems}
          submissions={submissions}
        />
      ) : null}

      <SubmissionsTable
        activeMenu={activeMenu}
        activeSubMenu={activeSubMenu}
        selectedService={selectedService}
        dropdownItems={dropdownItems}
        menuItems={menuItems}
        licenseSubMenu={licenseSubMenu}
      />
    </div>
  );
};

export default Content;
