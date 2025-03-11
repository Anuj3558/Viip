import React from "react";
import ServiceCard from "./ServiceCards";

const ServiceGrid = ({
  activeMenu,
  activeSubMenu,
  selectedService,
  menuItems,
  submissions,
  onServiceClick,
}) => {
  if (!activeMenu || !activeSubMenu) return null;

  // Safe data access to prevent undefined errors
  const services = menuItems?.[activeMenu]?.subItems?.[activeSubMenu] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          selectedService={selectedService}
          
          onServiceClick={onServiceClick}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
