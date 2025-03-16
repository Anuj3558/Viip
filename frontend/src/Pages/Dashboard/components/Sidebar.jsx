import React from "react";
import { Home, Users, Settings, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const Sidebar = ({
  menuItems,
  activeMenu,
  activeSubMenu,
  onMenuClick,
  onSubMenuClick,
}) => {
  const navigate = useNavigate(); // Hook for navigation

  // Logout function
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Optionally, redirect to the login page
    navigate("/login"); // Replace "/login" with your login route

    // Optionally, refresh the page to reset the application state
    // window.location.reload();
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-900">Admin Dashboard</h1>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        {/* Dashboard Home */}
        <div className="p-4 hover:bg-blue-50 cursor-pointer flex items-center text-gray-700">
          <Home size={20} className="mr-3" />
          <span>Dashboard</span>
        </div>

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
            onClick={handleLogout} // Add onClick handler for logout
          >
            <LogOut size={20} className="mr-3" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;