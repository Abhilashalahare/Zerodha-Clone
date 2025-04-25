import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        {/* Image */}
        <div>
          <img src={imageURL} alt={productName} className="w-full h-auto" />
        </div>

        {/* Text & Links */}
        <div className="space-y-4 ">
          <h1 className="text-2xl sm:text-3xl font-semibold">{productName}</h1>
          <p className="text-gray-600 text-base sm:text-lg">{productDesription}</p>

          <div className="flex gap-4">
            <a href={tryDemo} className="text-blue-600 hover:underline">
              Try Demo
            </a>
            <a href={learnMore} className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="h-12" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
