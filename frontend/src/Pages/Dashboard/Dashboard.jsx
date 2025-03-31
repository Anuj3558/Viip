import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import ServiceGrid from "./components/ServiceGrid";
import SubmissionsTable from "./components/SubmissionsTable";
import AdminBlogEditor from "./components/AdminBlogEditor";
import { menuItems, mockSubmissions } from "./components/data/mockData";
import AdminAchievements from "./components/AdminAchievements";
import AdminEvents from "./components/AdminEvents";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [selectedService, setSelectedService] = useState("Talk To Expert");
  const [currentView, setCurrentView] = useState(null); // 'Blogs', 'NewBlog', 'EditBlog'
  const [editBlogId, setEditBlogId] = useState(null);

  const handleMenuClick = (menu) => {
    if (menuItems[menu].component) {
      setCurrentView(menuItems[menu].component);
      setActiveMenu(menu);
      setActiveSubMenu("");
      setSelectedService(null);
    } else {
      setCurrentView(null);
      setActiveMenu(activeMenu === menu ? "" : menu);
      setActiveSubMenu("");
      setSelectedService(null);
    }
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
    setSelectedService(null);
    setCurrentView(null);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setCurrentView(null);
  };

  const handleUserManagementClick = () => {
    // Handle user management click
  };

  const handleCreateNewBlog = () => {
    setCurrentView('NewBlog');
    setEditBlogId(null);
  };

  const handleEditBlog = (id) => {
    setCurrentView('EditBlog');
    setEditBlogId(id);
  };

  const handleBackToBlogs = () => {
    setCurrentView('Blogs');
    setEditBlogId(null);
  };

  const renderContent = () => {
    switch(currentView) {
      case 'Blogs':
        return <AdminBlogEditor editBlogId={editBlogId} onBack={handleBackToBlogs} />;
      case 'Achivement':
        return <AdminAchievements />;
        case 'Events':
          return <AdminEvents />;
      default:
        return (
          <div className="p-8">
            <div className="bg-white rounded-lg shadow">
              <Breadcrumb
                activeMenu={activeMenu}
                activeSubMenu={activeSubMenu}
                selectedService={selectedService}
                menuItems={menuItems}
              />

              {selectedService ? (
                <SubmissionsTable
                  selectedService={selectedService}
                  activeMenu={activeMenu}
                  activeSubMenu={activeSubMenu}
                  menuItems={menuItems}
                />
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
        );
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
        onUserManagementClick={handleUserManagementClick}
      />

      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;