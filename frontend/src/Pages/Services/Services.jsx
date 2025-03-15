import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      category: "Business Setup",
      items: [
        { name: "Company Registration", link: "/company-registrion" },
        { name: "LLP Annual Compliance", link: "/llpannual-compliance" },
        { name: "LLP Designated Partner Change", link: "/llpdesignated-partner-change" },
        { name: "Producer Company Registration", link: "/producer-company-registration" },
        { name: "Startup India Registration", link: "/startup-india-registration" },
        { name: "One Person Company Registration", link: "/one-person-company-registration" },
        { name: "MOU Drafting", link: "/mou-drafting" },
        { name: "LLP Annual Filing", link: "/llp-annual-filing" },
        { name: "Sole Proprietorship Registration", link: "/sole-proprietorship-registration" },
        { name: "Nidhi Company Registration", link: "/nidhi-company-registration" },
        { name: "Partnership Deed Drafting", link: "/partnership-deed-drafting" },
        { name: "Authorized Share Capital", link: "/authorized-share-capital" },
        { name: "Company Name Change", link: "/company-name-change" },
        { name: "International Business Setup", link: "/international-business-setup" },
        { name: "Consult and Expert for Business", link: "/consult-and-expert-for-business" },
      ],
    },
    {
      category: "Trademark",
      items: [
        { name: "Trademark Registration", link: "/trademark-registration" },
        { name: "Trademark Registration (Individual)", link: "/trademark-registration-individual" },
        { name: "Trademark Assignment", link: "/trademark-assignment" },
      ],
    },
    {
      category: "Income Tax",
      items: [
        { name: "Income Tax Return", link: "/income-tax-return" },
        { name: "Payroll Management", link: "/payroll-management" },
      ],
    },
    {
      category: "Licenses & Accounting",
      items: [
        { name: "ISO Certification", link: "/iso-certification" },
        { name: "ISO 9001 Certification", link: "/iso-9001-certification" },
        { name: "ISO 9000:2005 Certification", link: "/iso-9000-2005-certification" },
        { name: "ISO 13485 Certification", link: "/iso-13485-certification" },
        { name: "ISO 14001 Certification", link: "/iso-14001-certification" },
        { name: "ISO 22000 Certification", link: "/iso-22000-certification" },
        { name: "ISO 26000 Consulting", link: "/iso-26000-consulting" },
        { name: "ISO 27001 Certification", link: "/iso-27001-certification" },
        { name: "ISO 31000 Certification", link: "/iso-31000-certification" },
        { name: "Benefits of ISO Certification", link: "/benefits-of-iso-certification" },
        { name: "Udyog Aadhar Registration", link: "/udyog-aadhar-registration" },
        { name: "Trade License Renewal", link: "/trade-license-renewal" },
        { name: "PSARA License", link: "/psara-license" },
        { name: "Professional Tax Registration", link: "/professional-tax-registration" },
        { name: "PF Registration", link: "/pf-registration" },
        { name: "Legal Metrology Registration", link: "/legal-metrology-registration" },
        { name: "FSSAI Registration", link: "/fssai-registration" },
        { name: "ESI Registration", link: "/esi-registration" },
        { name: "Digital Signature Certificate", link: "/digital-signature-certificate" },
        { name: "NGO Registration", link: "/ngo-registration" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Services</h1>
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-medium text-blue-800">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">Learn more about {item.name.toLowerCase()}.</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;