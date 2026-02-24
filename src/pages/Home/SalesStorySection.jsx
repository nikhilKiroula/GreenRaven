import React from "react";
import { Play } from "lucide-react";

const SalesStorySection = () => {
  return (
    <section className=" py-2 mt-8  px-6">

      <div className="mx-8 bottom-[-28px] shadow-lg mb-8 w-[180px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
        <span className="text-green-600 text-xl">🧐</span>
        <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
          OVERVIEW
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* Big Heading */} <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-10 tracking-tight"> Great Organizations  <br /> {" "} <span className="text-green-600">Dominate Markets.</span> When They Build Trust.</h2>

          {/* Large Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Team strategy"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Top Small Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                alt="Meeting"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                alt="Workspace"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            GreenRaven is vertically integrated across the clean energy space.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 list-disc marker:text-green-600 text-gray-600 pt-2">
            <li className="">
              
              We partner with national sales organizations for solar, generator, geothermal and more.

            </li>

            <li className="">
              
              We offer partners access to our national network of finance partners.
            </li>

            <li className="">
              
              Our direct-to-manufacturer relationships provide hardware at half the price of the competition.

            </li>
            <li className="">
              
              Access  partnerships for prevailing wage installation services.

            </li>
            <li className="">
              
              Provide turnkey engineering services for commercial projects.


            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default SalesStorySection;
