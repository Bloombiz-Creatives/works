import React, { useState } from "react";
import {
  Search,
  Eye,
  Edit,
  Copy,
  Trash,
  Printer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductManagement = () => {
  const initialProducts = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Razer BlackWidow Lite",
      type: "Keyboard",
      quantity: 10,
      numOfSale: 0,
      basePrice: 340.04,
      rating: 0,
      totalStock: 20,
      isPublished: false,
      isTodaysDeal: true,
      isFeatured: false,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Razer BlackWidow",
      type: "Keyboard",
      quantity: 15,
      numOfSale: 0,
      basePrice: 681.04,
      rating: 0,
      totalStock: 10,
      isPublished: false,
      isTodaysDeal: false,
      isFeatured: false,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      name: "Logitech G502 HERO High",
      type: "Mouse",
      quantity: 5,
      numOfSale: 5,
      basePrice: 189.99,
      rating: 4.5,
      totalStock: 15,
      isPublished: true,
      isTodaysDeal: false,
      isFeatured: true,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50",
      name: "ASUS ROG Swift 360Hz Gaming Monitor",
      type: "Monitor",
      quantity: 8,
      numOfSale: 2,
      basePrice: 899.99,
      rating: 4.8,
      totalStock: 8,
      isPublished: true,
      isTodaysDeal: true,
      isFeatured: false,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/50",
      name: "Corsair K95 RGB Platinum",
      type: "Keyboard",
      quantity: 20,
      numOfSale: 3,
      basePrice: 199.99,
      rating: 4.6,
      totalStock: 25,
      isPublished: true,
      isTodaysDeal: false,
      isFeatured: true,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/50",
      name: "Logitech MX Master 3",
      type: "Mouse",
      quantity: 12,
      numOfSale: 8,
      basePrice: 99.99,
      rating: 4.7,
      totalStock: 18,
      isPublished: true,
      isTodaysDeal: true,
      isFeatured: false,
    },
    {
      id: 7,
      image: "https://via.placeholder.com/50",
      name: "BenQ PD3220U",
      type: "Monitor",
      quantity: 5,
      numOfSale: 1,
      basePrice: 799.99,
      rating: 4.5,
      totalStock: 10,
      isPublished: true,
      isTodaysDeal: false,
      isFeatured: true,
    },
    {
      id: 8,
      image: "https://via.placeholder.com/50",
      name: "SteelSeries Arctis Pro",
      type: "Headset",
      quantity: 7,
      numOfSale: 4,
      basePrice: 249.99,
      rating: 4.4,
      totalStock: 15,
      isPublished: true,
      isTodaysDeal: true,
      isFeatured: false,
    },
    {
      id: 9,
      image: "https://via.placeholder.com/50",
      name: "HyperX Cloud II",
      type: "Headset",
      quantity: 10,
      numOfSale: 6,
      basePrice: 99.99,
      rating: 4.6,
      totalStock: 12,
      isPublished: true,
      isTodaysDeal: false,
      isFeatured: true,
    },
    {
      id: 10,
      image: "https://via.placeholder.com/50",
      name: "Razer Naga Chroma",
      type: "Mouse",
      quantity: 11,
      numOfSale: 2,
      basePrice: 149.99,
      rating: 4.3,
      totalStock: 14,
      isPublished: true,
      isTodaysDeal: false,
      isFeatured: false,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPageFirst = 6; // Number of products on the first page
  const productsPerPageSubsequent = 4; // Number of products on subsequent pages

  // Function to toggle the featured status
  const toggleFeatured = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFeatured: !product.isFeatured }
          : product
      )
    );
  };

  // Function to toggle today's deal status
  const toggleTodaysDeal = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isTodaysDeal: !product.isTodaysDeal }
          : product
      )
    );
  };

  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  // Determine the number of products to show based on the current page
  const currentProductsPerPage =
    currentPage === 1 ? productsPerPageFirst : productsPerPageSubsequent;

  // Pagination logic
  const totalPages =
    Math.ceil(
      (currentPage === 1 ? 6 : products.length - 6) / productsPerPageSubsequent
    ) + 1;
  const indexOfLastProduct = currentPage * currentProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - currentProductsPerPage;

  const currentProducts =
    currentPage === 1
      ? products.slice(0, productsPerPageFirst)
      : products.slice(6, indexOfLastProduct);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-lg h-auto">
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-6">
              <h1 className="text-xl font-semibold text-black">All Products</h1>
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type & Enter"
                  className="border rounded-md px-4 py-2 w-64" 
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>


             {/* Print Button */}
             <div className="flex justify-end mb-4">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-3 p-3 mx-5  bg-blue-400 text-white hover:bg-blue-600 transition"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>

            {/* Table */}
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="w-8 pb-3"></th>
                  <th className="pb-3 text-black">Index</th>
                  <th className="pb-3 text-black">Name</th>
                  <th className="pb-3 text-black">Type</th>
                  <th className="pb-3 text-black">Qty</th>
                  <th className="pb-3 text-center text-black">Today's Deal</th>
                  <th className="pb-3 text-center text-black">Featured</th>
                  <th className="pb-3 text-center text-black">Options</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product, index) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-4"></td>
                    <td className="py-4 text-sm text-black">
                      {currentPage === 1 ? index + 1 : index + 7}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-sm font-medium text-black">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-black">{product.type}</td>
                    <td className="py-4 text-sm text-black">
                      {product.quantity}
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex justify-center items-center">
                        <div
                          className={`w-12 h-6 rounded-full ${
                            product.isTodaysDeal
                              ? "bg-green-500"
                              : "bg-gray-200"
                          } relative`}
                          onClick={() => toggleTodaysDeal(product.id)}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                              product.isTodaysDeal
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex justify-center items-center">
                        <div
                          className={`w-12 h-6 rounded-full ${
                            product.isFeatured ? "bg-green-500" : "bg-gray-200"
                          } relative`}
                          onClick={() => toggleFeatured(product.id)}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                              product.isFeatured
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex justify-center items-center space-x-1">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100">
                          <Eye className="w-3 h-3 text-blue-500" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100">
                          <Edit className="w-3 h-3 text-yellow-500" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100">
                          <Copy className="w-3 h-3 text-green-500" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100">
                          <Trash className="w-3 h-3 text-red-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button
                className={`p-2 rounded-full ${
                  currentPage === 1
                    ? "bg-gray-300"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`p-2 rounded-full ${
                  currentPage === totalPages
                    ? "bg-gray-300"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
