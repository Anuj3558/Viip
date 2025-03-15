import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import ServiceGrid from "./components/ServiceGrid";
import SubmissionsTable from "./components/SubmissionsTable";
import TablePagination from "./components/TablePagination";
import { menuItems, mockSubmissions } from "./components/data/mockData";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define API endpoints for each service
  const serviceEndpoints = {
    "Company Registration": "/api/company-registration",
    "Trademark Registration": "/api/trademark-registration",
    "ISO Certification": "/api/iso-certification",
    "Talk To Lawyer": "/api/lawyer-consultation",
    // Add other services and their endpoints here
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
    console.log("Service clicked:", service);
    setSelectedService(service);
  };

  // Fetch data when selectedService changes
  useEffect(() => {
    if (selectedService) {
      fetchSubmissionsByService(selectedService);
    }
  }, [selectedService]);

  const fetchSubmissionsByService = async (service) => {
    // Check if we have an endpoint for this service
    if (!serviceEndpoints[service]) {
      console.warn(`No API endpoint defined for service: ${service}`);
      // Fallback to mock data
      const filteredMockSubmissions = mockSubmissions.filter(
        (submission) => submission.subService === service
      );
      setSubmissions(filteredMockSubmissions);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const endpoint = serviceEndpoints[service];
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      setError("Failed to load submissions. Please try again later.");
      // Fallback to mock data in case of error
      const filteredMockSubmissions = mockSubmissions.filter(
        (submission) => submission.subService === service
      );
      setSubmissions(filteredMockSubmissions);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        activeSubMenu={activeSubMenu}
        onMenuClick={handleMenuClick}
        onSubMenuClick={handleSubMenuClick}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="bg-white rounded-lg shadow">
            <Breadcrumb
              activeMenu={activeMenu}
              activeSubMenu={activeSubMenu}
              selectedService={selectedService}
              menuItems={menuItems}
            />

            {selectedService ? (
              <>
                <SubmissionsTable
                  submissions={submissions}
                  selectedService={selectedService}
                  activeMenu={activeMenu}
                  activeSubMenu={activeSubMenu}
                  menuItems={menuItems}
                  loading={loading}
                  error={error}
                />
                <TablePagination />
              </>
            ) : (
              <ServiceGrid
                activeMenu={activeMenu}
                activeSubMenu={activeSubMenu}
                selectedService={selectedService}
                onServiceClick={handleServiceClick}
                menuItems={menuItems}
                submissions={mockSubmissions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;