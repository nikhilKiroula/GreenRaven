import React from "react";

const SalesStorySection = () => {

  const items = [
    { title: "Hardware Direct", subtitle: "From the Manufacturer", x: "50%", y: "5%" },
    { title: "Solar Installer", subtitle: "Network", x: "90%", y: "30%" },
    { title: "Geothermal", subtitle: "Solutions", x: "90%", y: "70%" },
    { title: "Permit-Ready", subtitle: "Engineering", x: "50%", y: "95%" },
    { title: "Sales", subtitle: "Organizations", x: "10%", y: "70%" },
    { title: "Finance Tools", subtitle: "Commercial & Residential", x: "10%", y: "30%" }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-green-50">

      {/* OVERVIEW */}
      <div className="mb-12 w-fit bg-white shadow-md flex items-center gap-3 px-6 py-3 border-b-4 border-green-600 rounded-md">
        <span className="text-green-600 text-lg">🔍</span>
        <span className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-700">
          overview
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10 text-center lg:text-left">
            Great Organizations <br />
            <span className="text-green-600">
              Dominate Markets.
            </span>
          </h2>

          {/* Diagram */}
          {/* Diagram */}
<div className="flex justify-center mt-6">

  <div className="relative w-full max-w-[380px] aspect-square">

    {/* connection lines */}
    <svg className="absolute inset-0 w-full h-full">

      {items.map((item, i) => (
        <line
          key={i}
          x1="50%"
          y1="50%"
          x2={item.x}
          y2={item.y}
          stroke="#22c55e"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          opacity="0.6"
        />
      ))}

    </svg>

    {/* center */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

      <div className="relative">

        <div className="absolute inset-0 w-28 h-28 bg-green-400 blur-xl opacity-30 rounded-full"></div>

        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
          Green Raven
        </div>

      </div>

    </div>

    {/* nodes */}
    {items.map((item, i) => (
      <div
        key={i}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: item.x, top: item.y }}
      >

        <div className="bg-white border border-gray-100 shadow-md rounded-lg px-3 py-2 w-28 md:w-32 text-center transition hover:shadow-lg hover:-translate-y-1">

          <p className="font-semibold text-gray-800 text-[11px] md:text-xs">
            {item.title}
          </p>

          <p className="text-[9px] md:text-[10px] text-gray-500">
            {item.subtitle}
          </p>

        </div>

      </div>
    ))}

  </div>

</div>

        </div>

        {/* RIGHT */}
        <div className="space-y-8 flex flex-col h-full">

          {/* images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              className="rounded-xl shadow-md h-32 md:h-40 w-full object-cover"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-xl shadow-md h-32 md:h-40 w-full object-cover"
              alt=""
            />

          </div>

          <p className="text-gray-800 font-semibold text-md  md:text-lg leading-relaxed">
            GreenRaven is vertically integrated across the clean energy space.
          </p>

          <ul className="space-y-3 list-disc marker:text-green-600 text-gray-600 pl-5 text-sm md:text-base">

            <li>
              We partner with national sales organizations for solar,
              generator, geothermal and more.
            </li>

            <li>
              We offer partners access to our national network of finance
              partners.
            </li>

            <li>
              Our direct-to-manufacturer relationships provide hardware at half
              the price of the competition.
            </li>

            <li>
              Access partnerships for prevailing wage installation services.
            </li>

            <li>
              Provide turnkey engineering services for commercial projects.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default SalesStorySection;