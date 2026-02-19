import React from 'react'
import Solar1 from "../../assets/images/solar1.jpg";
import FloatingCards from "./FloatingCards";
import { MapPin, Users } from 'lucide-react';
import BusinessServices from './BusinessServices';
import WhyGreenRavenSection from './WhyGreenRavenSection';


const MainProductsServices = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Solar1}
            alt="Energy background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center mt-24">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 ">
            <span className="text-white">Products & Services</span>
          </h1>

          {/* Subtext */}
          <p className="text-white text-lg max-w-4xl mx-auto mb-10">
           Our core practice is to work directly with US-based and international manufacturers to procure hardware in high volume without middle-men that take a mark-up at each stage of the supply chain. If you are looking for solar panels, batteries, inverters or other materials that meet domestic content or other regulatory-driven needs at a fraction of the price, Green Raven is your solution.
          </p>

          {/* Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#facc15] hover:bg-[#eab308] text-slate-900 px-8 py-3 font-bold rounded shadow-sm transition-colors flex items-center justify-center gap-2">
              <Users size={18} />
              Become a Partner Installer
            </button>

            <button className="bg-white border-2 border-[#005596] text-[#005596] px-8 py-3 font-bold rounded shadow-sm flex items-center justify-center gap-2">
              <MapPin size={18} />
              View Service Areas
            </button>
          

            {/* <NavLink to="/">
        <button className="bg-white/20 backdrop-blur-md cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition">
          Our Solutions →
        </button>
      </NavLink> */}
          </div>

          <div>
            <h3 className="text-[20px] text-white font-semibold my-4">
             Does your traditional distributor offer any of the following?
            </h3>
            <FloatingCards />
          </div>
        </div>
      </section>

      <BusinessServices />
      <WhyGreenRavenSection/>
    </div>
  );
};
export default MainProductsServices
