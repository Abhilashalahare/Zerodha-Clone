import React from "react";

function Brokerage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 border-t mt-10">
      <div className="flex flex-col lg:flex-row justify-center gap-10 text-center lg:text-left">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-4">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">Brokerage calculator</h3>
          </a>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-2">
            <li>
              Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start items-start pt-4">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
