import React from "react";
import { Play } from "lucide-react";

const SalesStorySection = () => {
  return (
    <section className=" py-15    px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          

          {/* Big Heading */} <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-10 tracking-tight"> Sales Organizations <br /> Generate Growth. Build Trust.{" "} <span className="text-[#cc0033]">Dominate Markets.</span> </h2>

          {/* Large Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Team strategy"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Top Small Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                alt="Meeting"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                alt="Workspace"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Description */}
<p className="text-gray-700 leading-relaxed">
  We help sales organizations connect with trusted installers, providing
  tools and resources for business success.
</p>

{/* Feature List */}
<ul className="space-y-3 text-gray-600 pt-2">
  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Nationwide sales support
  </li>

  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    CRM software integrations
  </li>

  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Installer matchmaking services
  </li>
</ul>

        </div>
      </div>
    </section>
  );
};

export default SalesStorySection;
