import React from "react";
import { Award, Briefcase, FileText, DollarSign } from "lucide-react";

// Submenu data
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
    "Netherlands Incorporation",
    "United Kingdom Incorporation",
    "China Incorporation",
    "Malaysia Incorporation",
    "Hong Kong Incorporation",
    "Australia Incorporation",
    "Usa Incorporation",
    "Singapore Incorporation",
    "Pune Incorporation",
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
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    service: "Expert",
    subService: "Talk To Company Secretary",
    status: "New",
    date: "2024-03-15",
    time: "14:30",
    message: "Need assistance with company registration",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1987654321",
    service: "Expert",
    subService: "Talk To CA",
    status: "In Progress",
    date: "2024-03-14",
    time: "10:15",
    message: "Require help with tax planning",
  },
];
