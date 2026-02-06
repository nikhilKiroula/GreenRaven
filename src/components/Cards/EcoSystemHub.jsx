import { Factory, Users, CreditCard, FileCheck, Wrench, Leaf, Briefcase } from "lucide-react";

export default function EcosystemHub() {
  const items = [
    {
      title: "Sales Organizations",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      title: "Finance Tools (Commercial & Residential)",
      icon: CreditCard,
      color: "bg-indigo-500",
    },
    {
      title: "Permit-Ready Commercial Engineering",
      icon: FileCheck,
      color: "bg-emerald-500",
    },
    {
      title: "Installers",
      icon: Wrench,
      color: "bg-orange-500",
    },
    {
      title: "Prevailing Wage Consulting",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Hardware Direct from Manufacturer",
      icon: Factory,
      color: "bg-slate-600",
    },
    {
      title: "Geothermal Solutions",
      icon: Leaf,
      color: "bg-green-600",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The Green Raven Ecosystem
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A centralized platform connecting sales, hardware, installers,
            engineering, and financing to deliver commercial projects end-to-end.
          </p>
        </div>

        {/* Hub Layout */}
        <div className="relative flex items-center justify-center">
          {/* Center Node */}
          <div className="z-10 flex flex-col items-center justify-center h-40 w-40 rounded-full bg-slate-900 text-white shadow-xl">
            <span className="text-lg font-semibold">Green Raven</span>
            <span className="text-xs text-slate-300 mt-1">Project Hub</span>
          </div>

          {/* Orbit Items */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center max-w-[140px]"
              >
                <div
                  className={`h-14 w-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-md`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex gap-4 items-start"
            >
              <div
                className={`h-12 w-12 rounded-lg ${item.color} flex items-center justify-center text-white`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
