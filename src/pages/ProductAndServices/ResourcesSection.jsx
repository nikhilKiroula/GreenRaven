// ResourcesSection.jsx
import React from 'react';
import { Download } from 'lucide-react';

const ResourceItem = ({ title }) => {
  return (
    <a 
      href="#" 
      className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded hover:border-blue-500 hover:shadow-md transition-all group"
    >
      <span className="font-medium text-slate-700 group-hover:text-blue-700">
        {title}
      </span>
      <Download size={20} className="text-slate-400 group-hover:text-blue-600" />
    </a>
  );
};

const ResourcesSection = () => {
  const resources = [
    'PPA Terms Sheet',
    'Commercial Finance Guide',
    'Geo-Thermal Specs',
    'Installation Partner Guide',
    'Shipping Policy'
  ];

  return (
    <div className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-slate-800 mb-8 border-b border-slate-300 pb-4">
          Resources & Docs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <ResourceItem key={index} title={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;