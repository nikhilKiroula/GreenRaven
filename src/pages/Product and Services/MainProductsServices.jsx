import React from "react";
import Solar1 from "../../assets/images/Solar1.jpg";
import FloatingCards from "./FloatingCards";
import SalesSection from "./SalesSection";
import FinancialToolsSection from "./FinancialToolsSection";
import PermitReady from "./PermitReady";
import StrategicBusinessServices from "./StrategicBusinessServices";
import SolarPanels from "./SolarPanels";
import SalesSectionTwo from "./SalesSectionTwo";
import CommercialGeneratorsAndGeothermalSolutions from "./CommercialGenerators&GeothermalSolutions";

const MainProductsServices = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Solar1}
            alt="Energy background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center mt-24">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 ">
            <span className="text-white">
              MORE THAN YOUR DISTRIBUTOR. <br /> WE ARE YOUR END-TO-END ENERGY
              PARTNER.
            </span>
          </h1>

          <p className="text-white text-lg max-w-4xl mx-auto mb-10 font-semibold">
            Global procurement, custom financing, and expert engineering
            delivered anywhere in the U.S.
          </p>

          <div>
            <h3 className="text-[20px] text-white font-semibold my-4">
              Does your traditional distributor offer any of the following?
            </h3>
            <FloatingCards />
          </div>
        </div>
      </section>
      <SalesSection />
      <SolarPanels />
      <SalesSectionTwo />
      <FinancialToolsSection />
      <PermitReady />
      <CommercialGeneratorsAndGeothermalSolutions />
      <StrategicBusinessServices />
    </div>
  );
};

export default MainProductsServices;
