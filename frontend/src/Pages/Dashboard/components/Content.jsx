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
    ],
    business: ["Company Registration"],
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
