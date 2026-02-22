import React from "react";
import Solar1 from "../../assets/images/Solar1.jpg";
import FloatingCards from "./FloatingCards";
import { MapPin, Users } from "lucide-react";
import SalesSection from "./SalesSection";
import FinancialToolsSection from "./FinancialToolsSection";
import PermitReady from "./PermitReady";
import CommercialGenerators from "./CommercialGenerators";
import StrategicBusinessServices from "./StrategicBusinessServices";

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
            <span className="text-white">
              MUCH MORE THAN A DISTRIBUTER <br /> YOUR END-TO-END ENERGY
              PARTNER.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white text-lg max-w-4xl mx-auto mb-10 font-semibold">
            Global procurement, custom financing, and expert engineering—delivered anywhere in the U.S.
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
          </div>

          <div>
            <h3 className="text-[20px] text-white font-semibold my-4">
              Does your traditional distributor offer any of the following?
            </h3>
            <FloatingCards />
          </div>
        </div>
      </section>
      <SalesSection />
      <FinancialToolsSection/>
      <PermitReady/>
      <CommercialGenerators/>
      <StrategicBusinessServices/>
    </div>
  );
};
export default MainProductsServices;
