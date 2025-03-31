import React from "react";
import { Award, Briefcase,BookOpen, FileText, DollarSign, Home, Heart, Clipboard, Users, MoreHorizontal } from "lucide-react";

// Submenu data
const expertSubMenu = {
  "Expert Consultation": ["Talk To Expert"],
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
    "International Incorporation",
  ],
  "Liscence & Registartion": [
    "Digital Signature Certificate",
    "IEC [Import/Export Code]",
    "FSSAI",
    "Spice Board Registration",
"Legal Metrology",
"BIS Registration",
"CLRA Registration & Licensing",
"IRDAI Registration",
"Customs Clearance",
"Trade License Renewal Registration",
"Online PF Registration",
"Udyog Aadhaar Registration",
"Apeda RCMC",
"FIEO Registration",
"Hallmark Registration",
"Liquor License",
"AD Code Registration",
"Drug & Cosmetic License",
"PSARA License",
"Professional Tax Registration",
"Online ESI Registration"

  ],
  "Web Development":[
    "Web/Ecom Developmet"
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
  ],
};




const trademarksSubMenu = {
  "Trademark Registration": [
    "Trademark Registration",
"Trademark Assignment",
"Well Known Trademark",
"Trademark Renewal",
"International Trademark",
"Trademark Registration for Individuals",
"Respond to TM Objection",
"Trademark Watch",
"USA Trademark"
  ],
  "CopyRight":[
    "Copyright Registration",
"Copyright Music"
  ],
  "Patent":[
  
"Provisional Patent Application",
"Patent Registration"
  ],
  "Infringement":[
    "Copyright Infringement",
"Patent Infringement",
"Trademark Infringement"
    ],
    "Design Registration":[
      "Logo Design",
"Design Registration"
    ],
  "IP Services": [
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






const legalDocumentsSubMenu = {
  "Free Legal Documents": [
    "All Legal Documents",
    "Rental Agreement",
    "Commercial Rental Agreement",
    "Experience Letter",
    "Appointment Letter",
    "Affidavit Format",
    "Power Of Attorney",
    "Income Certificate",
    "No Objection Certificate",
    "Salary Slip",
    "Resignation Letter",
    "Legal Heir Certificate",
    "Relieving Letter",
    "Bonafide Certificate",
    "Partnership Deed",
    "GST Invoice",
    "Authorised Signatory In GST",
    "Delivery Challan",
    "Offer Letter",
    "Consent Letter For GST Registration",
    "Rent Receipt",
  ],
  "Business Contracts": [
    "Non Disclosure Agreement (NDA)",
    "Service Level Agreement",
    "Franchise Agreement",
    "Master Service Agreement",
    "Shareholders Agreement",
    "Joint Venture Agreement",
    "Founders Agreement",
    "Vendor Agreement",
    "Consultancy Agreement",
    "Memorandum of Understanding",
    "Succession Certificate",
    "Scope of Work Agreement",
    "Share Purchase Agreement",
    "Relinquishment Deed",
    "Legal Heir Certificate",
    "Trade License",
    "Noncompete Agreement",
    "Finance Agreement",
    "GDPR",
  ],
  "Personal & Family": [
    "Will Registration",
    "Probate of Will",
    "Power of Attorney",
  ],
  "Real Estate": [
    "Rental Agreement",
    "Sale Deed",
    "Gift Deed",
    "Rental Tenant Notice",
  ],
  Notices: [
    "Legal Notice",
    "Legal Notice for Money Recovery",
    "Legal Notice for Recovery of Dues",
    "Cheque Bounce Notice",
    "Legal Notice Under Consumer Protection Act",
  ],
  "HR Policies": [
    "Employment Agreement",
    "ESOP",
    "Payroll Maintenance",
  ],
};
//added other submenu
const otherSubMenu = {
  Fundraising: ["Fundraising", "Pitch Deck", "Business loan", "DPR Service"],
  NGO: [
    "Section 8 Company",
    "Trust Registration",
    "Society Registration",
    "NGO Compliance",
    "Section 8 Compliance",
    "CSR-1 Filing",
    "Sec.80G & Sec.12A",
    "Darpan Registration",
    "FCRA Registration",
  ],
  Property: [
    "Property Title Verification",
    "Property Registration",
    "Rera Complaint",
    "Gun License",
    "Name Change",
    "Religion Change",
    "Gender Change",
    "Online Police Complaint",
    "Marriage Registration",
    "Court Marriage",
    "Mutual Divorce",
    "Divorce Alimony",
    "Restitution of Conjugal Rights",
    "Corporate Immigration",
    "Family Immigration",
    "College Immigration",
    "Online Consumer Complaint",
  ],
};

// Menu items with icons and submenus
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

  
  legalDocuments: {
    icon: <Clipboard size={20} />,
    title: "Legal Documents",
    subItems: legalDocumentsSubMenu,
  },

  other: {
    icon: <MoreHorizontal size={20} />,
    title: "Other Services",
    subItems: otherSubMenu,
  },
  blog: {
    icon: <BookOpen size={20} />,
    title: "Blogs",
    component: 'Blogs' // Specify which component to render
  }
};

// Mock submissions (empty for now)
export const mockSubmissions = [];