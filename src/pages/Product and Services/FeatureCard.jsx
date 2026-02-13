// FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, bgColor = "bg-[#1a1f2e]" }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-xl shadow `}>
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <Icon size={40} />
      </div>
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;