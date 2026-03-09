import React from "react";
import { NavLink } from "react-router-dom";

const Hardware = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-green-50">

      {/* Section Tag */}
      <div className="mb-12 w-fit bg-white shadow-md flex items-center gap-3 px-6 py-3 border-b-4 border-green-600 rounded-md">
        <span className="text-green-600 text-lg">⚙️</span>
        <span className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-700">
          Hardware Acquisition
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="h-full">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10 text-center lg:text-left">

            
            Premium Hardware Direct from the <span className="text-green-600">Manufacturer at</span> Greatly Reduced Pricing
          </h2>

          {/* Large Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXJ8ZW58MHx8MHx8fDA%3D"
              alt="Green Energy Hardware"
              className="w-full h-[300px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8 h-full">

          {/* Small Images */}
          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src="https://plus.unsplash.com/premium_photo-1682144321844-ee7d148c83f8"
                alt="Hardware Equipment"
                className="w-full h-32 md:h-40 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded"
                alt="Energy Hardware"
                className="w-full h-32 md:h-40 object-cover hover:scale-105 transition duration-500"
              />
            </div>

          </div>

          {/* Description */}
          <p className="text-gray-800 font-semibold text-md md:text-lg leading-relaxed">
            Leverage our direct-to-manufacturer relationships and greatly increase
            the growth of your business.
          </p>

          {/* Feature List */}
          <ul className="list-disc marker:text-green-600 space-y-3 text-gray-600 pl-5 text-sm md:text-base">

            <li>
              Solar panels, inverters, batteries and more at pricing significantly
              lower than our competition without the large volume typically needed.
            </li>

            <li>
              Products include commercial generators and other energy equipment
              supply.
            </li>

            <li>
              Trusted manufacturers for either U.S. domestic content or low-cost
              international suppliers.
            </li>

            <li>
             Shipping guaranteed to be the lowest in the U.S. with no mark-up or handling fees.
            </li>
            <li>
              Up to a $1M line of credit with no liens on your customer’s property
            </li>

          </ul>

          {/* ! get a quote */}
          <div className="text-center mb-10">
            <p className="text-gray-900 font-semibold text-lg">
              Yes! You can reduce your hardware costs{" "}
              <span className="text-green-600">as much as 50%</span>.
              <br />
              Seriously. Make just one call and see the difference.
            </p>

            {/* BUTTON */}
            <NavLink
              to="/get_quote"
              className="inline-block mt-6 bg-green-600 text-white px-12 py-3 text-xl rounded-md font-medium hover:bg-green-700 transition duration-300"
            >
              Get a Quote
            </NavLink>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hardware;