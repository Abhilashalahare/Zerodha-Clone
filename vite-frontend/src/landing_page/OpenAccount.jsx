import React from 'react'

function OpenAccount() {
    return ( 
        <div className="px-4 pt-20 max-w-7xl mx-auto text-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Open a Zerodha account
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-5">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg text-lg transition duration-300">
          Sign up Now
        </button>
      </div>
     );
}

export default OpenAccount;