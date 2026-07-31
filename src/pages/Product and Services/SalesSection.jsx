import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/bernd-dittrich-g-SFUAYL0MY-unsplash.jpg";
import img2 from "../../assets/images/elevate-GAdkOpqbTfo-unsplash.jpg";
import img3 from "../../assets/images/newpowa-NT_E4K4-0IM-unsplash.jpg";

const SalesSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
          <div className="flex flex-col space-y-10">
            <div className="mt-10">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1e293b] leading-[1.1] tracking-tight">
                Direct Procurement. <br />
                <span className="text-[#22c55e]">No-Middle-Men</span>
              </h1>
            </div>

            <div className="relative w-full aspect-[4/3] lg:aspect-[1.4/0.9] mt-16">
              <img
                src={img1}
                alt="Modern office workplace"
                className="absolute inset-0 w-full h-full object-cover rounded-[32px] shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[1.4/1]">
                <img
                  src={img2}
                  alt="Business collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                />
              </div>
              <div className="aspect-[1.4/1]">
                <img
                  src={img3}
                  alt="Team discussion"
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4 text-left lg:pt-4">
              <p className="text-gray-600 text-[18px] leading-relaxed">
                Our core practice is to work directly with US-based and
                international manufacturers to procure hardware in high volume
                without the middlemen or costly infrastructure like our
                competition.
              </p>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                We also offer up to a $1M line of credit with no lien placed on
                your customer&apos;s property.
              </p>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                We supply solar panels, batteries and inverters to meet any
                needs. Whether you need US domestic content hardware or more
                competitive pricing for the top rated imported products, Green
                Raven is your solution at prices that are unmatched. Even our
                shipping costs are the lowest in the industry.
              </p>
              <p className="text-[#1e293b] text-[24px] font-semibold leading-tight pt-2 text-center">
                Reduce your hardware costs <br /> by up to 40% off on your
                hardware!
              </p>
              <div className="flex justify-center">
                <Link
                  to="/get_quote"
                  className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-md transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
