import React, { useState, useEffect, useRef } from "react";
import { Home, Users, Settings, LogOut, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  menuItems,
  activeMenu,
  activeSubMenu,
  onMenuClick,
  onSubMenuClick,
}) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 bg-blue-900 text-white rounded-lg lg:hidden z-50"
      >
        <Menu size={20} />
      </button>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed lg:relative w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } z-50 h-screen`}
      >
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-900">Admin Dashboard</h1>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {/* Dashboard Home */}
     

          {/* Menu Items */}
          {Object.entries(menuItems).map(([key, item]) => (
            <div key={key}>
              <div
                className={`p-4 hover:bg-blue-50 cursor-pointer flex items-center justify-between ${
                  activeMenu === key ? "bg-blue-50" : ""
                }`}
                onClick={() => onMenuClick(key)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeMenu === key ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Submenu */}
              {activeMenu === key && item.subItems && (
                <div className="bg-gray-50 overflow-y-auto max-h-64">
                  {Object.keys(item.subItems).map((subItem) => (
                    <div
                      key={subItem}
                      className={`pl-12 pr-4 py-2 hover:bg-blue-100 cursor-pointer text-sm ${
                        activeSubMenu === subItem
                          ? "bg-blue-100 text-blue-900"
                          : "text-gray-700"
                      }`}
                      onClick={() => onSubMenuClick(subItem)}
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Admin Settings */}
          <div className="border-t border-gray-200 mt-4">
            <div className="p-4 hover:bg-blue-50 cursor-pointer flex items-center text-gray-700">
              <Users size={20} className="mr-3" />
              <span>User Management</span>
            </div>
            <div className="p-4 hover:bg-blue-50 cursor-pointer flex items-center text-gray-700">
              <Settings size={20} className="mr-3" />
              <span>Settings</span>
            </div>
            <div
              className="p-4 hover:bg-blue-50 cursor-pointer flex items-center text-gray-700"
              onClick={handleLogout}
            >
              <LogOut size={20} className="mr-3" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;