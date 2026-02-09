import { useRef } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import aboutVideo from "https://drive.google.com/file/d/1EdF2YlZT2DS6ar1l7TgVGAsEuKfHFLme/view";

const About = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 25;
    const moveY = (y - centerY) / 25;

    container.style.setProperty("--move-x", `${-moveX}px`);
    container.style.setProperty("--move-y", `${-moveY}px`);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    container.style.setProperty("--move-x", `0px`);
    container.style.setProperty("--move-y", `0px`);
  };

  const steps = [
    { id: "01", text: "Tell us your project scope + target delivery date" },
    { id: "02", text: "We source equipment directly from manufacturers" },
    { id: "03", text: "We ship any volume anywhere in the U.S." },
    { id: "04", text: "We connect installers to financing & service partners" },
    { id: "05", text: "We stay engaged throughout every stage of growth" },
  ];

  const marqueeItems = [
    "Manufacturer Direct Supply",
    "Commercial & Residential Solar",
    "Installer Partnerships",
    "Project Financing",
    "Engineering & Permits",
    "Nationwide Logistics",
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] md:h-[80vh] min-h-[520px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="flex w-full justify-between items-center">
            {/* LEFT HERO CONTENT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                About{" "}
                <span className="relative inline-block ml-2">
                  Us
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-red-600"></span>
                </span>
              </h1>

              <button className="group mt-10 inline-flex items-center bg-red-700 px-8 py-4">
                <span className="text-white text-sm font-medium transition-transform group-hover:-translate-x-2">
                  View open positions
                </span>
                <span className="ml-3 text-white opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </button>
            </div>

            {/* RIGHT CONTINUOUS CONTENT */}
            <div className="hidden lg:block relative h-[260px] w-[260px] overflow-hidden">
              <div className="absolute inset-0 animate-vertical-marquee space-y-6 text-right text-white/90 text-[20px] font-medium uppercase tracking-wide">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes vertical-marquee {
              0% { transform: translateY(0%); }
              100% { transform: translateY(-50%); }
            }
            .animate-vertical-marquee {
              animation: vertical-marquee 10s linear infinite;
            }
          `}
        </style>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-24">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{ "--move-x": "0px", "--move-y": "0px" }}
        >
          {[
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
            "https://wallpaperaccess.com/full/1663640.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-full h-[300px] md:h-[380px] object-cover rounded-md transition-transform duration-500"
              style={{
                transform: `translate(calc(var(--move-x) * ${
                  1 - i * 0.2
                }), calc(var(--move-y) * ${1 - i * 0.2}))`,
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT TEXT ================= */}
      <section className="bg-[#0B132B] mt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-gray-100 space-y-6 leading-relaxed">
            <p>
              Built by industry veterans with decades of experience, GreenRaven
              has been developing manufacturer and installer relationships since
              2012.
            </p>
            <p>
              We eliminate unnecessary middlemen while ensuring speed,
              transparency, and industry-grade support.
            </p>
          </div>

          <div className="bg-white rounded-md p-10 shadow-xl hover:-translate-y-2 transition-all">
            <p className="text-gray-700 leading-relaxed">
              After testing Green Raven for a commercial project, we cut material
              costs almost in half. Incredible support and communication.
            </p>
            <p className="mt-4 font-semibold text-gray-900">– John K.</p>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-semibold mb-6">How We Work</h2>
            <p className="text-gray-700 leading-relaxed">
              Manufacturer-direct supply combined with execution support.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 border rounded-md p-8 shadow hover:-translate-y-1 transition-all ease-in-out duration-300 hover:shadow-xl"
              >
                <span className="text-sm text-gray-400 font-semibold">
                  {step.id}
                </span>
                <p className="mt-3 text-gray-900 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Let’s talk about your next energy project.
          </h3>

          <NavLink
            to="/contact"
            className="group inline-flex items-center bg-red-700 px-8 py-3"
          >
            <span className="text-white font-medium transition-transform group-hover:-translate-x-2">
              Contact Us
            </span>
            <span className="ml-3 text-white opacity-0 transition-all group-hover:opacity-100">
              <IoArrowRedoSharp />
            </span>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default About;
