import React from "react";
import { Mail, Calendar, Clock } from "lucide-react";

const SubmissionsTable = ({
  submissions,
  selectedService,
  activeMenu,
  activeSubMenu,
  menuItems,
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredSubmissions = submissions.filter(
    (submission) =>
      (!selectedService || submission.subService === selectedService) &&
      (!activeSubMenu ||
        Object.keys(menuItems[activeMenu].subItems)
          .find((key) =>
            menuItems[activeMenu].subItems[key].includes(submission.subService)
          )
          ?.includes(activeSubMenu))
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Client Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Submitted
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredSubmissions.map((submission) => (
            <tr key={submission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {submission.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail size={14} className="mr-1" />
                      {submission.email}
                    </div>
                    <div className="text-sm text-gray-500">
                      {submission.phone}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {submission.service}
                </div>
                <div className="text-sm text-gray-500">
                  {submission.subService}
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                    submission.status
                  )}`}
                >
                  {submission.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {submission.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {submission.time}
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-3">
                  View Details
                </button>
                <button className="text-green-600 hover:text-green-900">
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsTable;
