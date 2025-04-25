import React from "react";

function Universe() {
  const platforms = [
    {
      logo: "media/images/smallcaseLogo.png",
      description: "Thematic investment platform",
    },
    {
      logo: "media/images/streakLogo.png",
      description: "Market analysis and research",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      description: "Algo & strategy-based trading",
    },
    {
      logo: "media/images/zerodhaFundhouse.png",
      description: "Options trading simplified",
    },
    {
      logo: "media/images/goldenpiLogo.png",
      description: "Startup incubator and fund",
    },
    {
      logo: "media/images/dittoLogo.png",
      description: "Open education for investing",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">The Zerodha Universe</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mb-10">
        {platforms.map((platform, i) => (
          <div key={i} className="space-y-3">
            <img
              src={platform.logo}
              alt="Platform logo"
              className="mx-auto h-12 sm:h-14 object-contain mt-5"
            />
            <p className="text-gray-500 text-sm">{platform.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white text-lg px-6 py-2 rounded hover:bg-blue-700 transition">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
