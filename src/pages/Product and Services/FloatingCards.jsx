import { Truck, Users, CreditCard, FileCheck } from "lucide-react";

export default function ServicesFeatureSection() {
  const features = [
    {
      icon: Truck,
      title: "Commercial & Residential Finance",
      desc: "Commercial PPAs, residential financing and geothermal funding solutions tailored to your business needs.",
    },
    {
      icon: Users,
      title: "Permit-ready Design",
      desc: "Accurate engineering and permit-ready solar designs with fast turnaround and full project support.",
    },
    {
      icon: CreditCard,
      title: "Generators & Geo-thermal Solutions",
      desc: "When solar arrays are not feasible, we provide generators and geothermal systems to meet commercial energy demands.",
    },
    
  ];

  return (
    <article className="relative py-2">
          <div className="flex flex-wrap text-white gap-4 justify-center ">
             {features.map((item, idx) => (
            <div key={idx} className="shadow-lg p-3 backdrop-blur-sm h-250px w-[300px] rounded-lg bg-white/10 hover:-translate-y-3 transition-all ease-in-out duration-300">
              {/* Icon */}
             

              {/* Title */}
              <h3 className=" font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="  text-[14px]">
                {item.desc}
              </p>
            </div>
          ))}
          </div>
    </article>
  );
}
