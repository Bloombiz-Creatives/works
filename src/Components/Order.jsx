import React from 'react';
import { Search, Printer, Eye } from 'lucide-react';

const OrdersTable = () => {
  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Search and Print Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white space-y-4 sm:space-y-0">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search orders..."
              className="p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-150"
          >
            <Printer />
            <span>Print</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[60px]">
                  No
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[100px]">
                  Order
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[140px]">
                  Customer ID
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[160px]">
                  Product Name
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[120px]">
                  Brand
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[120px]">
                  Status
                </th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 min-w-[80px]">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                <td className="p-2 sm:p-4 text-left">1</td>
                <td className="p-2 sm:p-4 text-left">#12345</td>
                <td className="p-2 sm:p-4 text-left">C100</td>
                <td className="p-2 sm:p-4 text-left">Product 1</td>
                <td className="p-2 sm:p-4 text-left">Brand 1</td>
                <td className="p-2 sm:p-4 text-left text-green-700">Completed</td>
                <td className="p-2 sm:p-4 text-left">
                  <button className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-600 transition-colors duration-150">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>


              <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                <td className="p-2 sm:p-4 text-left">1</td>
                <td className="p-2 sm:p-4 text-left">#12345</td>
                <td className="p-2 sm:p-4 text-left">C100</td>
                <td className="p-2 sm:p-4 text-left">Product 1</td>
                <td className="p-2 sm:p-4 text-left">Brand 1</td>
                <td className="p-2 sm:p-4 text-left text-green-700">Completed</td>
                <td className="p-2 sm:p-4 text-left">
                  <button className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-600 transition-colors duration-150">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>


              <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                <td className="p-2 sm:p-4 text-left">1</td>
                <td className="p-2 sm:p-4 text-left">#12345</td>
                <td className="p-2 sm:p-4 text-left">C100</td>
                <td className="p-2 sm:p-4 text-left">Product 1</td>
                <td className="p-2 sm:p-4 text-left">Brand 1</td>
                <td className="p-2 sm:p-4 text-left text-green-700">Completed</td>
                <td className="p-2 sm:p-4 text-left">
                  <button className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-600 transition-colors duration-150">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
