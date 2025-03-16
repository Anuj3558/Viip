import React, { useEffect, useState } from "react";
import { Mail, Calendar, Clock } from "lucide-react";
import * as XLSX from "xlsx";

const SubmissionsTable = ({
  selectedService,

}) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   console.log(selectedService);
  // Mapping of services to their corresponding API endpoints
  const serviceEndpoints = {
    // Business Setup
    "Talk To Expert":"expert/consult-and-expert",
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
    "Memorandum Of Understanding": "bussiness-setup/inquiries/type/mou_inquiry",
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
          setSubmissions(data.data);
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {submissions.map((submission) => (
            <tr key={submission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {submission.name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Mail size={14} className="mr-1" />
                  {submission.email}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{submission.phone}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {submission.message}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsTable;