import React from 'react';

function Awards() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-6">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" className="w-full" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Largest stock broker in India</h1>
                    <p className="text-gray-700 mb-6">
                        2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                        {/* Left column */}
                        <ul className="space-y-2 w-full sm:w-1/2">
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>

                        {/* Right column */}
                        <ul className="space-y-2 w-full sm:w-1/2">
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div>

                    <img
                        src="/media/images/pressLogos.png"
                        alt="Press Logos"
                        className="w-full max-w-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;
