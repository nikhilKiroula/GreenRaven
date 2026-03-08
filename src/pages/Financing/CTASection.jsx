import { ArrowRight } from "lucide-react";

/**
 * CTA Section Component
 * Design: Modern Professional - Full-width gradient background with strong call-to-action
 * Colors: Blue-700 to Emerald-600 gradient
 */

export default function CTASection() {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center space-y-8">
        
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Get Started?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-blue-50 max-w-2xl mx-auto">
          Get your personalized financing quote today. Our team is ready to help you grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          
          {/* Primary Button */}
          <button
            className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-slate-100 text-base px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Get Your Price Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          {/* Secondary Button */}
          <button
            className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 text-base px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Contact Sales
          </button>

        </div>
      </div>
    </section>
  );
}