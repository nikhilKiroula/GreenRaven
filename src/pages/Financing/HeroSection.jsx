import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import HeroImg from "../../assets/images/financing.jpg"; 

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-29 pb-48">

      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">

              {/* ✅ Badge REMOVED */}

              {/* ✅ Updated Main Headline */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
                Line of Credit and Hardware Financing
              </h1>

              {/* ✅ Updated Subheading */}
              <p className="text-xl text-gray-200 leading-relaxed">
                Green Raven offers a line of credit and other business finance options to ease your cash flow and fuel your growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* ✅ Updated button text + URL */}
              <a
                href="https://www.fundwell.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:scale-105 font-semibold flex items-center justify-center gap-2"
              >
                Get Line of Credit
                <ArrowRight className="w-5 h-5" />
              </a>

              <button 
                className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Fast Approval</p>
                  <p className="text-sm text-gray-300">Quick quote in minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Flexible Terms</p>
                  <p className="text-sm text-gray-300">Customized solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="relative h-96 lg:h-full flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Background Image */}
              <img
                src={HeroImg}
                alt="Growth Background"
                className="absolute w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Content */}
              <div className="relative z-10 p-12 h-110 text-center text-white">
                <TrendingUp className="w-20 h-70 mx-auto mb-6 text-green-600" />
                
                <h3 className="text-2xl font-bold mb-3">
                  Growth Focused
                </h3>

                <p className="text-gray-200">
                  Financing designed to scale your business with confidence and flexibility.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div></div>
      </div>

    </section>
  );
}