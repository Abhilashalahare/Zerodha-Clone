import React from "react";

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="pt-12 border-t">
        <h1 className="text-3xl text-center font-semibold">People</h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 py-10 text-base sm:text-lg leading-relaxed">
        {/* Left - Image & Name */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-full w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 object-cover"
          />
          <h4 className="text-xl font-medium mt-6">Nithin Kamath</h4>
          <h6 className="text-gray-500 text-sm">Founder, CEO</h6>
        </div>

        {/* Right - Description */}
        <div className="space-y-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
