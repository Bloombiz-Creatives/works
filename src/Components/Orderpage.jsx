import React from "react";
import { Search, Edit, User, Mail, ShoppingBag } from "lucide-react";

function OrderPage() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="text-lg font-semibold">
          Order ID <span className="ml-2 text-yellow-500">Payment pending</span>
          <span className="ml-1 text-red-500">Unfulfilled</span>
          <p className="mt-1 text-sm text-gray-500">Date and Time</p>
        </div>
        <div className="relative w-full md:w-64 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search or type command..."
            className="border rounded-md px-4 py-2 pl-10 w-full"
          />
          <Search className="absolute top-2 left-3 text-gray-500" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          {/* Order Item */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Order Item</h2>
              <span className="text-red-500">Unfulfilled</span>
            </div>
            <p className="text-gray-500 mb-4">
              Use this personalized guide to get your store up and running.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium">Macbook Air</h3>
                <p className="text-gray-500">Medium · Black</p>
                <p>3 x $500.00 = $1,500.00</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-md shadow h-64">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Order Summary</h2>
              <span className="text-yellow-500">Payment pending</span>
            </div>
            <p className="text-gray-500 mb-4">
              Use this personalized guide to get your store up and running.
            </p>
            <div className="text-sm text-gray-700">
              <p className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>1 item</span>
                <span>$1,500</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Discount</span>
                <span>New customer</span>
                <span>-$10</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free shipping (0.0 lb)</span>
                <span>$0.00</span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$1,499</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Customers */}
          <div className="bg-white p-4 rounded-md shadow h-40">
            <h3 className="font-semibold">Customers</h3>
            <div className="mt-2 flex items-center">
              <User className="text-gray-500 w-5 h-5 mr-2" />
              <p className="text-gray-500">Alex Jander</p>
            </div>
            <div className="mt-2 flex items-center">
              <ShoppingBag className="text-gray-500 w-5 h-5 mr-1" />
              <p className="text-sm text-gray-400">1 Order</p>
            </div>
            <p className="text-sm text-gray-400">Customer is tax-exempt</p>
          </div>
          {/* Contact Information */}
          <div className="bg-white p-4 rounded-md shadow h-40">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Contact Information</h3>
                <div className="mt-2 flex items-center">
                  <Mail className="text-gray-500 w-5 h-5 mr-2" />
                  <p className="text-gray-500">alexjander@gmail.com</p>
                </div>
                <p className="text-gray-400">No phone number</p>
              </div>
            </div>
          </div>
          {/* Shipping Address */}
          <div className="bg-white p-4 rounded-md shadow h-56">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center">
                <h3 className="font-semibold">Shipping Address</h3>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <User className="text-gray-500 w-5 h-5 mr-2" />
              <p className="text-gray-500">Alex Jander</p>
            </div>
            <p className="text-gray-500 mt-2">1226 University Drive</p>
            <p className="text-gray-500 mt-2">Menlo Park</p>
            <p className="text-gray-500 mt-2">United States</p>
            <p className="text-gray-500 mt-2">+123456789</p>
          </div>
          {/* Billing Address */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex justify-between items-start p-4">
              <div>
                <h3 className="font-semibold">Billing Address</h3>
                <p className="text-gray-500">Same as Shipping Address</p>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
