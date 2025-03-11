// SubMenu.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

const SubMenu = ({ subItems, activeSubMenu, onSubMenuClick }) => {
  return (
    <ul className="ml-4 mt-2 space-y-1">
      {Object.keys(subItems).map((key) => (
        <li key={key}>
          <button
            className={`flex items-center w-full p-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 group ${
              activeSubMenu === key ? "bg-gray-100" : ""
            }`}
            onClick={() => onSubMenuClick(key)}
          >
            <span className="flex-1 text-left">{key}</span>
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
