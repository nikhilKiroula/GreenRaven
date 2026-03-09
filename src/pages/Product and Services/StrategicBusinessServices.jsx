import React from "react";

const StrategicBusinessServices = () => {
  const images = {
    topSmall1:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    topSmall2:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    bottomLarge:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  };

  return (
    <section className="bg-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-4 bg-white px-6 py-5 shadow-xl relative mb-10">
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
            Business Services
          </span>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start ">
          <div className="flex flex-col space-y-10">
            <div className="pt-10">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1e293b] leading-[1.1] tracking-tight">
                Strategic <br />
                <span className="text-[#22c55e]">Business Services</span>
              </h1>
            </div>

            <div className="relative w-full aspect-[4/3] lg:aspect-[1.4/0.9] mt-16">
              <img
                src={images.bottomLarge}
                alt="Modern office workplace"
                className="absolute inset-0 w-full h-full object-cover rounded-[32px] shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[1.4/1]">
                <img
                  src={images.topSmall1}
                  alt="Business collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                />
              </div>
              <div className="aspect-[1.4/1]">
                <img
                  src={images.topSmall2}
                  alt="Team discussion"
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-5 text-left pt-4">
              <p className="text-gray-600 text-[18px] leading-relaxed ">
                Leverage decades of expertise and a nationwide network. Beyond
                hardware, we provide the consultative tools and partnerships
                necessary to scale your energy business.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    Solar-Specific Software: Custom CRM and tracking solutions
                    built specifically to manage solar workflows and lead
                    pipelines.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    Process Automation: Expert consulting to optimize your sales
                    funnel and automate repetitive tasks for maximum efficiency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    Strategic Networking: We bridge the gap between sales
                    organizations and reliable installation partners, providing
                    the tools you need to execute perfectly.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicBusinessServices;
