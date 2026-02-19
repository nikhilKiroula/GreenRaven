import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const BusinessServices = () => {
  return (
    <section className="w-full ">
      {/* Image Section */}
      <div className="relative w-full h-[720px] ">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="Business Consulting"
          className="w-full h-full object-cover object-top"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
          <span className="text-green-600 text-xl">🏡</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Business Services
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols">
       

        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          <p className="text-2xl my-0 mb-4.5">
           We cultivate partnerships with finance partners, software companies and other service providers while consulting to develop business infrastructures.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Custom solar-specific CRM or tracking software</li>
            <li>Process automation and sales optimization</li>
            <li>Connecting sales organizations with installation partners</li>
          </ul>
        </div>
       
       
         {/* Button Section */}
              <div>
              <button className="bg-[#005596] text-white px-8 py-3 font-bold rounded shadow hover:bg-[#004478] transition-colors self-start mt-4.5 mx-2">
                Explore Consulting
              </button>
              </div>
      </div>
    </section>
  );
};

export default BusinessServices;
