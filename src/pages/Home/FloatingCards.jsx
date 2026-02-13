import { Truck, Users, CreditCard, FileCheck } from "lucide-react";

export default function ServicesFeatureSection() {
  const features = [
    {
      icon: Truck,
      title: "Manufacturer-direct equipment distribution",
      desc: "Nationwide fulfillment with no minimum volume requirements. Get factory pricing, faster delivery, and consistent quality across all projects.",
    },
    {
      icon: Users,
      title: "Installer + project matchmaking",
      desc: "We connect qualified sales organizations with vetted installers to ensure smooth execution, accountability, and faster project closeouts.",
    },
    {
      icon: CreditCard,
      title: "Financing tools for commercial projects",
      desc: "Flexible financing options designed for commercial-scale deployments, helping reduce upfront capital strain and accelerate approvals.",
    },
    {
      icon: FileCheck,
      title: "Permit-ready engineering & design support",
      desc: "Code-compliant, permit-ready drawings and engineering assistance to streamline approvals and eliminate costly rework.",
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
