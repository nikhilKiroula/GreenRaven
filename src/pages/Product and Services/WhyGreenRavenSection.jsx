// WhyGreenRavenSection.jsx
import React from 'react';
import { Check } from 'lucide-react';

const WhyGreenRavenSection = () => {
  const benefits = [
    "Domestic Content Compliant",
    "No Shipping Markups",
    "Regulatory Expertise"
  ];

  const features = [
    {
      title: "Permit-Ready Design",
      description: "Quick turn-around, highly accurate engineering services for commercial solar projects. We have tackled projects that the largest solar company in the world said was not possible."
    },
    {
      title: "Generators & Geo-thermal",
      description: "In some situations, commercial customers may not have the physical room for a traditional solar array. We provide generators and geothermal products to meet these needs."
    }
  ];

  return (
    <div className="bg-[#0a1128] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-light mb-6">Why Green Raven?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              We communicate and support you way beyond just being an engineering firm.
              We are much more than that.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-green-600 rounded-full p-1">
                    <Check size={12} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#151f38] p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGreenRavenSection;