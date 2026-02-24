import React from "react";

const ResidentialEnergySection = () => {
  return (
    <section className="w-full ">
      {/* Image Section */}
      <div className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Residential Energy"
          className="w-full h-full object-cover"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
          <span className="text-green-600 text-xl">🏡</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Financial Tools
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Flexible solar financing <br />
          <span className="font-medium"> (Commercial & Residential)</span>
        </h2>

        {/* Right */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          <p>
            Through strategic partnerships, GreenRaven provides access to residential and commercial solar projects expanding accessibility for our partner’s services.
          </p>

          <ul className="list-disc marker:text-green-600 pl-6 space-y-2">
            <li>Access residential PPA’s regardless of your company sales volume.</li>
            <li>Access commercial PPA’s, even for small system sizes.</li>
            <li>SUnique finance access for otherwise “impossible” to finance projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResidentialEnergySection;
