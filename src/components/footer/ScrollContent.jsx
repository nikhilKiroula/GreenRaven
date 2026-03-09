import React from "react";

const ScrollContent = () => {
  const items = [
    "Direct Manufacturer Relationships",
    "Nationwide U.S. Shipping",
    "Commercial & Residential Installations Supported",
    "Installer-Only Distribution",
    "Geothermal Solutions",
    "Engineering",
    "Commercial Financing",
    "Solar-specific Compliance",
  ];
  return (
    <div className="relative w-full  flex items-center overflow-hidden bg-white border-b border-slate-200">
      <div className="flex w-max h-full   animate-marquee px-6 py-4 text-sm md:text-base font-medium text-slate-700 ">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="shrink-0 bg-slate-100 px-12 py-4">
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollContent;
