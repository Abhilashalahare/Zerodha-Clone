import React from "react";

function Hero() {
  return (
    <div className="border-b mb-10">
      <div className="text-center mt-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Technology</h1>
        <h3 className="text-gray-500 mt-4 text-lg sm:text-xl font-medium">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-4 mb-8 text-base sm:text-lg">
          Check out our{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
