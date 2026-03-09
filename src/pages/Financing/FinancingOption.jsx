import { ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Financing Options Component
 * Updated: Invoice description simplified, Purchase Order → Line of Credit,
 * Three separate buttons merged into one shared "Learn More" button linking to fundwell.com
 */

const financingOptions = [
  {
    icon: "📊",
    title: "Invoice Financing",
    // ✅ Updated description
    description: "Get paid in advance on your outstanding accounts receivables for quick cash flow",
    features: ["Fast funding", "Flexible terms", "No hidden fees"]
  },
  {
    icon: "💼",
    title: "Business Loans",
    description: "Tailored business loans to fuel your growth and expansion",
    features: ["Competitive rates", "Quick approval", "Expert support"]
  },
  {
    // ✅ Updated: Purchase Order Financing → Line of Credit
    icon: "🎯",
    title: "Line of Credit",
    description: "Finance your Green Raven invoices (and more) to scale your operations",
    features: ["Working capital", "Up to $1M line of credit", "No liens on your customer's property"]
  }
];

export default function FinancingOptions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Financing Options
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from our range of flexible financing solutions designed for businesses of all sizes
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {financingOptions.map((option, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden border border-slate-200 rounded-lg hover:border-green-600 transition-all duration-300 cursor-pointer bg-white"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="text-5xl">{option.icon}</div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Border Accent */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* ✅ Single shared "Learn More" button linking to fundwell.com */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.fundwell.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}