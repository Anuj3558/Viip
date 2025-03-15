import React from "react";
import { Award, Briefcase, FileText, DollarSign } from "lucide-react";

// Submenu data
const expertSubMenu = {
  "Expert Consultation": ["Talk To Expert"],

};

const businessSubMenu = {
  "Company Registration": [
    "Company Registration",
    "LLP Registration",
    "LLP Anuual Compliance",
    "LLP Anuual Filings",
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
    "International Incorporation",

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

const trademarksSubMenu = {
  "Trademark Registration": [
    "Trademark Registration",
    "Trademark Registration in USA",
    "Trademark Registration for Individuals",
    "Trademark Assignment",
  ],
  "IP Services": [
    "Patent Registration",
    "Copyright Registration",
    "Industrial Design Registration",
    "IP Valuation",
    "IP Licensing",
    "IP Portfolio Management",
  ],
  "Legal Support": [
    "IP Due Diligence",
    "IP Litigation Support",
    "IP Strategy Consulting",
    "International IP Protection",
  ],
};
const accountingSubMenu = {
 "Accounting Services":[ "Income Tax Return",
  "Payroll Management"]
}

export const menuItems = {
  expert: {
    icon: <Award size={20} />,
    title: "Expert Consultation",
    subItems: expertSubMenu,
  },
  business: {
    icon: <Briefcase size={20} />,
    title: "Business Setup",
    subItems: businessSubMenu,
  },
  trademarks: {
    icon: <FileText size={20} />,
    title: "Trademarks & IP",
    subItems: trademarksSubMenu,
  },
  licenses: {
    icon: <Award size={20} />,
    title: "Licenses & Registrations",
    subItems: licenseSubMenu,
  },
  accounting: {
    icon: <DollarSign size={20} />,
    title: "Accounting",
    subItems: accountingSubMenu,
  },
};

export const mockSubmissions = [
 
];
