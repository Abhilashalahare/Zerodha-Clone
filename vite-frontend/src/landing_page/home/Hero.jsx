import React from "react";

function Hero() {
  return (
    <div className="px-4 pt-20 max-w-7xl mx-auto text-center">
      <img
        src="media/images/homeHero.png"
        alt="Hero"
        className="mx-auto mb-12 w-full max-w-4xl "
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
        Invest in everything
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-8">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg text-lg transition duration-300">
        Signup Now
      </button>
    </div>
  );
}

export default Hero;