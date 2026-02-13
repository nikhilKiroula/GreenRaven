// BusinessServicesSection.jsx
import React from 'react';
import { Check } from 'lucide-react';

const BusinessServicesSection = () => {
  const services = [
    "Custom solar-specific CRM or tracking software",
    "Process automation and sales optimization",
    "Connecting sales organizations with installation partners"
  ];

  return (
    <div className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-light text-slate-800 mb-4">
                Business Services
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed">
                We cultivate partnerships with finance partners, software companies
                and other service providers while consulting to develop business infrastructures.
              </p>

              <ul className="space-y-3 mb-8 text-slate-700">
                {services.map((service, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <Check className="text-blue-600 mt-1" size={16} />
                    {service}
                  </li>
                ))}
              </ul>

              <button className="bg-[#005596] text-white px-8 py-3 font-bold rounded shadow hover:bg-[#004478] transition-colors self-start">
                Explore Consulting
              </button>
            </div>

            <div className="lg:w-1/2 bg-slate-100 min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Business Consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessServicesSection;