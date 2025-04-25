import React from "react";

function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-3">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="w-3/4"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">
            Free and open market education
          </h1>
          <p className="text-gray-700 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium flex items-center gap-2 mb-6"
          >
            Varsity <span className="text-xl">→</span>
          </a>

          <p className="text-gray-700 mb-2">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium flex items-center gap-2"
          >
            TradingQ&A <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;