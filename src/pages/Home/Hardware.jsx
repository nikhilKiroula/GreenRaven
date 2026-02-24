import React from "react";
import { Play } from "lucide-react";

const Hardware = () => {
  return (
    <section className=" mb-8   px-6">

      <div className="mx-8 bottom-[-28px] shadow-lg mb-8 w-[280px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
        <span className="text-green-600 text-xl">🧐</span>
        <span className="uppercase tracking-widest text-sm font-semibold text-nowrap text-gray-700">
          Hardware Acquisition
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          

          {/* Big Heading */} 
        
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-10 tracking-tight"> Hardware  <br /> Premium Build Quality Direct from the<span className="text-green-600"> Manufacturer.</span> </h2>



          {/* Large Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616745207210-a98414926a3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdyZWVuJTIwZW5lcmd5JTIwaGFyZHdhcmV8ZW58MHx8MHx8fDA%3D"
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
                src="https://plus.unsplash.com/premium_photo-1682144321844-ee7d148c83f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGdyZWVuJTIwZW5lcmd5JTIwaGFyZHdhcmV8ZW58MHx8MHx8fDA%3D"
                alt="Meeting"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxncmVlbiUyMGVuZXJneSUyMGhhcmR3YXJlfGVufDB8fDB8fHww"
                alt="Workspace"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Description */}
<p className="text-gray-700 leading-relaxed">
 Leverage our direct-to-manufacturer relationships and greatly increase the growth of your business.

</p>

{/* Feature List */}
<ul className="list-disc marker:text-green-600 space-y-3 text-gray-600 pt-2">
  <li className="">
    
    Solar panels, inverters, batteries and more at pricing significantly lower than our competition without the large volume typically needed in order to realize those savings.
  </li>

  <li className="">
    
    Products include commercial generators and other energy equipment supply.
  </li>
  <li className="">
    Trusted manufacturers for either US Domestic content or low cost international suppliers.
  </li>

  <li className="">
    U.S. shipping is guaranteed to be the lowest in the U.S. with no hidden “handling or markups.
  </li>

  
</ul>


        </div>
      </div>
    </section>
  );
};

export default Hardware;
