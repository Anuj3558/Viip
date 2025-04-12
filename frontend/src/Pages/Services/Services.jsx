import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(null);
  const location = useLocation();

  const keywords = [
    "business setup",
    "company formation",
    "licensing services",
    "bank account opening",
    "IP solutions",
    "trademark registration",
    "patent filing",
    "copyright protection",
    "business consultancy",
    "corporate services",
    "legal services",
    "offshore company setup",
    "free zone company setup",
    "intellectual property",
    "business licensing",
    "commercial registration",
    "business advisory",
    "startup services",
    "business incorporation",
    "corporate governance",
  ];
  const services = [
    {
      category: "Business Setup",
      items: [
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
    },
    {
      category: "International Business Setup",
      items: [
        {
          name: "International Business Setup",
          link: "/international-business-setupPage",
        },
      ],
    },
    {
      category: "Company Name Search",
      items: [
        {
          name: "Change Company Name",
          link: "/company-name-change",
        },
      ],
    },
    {
      category: "Licenses & Registrations",
      items: [
        {
          name: "Digital Signature Certificate",
          link: "/digital-signature-certificate",
        },
        {
          name: "Udyam Registration",
          link: "/udyam-registration",
        },
        {
          name: "IEC [Import/Export Code]",
          link: "/IEC-importexportcode",
        },
        {
          name: "MSME Registration",
          link: "/MSME-registration",
        },
        {
          name: "FSSAI",
          link: "/fssai-license",
        },
        {
          name: "Apeda RCMC",
          link: "/APEDA-RCMC",
        },
        {
          name: "Spice Board Registration",
          link: "/spiceboard-registration",
        },
        {
          name: "FIEO Registration",
          link: "/FIEO-registration",
        },
        {
          name: "Legal Metrology",
          link: "/legal-metrology",
        },
        {
          name: "Hallmark Registration",
          link: "/hallmark-registration",
        },
        {
          name: "BIS Registration",
          link: "/BIS-certification",
        },
        {
          name: "Liquor License",
          link: "/liquor-license",
        },
        {
          name: "CLRA Registration & Licensing",
          link: "/CLRA-registration",
        },
        {
          name: "AD Code Registration",
          link: "/AD-code-registration",
        },
        {
          name: "IRDAI Registration",
          link: "/IRDAI-registration",
        },
        {
          name: "Drug & Cosmetic License",
          link: "/drugs-and-cosmetics-license",
        },
        {
          name: "Customs Clearance",
          link: "/customer-clearance",
        },
        {
          name: "PSARA License",
          link: "/psara-license",
        },
        {
          name: "Trade License Renewal Registration",
          link: "/trade-license-renewal",
        },
        {
          name: "Professional Tax Registration",
          link: "/professional-tax-registration",
        },
        {
          name: "Online PF Registration",
          link: "/online-pf-registration",
        },
        {
          name: "Online ESI Registration",
          link: "/online-esi-registration",
        },
        {
          name: "Udyog Aadhaar Registration",
          link: "/udyog-aadhaar-registration",
        },
      ],
    },
    {
      category: "Web Development",
      items: [
        {
          name: "Web/E-Commerce Website Development",
          link: "/website-ecommerce-development",
        },
      ],
    },
    {
      category: "ISO Certification",
      items: [
        {
          name: "ISO Certification",
          link: "/iso-certification",
        },
        {
          name: "ISO Certification 22000",
          link: "/iso-22000-certification",
        },
        {
          name: "ISO Certification 27001",
          link: "/iso-27001-certification",
        },
        {
          name: "ISO Certification 9001",
          link: "/iso-9001-certification",
        },
        {
          name: "ISO Certification 13485",
          link: "/iso-13485-certification",
        },
        {
          name: "ISO Certification 26000",
          link: "/iso-26000-consulting",
        },
        {
          name: "ISO Certification 9000 2005",
          link: "/iso-9000-2005-certification",
        },
        {
          name: "ISO Certification 14001",
          link: "/iso-14001-certification",
        },
        {
          name: "ISO Certification 31000",
          link: "/iso-31000-certification",
        },
        {
          name: "Benefits Of ISO Certification",
          link: "/benefits-of-iso-certification",
        },
      ],
    },
    {
      category: "Trademarks",
      items: [
        {
          name: "Trademark Registration",
          link: "/trademark-registration",
        },
        {
          name: "Trademark Registration for Individuals",
          link: "/trademark-registration-individual",
        },
        {
          name: "Trademark Assignment",
          link: "/trademark-assignment",
        },
        {
          name: "Respond to TM Objection",
          link: "/respond-to-tm-objection",
        },
        {
          name: "Well Known Trademark",
          link: "/well-known-trademark",
        },
        {
          name: "Trademark Watch",
          link: "/trademark-watch",
        },
        {
          name: "Trademark Renewal",
          link: "/trademark-renewal",
        },
        {
          name: "USA Trademark",
          link: "/usa-trademark",
        },
        {
          name: "International Trademark",
          link: "/international-trademark",
        },
      ],
    },
    {
      category: "Copyright",
      items: [
        {
          name: "Copyright Registration",
          link: "/copyright-registration",
        },
        {
          name: "Copyright Music",
          link: "/copyright-music",
        },
      ],
    },
    {
      category: "Patent",
      items: [
        {
          name: "Provisional Patent Application",
          link: "/provisional-patent-application",
        },
        {
          name: "Patent Registration",
          link: "/patent-registration",
        },
      ],
    },
    {
      category: "Infringement",
      items: [
        {
          name: "Copyright Infringement",
          link: "/copyright-infringement",
        },
        {
          name: "Patent Infringement",
          link: "/patent-infringement",
        },
        {
          name: "Trademark Infringement",
          link: "/trademark-infringement",
        },
      ],
    },
    {
      category: "Design Registration",
      items: [
        {
          name: "Logo Design",
          link: "/logo-design",
        },
        {
          name: "Design Registration",
          link: "/design-registration",
        },
      ],
    },
    {
      category: "Legal Support",
      items: [
        {
          name: "IP Due Diligence",
          link: "/ip-due-diligence",
        },
        {
          name: "IP Litigation Support",
          link: "/ip-litigation-support",
        },
        {
          name: "IP Strategy Consulting",
          link: "/ip-strategy-consulting",
        },
        {
          name: "International IP Protection",
          link: "/international-ip-protection",
        },
      ],
    },
    {
      category: "IP Services",
      items: [
        {
          name: "Industrial Design Registration",
          link: "/industrial-design-registration",
        },
        {
          name: "IP Valuation",
          link: "/ip-valuation",
        },
        {
          name: "IP Licensing",
          link: "/ip-licensing",
        },
        {
          name: "IP Portfolio Management",
          link: "/ip-portfolio-management",
        },
      ],
    },
    {
      category: "Fundraising",
      items: [
        {
          name: "Fundraising",
          link: "/fundraising",
        },
        {
          name: "Pitch Deck",
          link: "/pitch-deck",
        },
        {
          name: "Business loan",
          link: "/business-loan",
        },
        {
          name: "DPR Service",
          link: "/drp-service",
        },
      ],
    },
    {
      category: "NGO",
      items: [
        {
          name: "Section 8 Company",
          link: "/section-8-company",
        },
        {
          name: "Trust Registration",
          link: "/trust-registration",
        },
        {
          name: "Society Registration",
          link: "/society-registration",
        },
        {
          name: "NGO Compliance",
          link: "/ngo-compliance",
        },
        {
          name: "Section 8 Compliance",
          link: "/section-8-compliance",
        },
        {
          name: "CSR-1 Filing",
          link: "/csr-1-filing",
        },
        {
          name: "Sec.80G & Sec.12A",
          link: "/sec-80g-sec-12a",
        },
        {
          name: "Darpan Registration",
          link: "/darpan-registration",
        },
        {
          name: "FCRA Registration",
          link: "/fcra-registration",
        },
      ],
    },
    {
      category: "Property",
      items: [
        {
          name: "Property Title Verification",
          link: "/property-title-verification",
        },
        {
          name: "Property Registration",
          link: "/property-registration",
        },
        {
          name: "Rera Complaint",
          link: "/rera-complaint",
        },
        {
          name: "Gun License",
          link: "/gun-license",
        },
        {
          name: "Name Change",
          link: "/name-change",
        },
        {
          name: "Religion Change",
          link: "/religion-change",
        },
        {
          name: "Gender Change",
          link: "/gender-change",
        },
        {
          name: "Online Police Complaint",
          link: "/online-police-complaint",
        },
        {
          name: "Marriage Registration",
          link: "/marriage-registration",
        },
        {
          name: "Court Marriage",
          link: "/court-marriage",
        },
        {
          name: "Mutual Divorce",
          link: "/mutual-divorce",
        },
        {
          name: "Divorce Alimony",
          link: "/divorce-alimony",
        },
        {
          name: "Restitution of Conjugal Rights",
          link: "/restitution-conjugal-rights",
        },
        {
          name: "Corporate Immigration",
          link: "/corporate-immigration",
        },
        {
          name: "Family Immigration",
          link: "/family-immigration",
        },
        {
          name: "College Immigration",
          link: "/college-immigration",
        },
        {
          name: "Online Consumer Complaint",
          link: "/online-consumer-complaint",
        },
      ],
    },
    {
      category: "Free Legal Documents",
      items: [
        {
          name: "All Legal Documents",
          link: "/documents",
        },
        {
          name: "Rental Agreement",
          link: "/rental-agreement-download-format",
        },
        {
          name: "Commercial Rental Agreement",
          link: "/commercial-rental-agreement",
        },
     
     
  
        {
          name: "Power Of Attorney",
          link: "/power-of-attorney-format",
        },
        {
          name: "Income Certificate",
          link: "/income-certificate-format-download",
        },
        {
          name: "No Objection Certificate",
          link: "/no-objection-certificate-noc-format-download",
        },
        {
          name: "Salary Slip",
          link: "/salary-slip-sample-download",
        },
        {
          name: "Resignation Letter",
          link: "/resignation-letter-format-download",
        },
        {
          name: "Legal Heir Certificate",
          link: "/legal-heir-certificate-format-download",
        },
        {
          name: "Relieving Letter",
          link: "/relieving-letter-format",
        },
        {
          name: "Bonafide Certificate",
          link: "/bonafide-certificate-format-download",
        },
        {
          name: "Partnership Deed",
          link: "/partnership-deed-format-download",
        },
        {
          name: "Gst Invoice",
          link: "/gst-invoice-format",
        },
        {
          name: "Authorised Signatory In Gst",
          link: "/authorised-signatory-in-gst",
        },
        {
          name: "Delivery Challan",
          link: "/delivery-challan-format",
        },
 
      ],
    },
    {
      category: "Business Contracts",
      items: [
        {
          name: "Non Disclosure Agreement NDA",
          link: "/non-disclosure-agreement-nda",
        },
        {
          name: "Service Level Agreement",
          link: "/service-level-agreement",
        },
        {
          name: "Franchise Agreement",
          link: "/franchise-agreement",
        },
        {
          name: "Master Service Agreement",
          link: "/master-service-agreement",
        },
        {
          name: "Shareholders Agreement",
          link: "/shareholders-agreement",
        },
        {
          name: "Joint Venture Agreement",
          link: "/joint-venture-agreement",
        },
        {
          name: "Founders Agreement",
          link: "/founders-agreement",
        },
        {
          name: "Vendor Agreement",
          link: "/vendor-agreement",
        },
        {
          name: "Consultancy Agreement",
          link: "/consultancy-agreement",
        },
        {
          name: "Memorandum of Understanding",
          link: "/memorandum-of-understanding",
        },
        {
          name: "Succession Certificate",
          link: "/succession-certificate",
        },
        {
          name: "Scope of Work Agreement",
          link: "/scope-of-work-agreement",
        },
        {
          name: "Share Purchase Agreement",
          link: "/share-purchase-agreement",
        },
        {
          name: "Relinquishment Deed",
          link: "/relinquishment-deed",
        },
        {
          name: "Legal Heir Certificate",
          link: "/legal-heir-certificate",
        },
        {
          name: "Trade License",
          link: "/trade-license",
        },
        {
          name: "Noncompete Agreement",
          link: "/noncompete-agreement",
        },
        {
          name: "Finance Agreement",
          link: "/finance-agreement",
        },
        {
          name: "GDPR",
          link: "/gdpr",
        },
      ],
    },
    {
      category: "Personal & Family",
      items: [
        {
          name: "Will Registration",
          link: "/will-registration",
        },
        {
          name: "Probate of Will",
          link: "/probate-of-will",
        },
        {
          name: "Power of Attorney",
          link: "/power-of-attorney",
        },
      ],
    },
    {
      category: "Real Estate",
      items: [
        {
          name: "Rental Agreement",
          link: "/rental-agreement",
        },
        {
          name: "Sale Deed",
          link: "/sale-deed",
        },
        {
          name: "Gift Deed",
          link: "/gift-deed",
        },
        {
          name: "Rental Tenant Notice",
          link: "/rental-tenant-notice",
        },
      ],
    },
    {
      category: "Notices",
      items: [
        {
          name: "Legal Notice",
          link: "/legal-notice",
        },
        {
          name: "Legal Notice for Money Recovery",
          link: "/legal-notice-for-money-recovery",
        },
        {
          name: "Legal Notice for recovery of dues",
          link: "/legal-notice-for-recovery-of-dues",
        },
        {
          name: "Cheque Bounce Notice",
          link: "/cheque-bounce-notice",
        },
        {
          name: "Legal Notice Under Consumer Protection Act",
          link: "/legal-notice-under-consumer-protection-act",
        },
      ],
    },
    {
      category: "HR Policies",
      items: [
        {
          name: "Employment Agreement",
          link: "/employment-agreement",
        },
        {
          name: "ESOP",
          link: "/esop",
        },
        {
          name: "Payroll Maintenance",
          link: "/payroll-maintenance",
        },
      ],
    },
   
  ];

  // Handle search from URL hash
  useEffect(() => {
    if (location.hash) {
      const hashTerm = decodeURIComponent(location.hash.replace('#', ''));
      setSearchTerm(hashTerm);
      handleSearch({ target: { value: hashTerm } }, false);
    }
  }, [location]);

  const handleSearch = (e, updateURL = true) => {
    const term = typeof e === 'string' ? e : e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredServices(null);
      if (updateURL) {
        window.history.replaceState(null, '', '/services');
      }
      return;
    }

    // Filter services based on search term
    const filtered = services.map(category => {
      const filteredItems = category.items.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      
      return {
        category: category.category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0);

    setFilteredServices(filtered);

    if (updateURL) {
      window.history.replaceState(null, '', `/services#${encodeURIComponent(term)}`);
    }
  };

  // Determine which services to display
  const displayServices = filteredServices || services;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Our Services - VastaVintellect</title>
        <meta name="description" content="Explore our comprehensive business setup and IP solutions services." />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://www.vastavintellect.com/services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Services</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-12">
          <div className="flex items-center border-2 border-blue-800 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
            />
            <div className="bg-blue-800 p-3">
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          
          {/* Show message when no results are found */}
          {filteredServices && filteredServices.length === 0 && (
            <p className="mt-4 text-center text-gray-600">
              No services found matching "{searchTerm}". Please try another search term.
            </p>
          )}
        </div>
        
        {/* Services List */}
        <div className="space-y-12">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {service.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-blue-800">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Learn more about {item.name.toLowerCase()} and how we can help your business succeed.
                      </p>
                    </div>
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
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