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
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            End-to-End Commercial Project Support
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From equipment sourcing to installation and permitting, we provide
            everything needed to execute commercial projects efficiently and at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
