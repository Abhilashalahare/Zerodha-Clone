import React from "react";

function Hero() {
  return (
    <section className="w-full bg-blue-500 px-6 sm:px-10 lg:px-48" id="supportHero ">
      <div className="p-6 flex  ">
        <h4 className="text-white text-2xl font-semibold mb-2 lg:ml-5 md:ml-5">Support Portal</h4>
        <a href="#" className="text-white underline lg:ml-115 ml-60">
          Track Tickets
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4 text-white">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:ring-2 bg-white"
          />

          <div className="space-y-2 text-white text-sm">
            <a href="#" className="block underline">
              Track account opening
            </a>
            <a href="#" className="block underline">
              Track segment activation
            </a>
            <a href="#" className="block underline">
              Intraday margins
            </a>
            <a href="#" className="block underline">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:ml-20">
          <h1 className="text-white text-xl font-semibold mb-4 ">Featured</h1>
          <ol className="list-decimal list-inside space-y-2 text-white text-sm">
            <li>
              <a href="#" className="underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
