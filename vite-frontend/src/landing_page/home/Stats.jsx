import React from "react";

function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold mb-6">Trust with confidence</h1>

          <div>
            <h2 className="text-xl font-medium mb-1">Customer-first always</h2>
            <p className="text-gray-600">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-1">No spam or gimmicks</h2>
            <p className="text-gray-600">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-1">The Zerodha universe</h2>
            <p className="text-gray-600">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-1">Do better with money</h2>
            <p className="text-gray-600">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image + Links Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="w-full max-w-md mb-6"
          />
          <div className="flex flex-col sm:flex-row gap-6 text-blue-600 text-lg font-medium">
            <a href="#" className="hover:underline flex items-center gap-2">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
