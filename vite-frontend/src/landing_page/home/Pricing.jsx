import React from "react";

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Side Text */}
        <div className="lg:w-1/3">
          <h1 className="text-3xl font-semibold mb-4">Unbeatable pricing</h1>
          <p className="text-gray-700 mb-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium flex items-center gap-2"
          >
            See pricing <span className="text-xl">→</span>
          </a>
        </div>

        {/* Right Side Pricing Cards */}
        <div className="ml-50 grid grid-cols-1 sm:grid-cols-2 gap-0 w-full lg:w-2/3">
          <div className="border border-gray-300 p-8 text-center">
            <h2 className="text-4xl font-semibold mb-2">₹0</h2>
            <p className="text-gray-600">
              Free equity delivery and <br /> direct mutual funds
            </p>
          </div>
          <div className="border border-gray-300 p-8 text-center">
            <h2 className="text-4xl font-semibold mb-2">₹20</h2>
            <p className="text-gray-600">Intraday and F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
