import React from "react";

const CommercialEnergySection = () => {
  return (
    <section className="w-full">
      {/* Image Section */}
      <div className="relative w-full h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1698752821927-776ac6cb0e91?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Commercial Energy"
          className="w-full h-full object-cover"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-emerald-600 rounded-md">
          <span className="text-emerald-600 text-xl">🏢</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Commercial Engineering
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
    <div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight py-5">
  Permit-Ready<br />
  <span className="font-medium">
    Commercial Engineering
  </span>
</h2>
<p>
    We provide accurate, permit-ready engineering designs to ensure your
    projects move from concept to approval without delays. Our team works
    closely with installers, AHJs, and utility providers to deliver
    documentation that meets compliance standards the first time.
  </p>
    </div>

        {/* Right */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-6">

  

  <p>
    From commercial solar layouts to structural calculations and electrical
    single-line diagrams, we eliminate costly revisions and streamline
    the permitting process so your projects stay on schedule.
  </p>

  <ul className="space-y-3 pt-2 list-disc marker:text-green-600 ">
    <li className="">
      
      Fast turnaround times to prevent project bottlenecks
    </li>

    <li className="">
      
      Highly accurate, code-compliant structural and electrical designs
    </li>

    <li className="">
      
      Utility & AHJ-ready documentation prepared for smooth approvals
    </li>

    <li className="">
      
      Professional engineering stamps where required
    </li>

    <li className="">
      
      Ongoing revision support to resolve jurisdiction feedback
    </li>
  </ul>

</div>

      </div>
    </section>
  );
};

export default CommercialEnergySection;
