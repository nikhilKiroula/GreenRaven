import React from "react";

const SalesSection = () => {
  // Mock image URLs for placeholders that match the vibe of the original image
  const images = {
    topSmall1:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", // Two women with laptop
    topSmall2:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // Team meeting
    bottomLarge:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Large office space
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Container: Using a 2-column grid to ensure vertical alignment.
          The left side contains the Heading and Large Image.
          The right side contains the Small Images and Description.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
          {/* LEFT COLUMN: Heading + Large Image */}
          <div className="flex flex-col space-y-10">
            {/* Heading Section */}
            <div className="mt-10">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1e293b] leading-[1.1] tracking-tight">
                Direct Procurement. <br />
                <span className="text-[#22c55e]">No-Middle-Men</span>
              </h1>
            </div>

            {/* Large Bottom Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.4/0.9] mt-16">
              <img
                src={images.bottomLarge}
                alt="Modern office workplace"
                className="absolute inset-0 w-full h-full object-cover rounded-[32px] shadow-sm"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Two Small Images + Text Content */}
          <div className="flex flex-col space-y-10">
            {/* Top Right Images Grid */}
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

            {/* Content Section */}
            <div className="flex flex-col space-y-10  text-justify">
              <p className="text-gray-600 text-[24px] leading-relaxed  ">
                Our core practice is to work directly with US-based and
                international manufacturers to procure hardware in high volume
                without middle-men that take a mark-up at each stage of the
                supply chain. If you are looking for solar panels, batteries,
                inverters or other materials that meet domestic content or other
                regulatory-driven needs at a fraction of the price, Green Raven
                is your solution.
              </p>
              {/* 
              <ul className="space-y-5">
                <li className="flex items-center">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    Nationwide sales support
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    CRM software integrations
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#22c55e] mr-4 flex-shrink-0"></span>
                  <span className="text-[#1e293b] text-lg font-medium">
                    Installer matchmaking services
                  </span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection
