import React from "react";

const FinancialToolsSection = () => {
  const mainImage =
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="bg-white font-sans overflow-hidden ">
      <div className="relative w-full">
        <div className="w-full h-[300px] md:h-[450px] lg:h-[520px]">
          <img
            src={mainImage}
            alt="Modern sustainable architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="absolute bottom-0 left-4 sm:left-6 lg:left-8 translate-y-1/2 bg-white px-6 py-5 shadow-xl flex items-center space-x-4 min-w-[240px]">
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#22c55e]"></div>

            <div className="relative w-7 h-7 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 21V12H15V21"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <rect x="11" y="14" width="2" height="2" fill="#ef4444" />
              </svg>
            </div>

            <span className="text-[13px] font-bold tracking-[0.25em] text-[#1e293b] uppercase">
              Finance Tools
            </span>
          </div>
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start">
          <div className="max-w-xl">
            <h2 className="text-[42px] md:text-[52px] pt-10 text-[#1e293b] leading-[1.1] tracking-tight">
              <span className="font-extrabold block">
                Commercial and Residential Finance
              </span>
            </h2>
          </div>

          <div className="flex flex-col space-y-5 text-left">
            <p className="text-gray-600 text-[18px] leading-relaxed">
              At Green Raven, we make clean energy affordable. Whether it&apos;s
              solar or geothermal, we provide the capital bridge you need to
              start saving from day one.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                <span className="text-[#1e293b] text-lg font-medium">
                  Flexible PPAs: We offer Commercial PPAs starting as low as 50
                  kW, plus streamlined Residential PPA options with no upfront
                  costs.
                </span>
              </li>
              <li className="flex items-center">
                <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                <span className="text-[#1e293b] text-lg font-medium">
                  Geothermal Solutions: Our high-efficiency geothermal systems
                  also come packaged as a PPA to fit your budget.
                </span>
              </li>
              <li className="flex items-center">
                <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                <span className="text-[#1e293b] text-lg font-medium">
                  Financial Assistance: From navigating tax credits to
                  connecting with capital partners, we provide the expertise to
                  ensure your project&apos;s financial success.
                </span>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FinancialToolsSection;
