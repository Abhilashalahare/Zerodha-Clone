import React from "react";

const sections = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user",
    links: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Your Zerodha Account", // you can rename it as needed
    icon: "fa-line-chart",
    links: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
  {
    title: "Funds",
    icon: "fa-credit-card",
    links: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    title: "Console",
    icon: "-solid fa-circle-notch",
    links: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "IPO",
      "Referral Program",
    ],
  },
  {
    title: "Coin",
    icon: "-regular fa-circle",
    links: [
      "Understanding Mutual Funds",
      "About Coin",
      "Buying and Selling through Coin",
      "Starting an SIP",
      "Managing your Portfolio",
      "Coin App",
      "Moving to Coin",
      "Government Securities",
    ],
  },
];

const TopicSection = ({ title, icon, links }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
      <i className={`fa ${icon}`} aria-hidden="true"></i> {title}
    </h4>
    <ul className="space-y-2">
      {links.map((item, index) => (
        <li key={index}>
          <a href="#" className="text-blue-600 hover:underline block">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function CreateTicket() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-10">
        To create a ticket, select a relevant topic
      </h1>
      <div className="flex flex-wrap -mx-4">
        {sections.map((section, idx) => (
          <TopicSection key={idx} {...section} />
        ))}
      </div>
    </div>
  );
}
