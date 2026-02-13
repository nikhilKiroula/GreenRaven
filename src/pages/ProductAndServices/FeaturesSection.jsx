// FeaturesSection.jsx
import React from 'react';
import { Building2, FileCheck, Factory } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Commercial & Residential Finance",
      description: "Commercial PPAs, residential financing and geothermal funding solutions tailored to your business needs."
    },
    {
      icon: FileCheck,
      title: "Permit-ready Design",
      description: "Accurate engineering and permit-ready solar designs with fast turnaround and full project support."
    },
    {
      icon: Factory,
      title: "Generators & Geo-thermal Solutions",
      description: "When solar arrays are not feasible, we provide generators and geothermal systems to meet commercial energy demands."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Does your traditional distributor offer any of the following?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;