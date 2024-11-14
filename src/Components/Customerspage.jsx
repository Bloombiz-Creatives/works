import React from "react";

const Customers = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg ">
        <thead className="bg-gray-50 border-b">
          <tr>
           
            <th className=" px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wilder">
              Index
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Name
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Option
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              example@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              John Doe
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              sample@sample.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Jane Smith
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              sample@sample.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Jane Smith
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900">
               Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
