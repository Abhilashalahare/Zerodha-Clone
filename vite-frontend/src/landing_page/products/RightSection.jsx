import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Content */}
        <div className="space-y-4 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl font-semibold">{productName}</h1>
          <p className="text-gray-600 text-base sm:text-lg">{productDesription}</p>
          <div>
            <a href={learnMore} className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <img src={imageURL} alt={productName} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
