import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({
  activeMenu,
  activeSubMenu,
  selectedService,
  menuItems,
}) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center">
        {activeMenu && (
          <span className="text-gray-600">{menuItems[activeMenu].title}</span>
        )}
        {activeSubMenu && (
          <>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-600">{activeSubMenu}</span>
          </>
        )}
        {selectedService && (
          <>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-semibold">
              {selectedService}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
