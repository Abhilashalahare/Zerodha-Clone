import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="border-b pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Pricing</h1>
        <h3 className="text-gray-600 text-base sm:text-lg mt-3">
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 text-center">
        <div className="space-y-4">
          <img src="media/images/pricingEquity.svg" alt="Equity Delivery" className="mx-auto h-16" />
          <h2 className="text-xl font-semibold">Free equity delivery</h2>
          <p className="text-gray-500 text-sm">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="space-y-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trades" className="mx-auto h-16" />
          <h2 className="text-xl font-semibold">Intraday and F&amp;O trades</h2>
          <p className="text-gray-500 text-sm">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across
            equity, currency, and commodity trades.
          </p>
        </div>

        <div className="space-y-4">
          <img src="media/images/pricingEquity.svg" alt="Direct MF" className="mx-auto h-16" />
          <h2 className="text-xl font-semibold">Free direct MF</h2>
          <p className="text-gray-500 text-sm">
            All direct mutual fund investments are absolutely free — ₹0 commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
