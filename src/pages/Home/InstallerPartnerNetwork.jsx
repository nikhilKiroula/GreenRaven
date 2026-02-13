import React from "react";
import { Play } from "lucide-react";

const InstallerPartenerNetwork = () => {
  return (
    <section className=" py-20    px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          

          {/* Big Heading */} 
          {/* Big Heading */}
<h2 className="text-4xl md:text-5xl text-[#cc0033] font-bold leading-[1.15] mb-6 tracking-tight">
  Installers
</h2>

<p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
  Join our premier installer partner network and gain access to qualified
  projects, nationwide opportunities, and strategic growth support designed
  to scale your business.
</p>



          {/* Large Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1682145376863-70740bd7bd0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBlbmVyZ3klMjBpbnN0YWxsZXJ8ZW58MHx8MHx8fDA%3D"
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
                src="https://media.istockphoto.com/id/2223881115/photo/engineer-service-check-and-service-solar-cell-on-the-roof-of-factory-engineers-walking-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=hmMVBz5_io0CPiyHcOYuVFDhumUzoslXwTNHxwmXHsI="
                alt="Meeting"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1663089776566-b7e01c40cf36?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Workspace"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Description */}
<p className="text-gray-700 leading-relaxed">
 Prevalling Wage Consulting
Ensure Davis-Bacon compliance and certified payroll reporting confidence for your public works projects.
</p>

{/* Feature List */}
<ul className="space-y-3 text-gray-600 pt-2">
  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Nationwide shipping at volume pricing
  </li>

  

  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Trusted US and international suppliers
  </li>
  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Nationwide installer partner network
  </li>

  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Project matchmaking services
  </li>

  <li className="flex items-start gap-3">
    <span className="w-2 h-2 bg-[#cc0033] rounded-full mt-2"></span>
    Volume pricing and exclusive access
  </li>
</ul>

        </div>
      </div>
    </section>
  );
};

export default InstallerPartenerNetwork;
