import React, { useState } from "react";
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
    setSelectedService(service);
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
                <SubmissionsTable submissions={mockSubmissions} />
                <TablePagination />
              </>
            ) : (
              <ServiceGrid
                activeMenu={activeMenu}
                activeSubMenu={activeSubMenu}
                onServiceClick={handleServiceClick}
                menuItems={menuItems}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
