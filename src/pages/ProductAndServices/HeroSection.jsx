// HeroSection.jsx
import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Products & Services
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <span className="text-sm text-blue-600 font-medium">
              Partner Rated
            </span>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Our core practice is to work directly with US-based and international manufacturers 
            to procure hardware in high volume without middle-men that take a mark-up at each 
            stage of the supply chain. If you are looking for solar panels, batteries, inverters 
            or other materials that meet domestic content or other regulatory-driven needs at a 
            fraction of the price, Green Raven is your solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#facc15] hover:bg-[#eab308] text-slate-900 px-8 py-3 font-bold rounded shadow-sm transition-colors flex items-center justify-center gap-2">
              <Users size={18} />
              Become a Partner Installer
            </button>

            <button className="bg-white border-2 border-[#005596] text-[#005596] px-8 py-3 font-bold rounded shadow-sm flex items-center justify-center gap-2">
              <MapPin size={18} />
              View Service Areas
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Solar Panels Installation"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;