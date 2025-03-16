import React, { useEffect, useState } from "react";
import { Mail, Calendar, Clock } from "lucide-react";
import * as XLSX from "xlsx";

const SubmissionsTable = ({
  selectedService,
  activeMenu,
  activeSubMenu,
  menuItems,
}) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   console.log(selectedService);
  // Mapping of services to their corresponding API endpoints
  const serviceEndpoints = {
    "Talk To Expert": "expert/consult-and-expert",
    "Company Registration": "bussiness-setup/inquiries/type/company_registration_inquiry",
    "LLP Registration": "bussiness-setup/inquiries/type/llp_registration_inquiry",
    "LLP Anuual Compliance": "bussiness-setup/inquiries/type/llp_annual_compliance",
    "LLP Anuual Filings": "bussiness-setup/inquiries/type/llp_annual_filing_inquiry",
    "LLP Designated Partner": "bussiness-setup/inquiries/type/llp_designated_partner_change",
    "Sole Proprietorship Registration": "bussiness-setup/inquiries/type/sole_proprietorship_inquiry",
    "Producer Company Registration": "bussiness-setup/inquiries/type/producer_company_registration",
    "Nidhi Company Registration": "bussiness-setup/inquiries/type/nidhi_company_registration_inquiry",
    "Startup India Scheme": "bussiness-setup/inquiries/type/startup_india_registration_inquiry",
    "Partnership Firm Deed": "bussiness-setup/inquiries/type/partnership_deed_drafting_inquiry",
    "One Person Company Registration": "bussiness-setup/inquiries/type/opc_registration_inquiry",
    "Authorised Share Capital": "bussiness-setup/inquiries/type/authorized_share_capital_inquiry",
    "Memorandum Of Understanding": "bussiness-setup/inquiries/type/mou_drafting_inquiry",
    "Change Company Name": "bussiness-setup/inquiries/type/company_name_change_inquiry",
    "International Incorporation": "bussiness-setup/inquiries/type/international_incorporation_inquiry",
    "PSARA License": "licenses/inquiries/type/psara_license_inquiry",
    "Trade License Renewal Registration": "licenses/inquiries/type/trade_license_renewal_registration_inquiry",
    "FSSAI": "licenses/inquiries/type/fssai_inquiry",
    "Professional Tax Registration": "registrations/inquiries/type/professional_tax_registration_inquiry",
    "Online PF Registration": "registrations/inquiries/type/online_pf_registration_inquiry",
    "NGO Registration": "registrations/inquiries/type/ngo_registration_inquiry",
    "Online ESI Registration": "registrations/inquiries/type/online_esi_registration_inquiry",
    "Udyog Aadhaar Registration": "registrations/inquiries/type/udyog_aadhaar_registration_inquiry",
    "Digital Signature Certificate": "registrations/inquiries/type/digital_signature_certificate_inquiry",
    "Legal Metrology": "registrations/inquiries/type/legal_metrology_inquiry",
    "ISO Certification": "iso-certification/inquiries/type/iso_certification_inquiry",
    "ISO Certification 22000": "iso-certification/inquiries/type/iso_certification_22000_inquiry",
    "ISO Certification 27001": "iso-certification/inquiries/type/iso_certification_27001_inquiry",
    "ISO Certification 9001": "iso-certification/inquiries/type/iso_certification_9001_inquiry",
    "ISO Certification 13485": "iso-certification/inquiries/type/iso_certification_13485_inquiry",
    "ISO Certification 26000": "iso-certification/inquiries/type/iso_certification_26000_inquiry",
    "ISO Certification 9000 2005": "iso-certification/inquiries/type/iso_certification_9000_2005_inquiry",
    "ISO Certification 14001": "iso-certification/inquiries/type/iso_certification_14001_inquiry",
    "ISO Certification 31000": "iso-certification/inquiries/type/iso_certification_31000_inquiry",
    "Benefits Of ISO Certification": "iso-certification/inquiries/type/benefits_of_iso_certification_inquiry",
    "Trademark Registration": "trademarks/inquiries/type/trademark_registration_inquiry",
    "Trademark Registration in USA": "trademarks/inquiries/type/trademark_registration_in_usa_inquiry",
    "Trademark Registration for Individuals": "trademarks/inquiries/type/trademark_registration_for_individuals_inquiry",
    "Trademark Assignment": "trademarks/inquiries/type/trademark_assignment_inquiry",
    "Patent Registration": "ip-services/inquiries/type/patent_registration_inquiry",
    "Copyright Registration": "ip-services/inquiries/type/copyright_registration_inquiry",
    "Industrial Design Registration": "ip-services/inquiries/type/industrial_design_registration_inquiry",
    "IP Valuation": "ip-services/inquiries/type/ip_valuation_inquiry",
    "IP Licensing": "ip-services/inquiries/type/ip_licensing_inquiry",
    "IP Portfolio Management": "ip-services/inquiries/type/ip_portfolio_management_inquiry",
    "IP Due Diligence": "legal-support/inquiries/type/ip_due_diligence_inquiry",
    "IP Litigation Support": "legal-support/inquiries/type/ip_litigation_support_inquiry",
    "IP Strategy Consulting": "legal-support/inquiries/type/ip_strategy_consulting_inquiry",
    "International IP Protection": "legal-support/inquiries/type/international_ip_protection_inquiry",
    "Income Tax Return": "accounting-services/inquiries/type/income_tax_return_inquiry",
    "Payroll Management": "accounting-services/inquiries/type/payroll_management_inquiry"
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
          setSubmissions(data);
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