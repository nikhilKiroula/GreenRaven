import {
  FaDollarSign,
  FaClock,
  FaSyncAlt,
  FaBox,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaDollarSign />,
    text: "Tell us your project scope + target delivery date",
  },
  {
    id: 2,
    icon: <FaClock />,
    text: "We source equipment directly from manufacturers (often with volume pricing)",
  },
  {
    id: 3,
    icon: <FaTruck />,
    text: "We ship any volume anywhere in the U.S. (jobsite or warehouse delivery)",
  },
  {
    id: 4,
    icon: <FaSyncAlt />,
    text: "We connect installers to financing & service partners (PPA providers, AI-driven site surveys, and more)",
  },
  {
    id: 5,
    icon: <FaBox />,
    text: "We stay engaged throughout every stage of growth",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-white  ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 pl-10">
          <h2 className="text-7xl font-semibold mb-6 leading-tight">
            <span className="block">How</span>
            <span className="">We </span>
            <span className="text-green-600">Work</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-[22px] text-justify w-100">
            Green Raven supports energy projects by combining
            manufacturer-direct supply with end-to-end execution support.
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="lg:col-span-7  flex items-center pl-20">
          <div className="space-y-6 max-w-[560px]">
            {steps.map((step, index) => (
              <div key={step.id} className="group">
                <div className="flex items-start gap-6">
                  {/* ICON */}
                  <div className="text-gray-500 text-xl mt-1 transition-all duration-300 group-hover:text-green-600 group-hover:scale-125">
                    {step.icon}
                  </div>

                  {/* TEXT + DIVIDER */}
                  <div className="w-full">
                    <p className="text-gray-900 leading-relaxed text-[16px] ">
                      {step.text}
                    </p>

                    {/* DIVIDER */}
                    {index !== steps.length && (
                      <div className="mt-2 h-px w-full border border-gray-200 transition-colors duration-300 group-hover:bg-gray-300" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
