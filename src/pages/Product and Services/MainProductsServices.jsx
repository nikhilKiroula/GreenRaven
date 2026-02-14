import React from 'react'
import ResourcesSection from './ResourcesSection';
import WhyGreenRavenSection from './WhyGreenRavenSection';
import BusinessServicesSection from './BusinessServicesSection';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';
import ReadyToGrow from './ReadyToGrow';

const MainProductsServices = () => {
  return (
    <div className="bg-white font-sans text-slate-800 mt-10">
      <HeroSection />
      <FeaturesSection />
      <BusinessServicesSection />
      <WhyGreenRavenSection />
      <ResourcesSection />
      <ReadyToGrow />
    </div>
  );
};

export default MainProductsServices
