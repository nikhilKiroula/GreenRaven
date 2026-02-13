import React from "react";
import { Play } from "lucide-react";

const Hardware = () => {
  return (
    <section className=" py-20    px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          

          {/* Big Heading */} 
          {/* Big Heading */}
<h2 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-6 text-[#cc0033] tracking-tight">
 Hardware 
</h2>

<p className="text-2xl text-gray-700 leading-relaxed mb-6 max-w-xl">
Direct from the Manufacturer
</p>



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
 Prosure soler and energy resuipment directty-from, tep manufacteries, chin nasing miochemen

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
    Penels inverters, batteries, and more
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

export default Hardware;
