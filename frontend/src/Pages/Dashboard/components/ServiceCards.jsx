import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  service,
  selectedService,
  submissions = [], // Default to an empty array
  onServiceClick,
}) => {
  const submissionCount = Array.isArray(submissions)
    ? submissions.filter((sub) => sub.subService === service).length
    : 0; // Fallback to 0 if submissions is invalid

  return (
    <div
      className={`bg-white rounded-lg shadow-md transition-all duration-200 cursor-pointer transform hover:scale-105 ${
        selectedService === service ? "ring-2 ring-blue-500" : "hover:shadow-lg"
      }`}
      onClick={() => onServiceClick(service)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
          <ArrowRight
            size={20}
            className="text-blue-500 transform group-hover:translate-x-1 transition-transform"
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          View all submissions for {service}
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            {submissionCount} submissions
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
