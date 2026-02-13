import React from "react";

const GeothermalSolutions = () => {
  return (
    <section className="w-full py-8">
      {/* Image Section */}
      <div className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VvdGhlcm1hbCUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Residential Energy"
          className="w-full h-full object-cover"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
          <span className="text-green-600 text-xl">🏡</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Geothermal Solutions
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Reliable thermal energy systems  <br />
          <span className="font-medium"> for commercial and industrial applications.</span>
        </h2>

        {/* Right */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          <p>
          Green Raven provides geothermal solutions for commercial and industrial projects where traditional solar may not be feasible. Our geothermal systems deliver efficient heating and cooling while reducing operating costs and long-term energy dependence.
            
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Commercial-scale geothermal heating & cooling systems</li>
            <li>System design, equipment sourcing, and logistics support</li>
            <li>Integration with solar and generator solutions</li>
            <li>Trusted manufacturer partnerships</li>
            <li>
Support for new construction and retrofit projects</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default GeothermalSolutions;
