import React, { useEffect, useState } from "react";
import { Mail, Calendar, Clock } from "lucide-react";
import * as XLSX from "xlsx";

const SubmissionsTable = ({
  selectedService,

}) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tableHeaders, setTableHeaders] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  console.log(selectedService);
  // Mapping of services to their corresponding API endpoints
   const serviceEndpoints = {
     "Talk To Expert": "expert/consult-and-expert",
     // Business Setup
     "Company Registration":
       "bussiness-setup/inquiries/type/company_registration_inquiry",
     "LLP Registration":
       "bussiness-setup/inquiries/type/llp_registration_inquiry",
     "LLP Annual Compliance":
       "bussiness-setup/inquiries/type/llp_annual_compliance",
     "LLP Annual Filings":
       "bussiness-setup/inquiries/type/llp_annual_filing_inquiry",
     "LLP Designated Partner":
       "bussiness-setup/inquiries/type/llp_designated_partner_inquiry",
     "Sole Proprietorship Registration":
       "bussiness-setup/inquiries/type/sole_proprietorship_inquiry",
     "Producer Company Registration":
       "bussiness-setup/inquiries/type/producer_company_registration",
     "Nidhi Company Registration":
       "bussiness-setup/inquiries/type/nidhi_company_registration_inquiry",
     "Startup India Scheme":
       "bussiness-setup/inquiries/type/startup_india_registration_inquiry",
     "Partnership Firm Deed":
       "bussiness-setup/inquiries/type/partnership_deed_drafting_inquiry",
     "One Person Company Registration":
       "bussiness-setup/inquiries/type/opc_registration_inquiry",
     "Authorised Share Capital":
       "bussiness-setup/inquiries/type/authorized_share_capital_inquiry",
     "Memorandum Of Understanding":
       "bussiness-setup/inquiries/type/mou_drafting_inquiry",
     "Change Company Name":
       "bussiness-setup/inquiries/type/company_name_change_inquiry",
     "Web/Ecom Developmet":
       "bussiness-setup/inquiries/type/website_ecommerce_development",
     // International Business Setup
     "International Incorporation":
       "bussiness-setup/international-business-setup",
     // ISO Certification
     "ISO Certification": "api/iso",
     "ISO Certification 22000": "api/iso/22000",
     "ISO Certification 27001": "api/iso/27001",
     "ISO Certification 9001": "api/iso/9001",
     "ISO Certification 13485": "api/iso/13485",
     "ISO Certification 26000": "api/iso/26000",
     "ISO Certification 9000 2005": "api/iso/9000_2005",
     "ISO Certification 14001": "api/iso/14001",
     "ISO Certification 31000": "api/iso/31000",
     "Benefits Of ISO Certification": "api/iso/benefits",
     // Registrations
     "Professional Tax Registration": "api/professional-tax",
     "Online PF Registration": "api/pf-registration",
     "NGO Registration": "api/ngo-registration",
     "Online ESI Registration": "api/esi-registration",

     "Legal Metrology": "api/legal-metrology-registration",
     // Licenses
     "PSARA License": "api/psara-license",
     "Trade License Renewal Registration": "api/trade-license-renewal",
     FSSAI: "api/fssai-registration",

     //IP Services
     "Patent Registration": "api/patent-registration",
     "Copyright Registration": "api/copyright-registration",
     "Industrial Design Registration": "api/industrial-design-registration",
     "IP Valuation": "api/ip-valuation",
     "IP Licensing": "api/ip-licensing",
     "IP Portfolio Management": "api/ip-portfolio-management",
     "IP Due Diligence": "api/ip-due-diligence",
     "IP Litigation Support": "api/ip-litigation-support",
     "IP Strategy Consulting": "api/ip-strategy-consulting",
     "International IP Protection": "api/international-ip-protection",

     "Income Tax Return": "",
     ///Liscensce and Regisration
     "Digital Signature Certificate":
       "bussiness-setup/inquiries/type/company_name_change_inquiry",
     "IEC [Import/Export Code]":
       "bussiness-setup/inquiries/type/iec_import_export_code",
     "Spice Board Registration":
       "bussiness-setup/inquiries/type/spice_board_registration",
     "BIS Registration": "bussiness-setup/inquiries/type/bis_certification",
     "CLRA Registration & Licensing":
       "bussiness-setup/inquiries/type/clra_registration",
     "IRDAI Registration": "bussiness-setup/inquiries/type/irdai_registration",
     "Customs Clearance": "bussiness-setup/inquiries/type/customer_clearance",

     "Apeda RCMC": "bussiness-setup/inquiries/type/apeda_rcmc",
     "FIEO Registration": "bussiness-setup/inquiries/type/fieo_registration",
     "Hallmark Registration":
       "bussiness-setup/inquiries/type/hallmark_registration",
     "Liquor License": "bussiness-setup/inquiries/type/liquor_license",
     "AD Code Registration":
       "bussiness-setup/inquiries/type/ad_code_registration",
     "Drug & Cosmetic License":
       "bussiness-setup/inquiries/type/drugs_and_cosmetics_license",
     "Udyog Aadhaar Registration":
       "bussiness-setup/inquiries/type/udyog_aadhar_registarion",

     "Trademark Registration": "trademark-ip/trademark_registration_inquiry",
     "Trademark Assignment": "trademark-ip/trademark_assignment_inquiry",
     "Well Known Trademark": "trademark-ip/well_known_trademark_inquiry",
     "Trademark Renewal": "trademark-ip/trademark_renewal_inquiry",
     "International Trademark":
       "trademark-ip/trademark_registration_international_inquiry",
     "Trademark Registration for Individuals":
       "trademark-ip/trademark_registration_individual_inquiry",
     "Respond to TM Objection":
       "trademark-ip/trademark_objection_response_inquiry",
     "Trademark Watch": "trademark-ip/trademark_watch_inquiry",
     "USA Trademark": "trademark-ip/trademark_registration_usa_inquiry",

     "Copyright Registration": "copyright/copyright_registration_inquiry",
     "Copyright Music": "copyright/copyright_music_inquiry",

     "Provisional Patent Application":
       "patent/provisional_patent_application_inquiry",
     "Patent Registration": "patent/Patent_Registration",

     "Copyright Infringement": "copyright/copyright_infringement_inquiry",
     "Patent Infringement": "patent/patent_infringement_inquiry",
     "Trademark Infringement": "trademark-ip/trademark_infringement_inquiry",

     "Logo Design": "design/logo_design_inquiry",
     "Design Registration": "design/design_registration_inquiry",

     //others
     Fundraising: "others/fundraising",
     "Pitch Deck": "others/pitch_deck",
     "Business loan": "others/business_loan_inquiry",
     "DPR Service": "others/dpr_service_inquiry",
     "Section 8 Company": "others/section_8_company_inquiry",
     "Trust Registration": "others/trust_registration_inquiry",
     "Society Registration": "others/society_registration_inquiry",
     "NGO Compliance": "others/ngo_compliance_inquiry",
     "Section 8 Compliance": "others/section8_compliance_inquiry",
     "CSR-1 Filing": "others/csr1_filing_inquiry",
     "Sec.80G & Sec.12A": "others/section80g_12a_inquiry",
     "Darpan Registration": "others/darpan_registration_inquiry",
     "FCRA Registration": "others/fcra_registration_inquiry",
     "Property Title Verification":
       "others/property_title_verification_inquiry",
     "Property Registration": "others/property_registration_inquiry",
     "Rera Complaint": "others/rera_complaint_inquiry",
     "Gun License": "others/gun_license_inquiry",
     "Name Change": "others/name_change_inquiry",
     "Religion Change": "others/religion_change_inquiry",
     "Gender Change": "others/gender_change_inquiry",
     "Online Police Complaint": "others/online_police_complaint_inquiry",
     "Marriage Registration": "others/marriage_registration_inquiry",
     "Court Marriage": "others/court_marriage_inquiry",
     "Mutual Divorce": "others/mutual_divorce_inquiry",
     "Divorce Alimony": "others/divorce_alimony_inquiry",
     "Restitution of Conjugal Rights":
       "others/restitution_of_conjugal_rights_inquiry",
     "Corporate Immigration": "others/corporate_immigration_inquiry",
     "Family Immigration": "others/family_immigration_inquiry",
     "College Immigration": "others/college_immigration_inquiry",
     "Online Consumer Complaint": "others/online_consumer_complaint_inquiry",
   };

  // Fetch submissions when selectedService changes
  useEffect(() => {
    if (selectedService) {
      const endpoint = serviceEndpoints[selectedService];
      if (!endpoint) {
        setError("Invalid service selected");
        return;
      }

      setLoading(true);
      setError(null);

      // Construct the full API URL
      const apiUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/${endpoint}`;
      console.log(apiUrl);

      // Fetch data from the backend
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch submissions");
          }
          return response.json();
        })
        .then((data) => {
          if (data.data && data.data.length > 0) {
            // Extract keys from the first submission to use as table headers
            // Exclude any internal/system fields you don't want to display
            const excludedKeys = ["id", "_id", "__v", "createdAt", "updatedAt"];
            const headers = Object.keys(data.data[0])
              .filter((key) => !excludedKeys.includes(key))
              .map((key) => ({
                key,
                // Convert snake_case or camelCase to Title Case for display
                label: key
                  .replace(/_/g, " ")
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())
                  .trim(),
              }));

            setTableHeaders(headers);
            setSubmissions(data.data);
            setCurrentPage(1); // Reset to first page when new data is loaded
          } else {
            setSubmissions([]);
            setTableHeaders([]);
          }
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [selectedService]);

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(submissions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    XLSX.writeFile(workbook, `${selectedService}_submissions.xlsx`);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = submissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(submissions.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading submissions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600">
          No submissions found for {selectedService}
        </p>
      </div>
    );
  }

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-x-auto">
      <button
        onClick={handleExportToExcel}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Export to Excel
      </button>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {tableHeaders.map((header) => (
              <th
                key={header.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((submission, index) => (
            <tr
              key={submission.id || indexOfFirstItem + index}
              className="hover:bg-gray-50"
            >
              {tableHeaders.map((header) => (
                <td key={`${index}-${header.key}`} className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {/* Handle different data types appropriately */}
                    {typeof submission[header.key] === "object"
                      ? JSON.stringify(submission[header.key])
                      : submission[header.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastItem, submissions.length)}
                </span>{" "}
                of <span className="font-medium">{submissions.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>

                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => goToPage(number)}
                    className={`relative inline-flex items-center px-4 py-2 border ${
                      currentPage === number
                        ? "bg-blue-50 border-blue-500 text-blue-600"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    } text-sm font-medium`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsTable;
