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
     "Talk To Expert": "/expert/consult-and-expert",
     // Business Setup
     "Company Registration":
       "bussiness-setup/inquiries/type/company_registration_inquiry",
     "LLP Registration":
       "bussiness-setup/inquiries/type/llp_registration_inquiry",
     "LLP Anuual Compliance":
       "bussiness-setup/inquiries/type/llp_annual_compliance_inquiry",
     "LLP Anuual Filings":
       "bussiness-setup/inquiries/type/llp_annual_filing_inquiry",
     "LLP Designated Partner":
       "bussiness-setup/inquiries/type/llp_designated_partner_inquiry",
     "Sole Proprietorship Registration":
       "bussiness-setup/inquiries/type/sole_proprietorship_inquiry",
     "Producer Company Registration":
       "bussiness-setup/inquiries/type/producer_company_inquiry",
     "Nidhi Company Registration":
       "bussiness-setup/inquiries/type/nidhi_company_inquiry",
     "Startup India Scheme":
       "bussiness-setup/inquiries/type/startup_india_inquiry",
     "Partnership Firm Deed":
       "bussiness-setup/inquiries/type/partnership_firm_inquiry",
     "One Person Company Registration":
       "bussiness-setup/inquiries/type/one_person_company_inquiry",
     "Authorised Share Capital":
       "bussiness-setup/inquiries/type/authorised_share_capital_inquiry",
     "Memorandum Of Understanding":
       "bussiness-setup/inquiries/type/mou_inquiry",
     "Change Company Name":
       "bussiness-setup/inquiries/type/company_name_change_inquiry",

     // International Business Setup

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
     "Udyog Aadhaar Registration": "api/udyog-aadhar-registration",
     "Digital Signature Certificate": "api/digital-signature-certificate",
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

     "Trademark Registration": "/trademark-registration",
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
