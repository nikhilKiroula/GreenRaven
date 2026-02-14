import { IoArrowRedoSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import HowWeWork from "./HowWeWork";

const About = () => {
  return (
    <main className="w-full overflow-x-hidden pt-10 bg-[#eee] mt-18 ">
    
      {/* ================= HERO ================= */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <span className="text-sm text-green-700 font-medium">
                  Trusted Industry Partner
                </span>
              </div>

              {/* Description Card */}
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-gray-600 leading-loose text-lg space-y-6 text-justify">
                  <p>
                    Built by industry veterans with decades of experience,
                    GreenRaven is based in Sacramento, CA and has been
                    developing relationships with product manufacturers and
                    installers since 2012.
                  </p>

                  <p>
                    With decades of experience building solar installation
                    companies and software solutions for the renewable
                    industry, we understand product sourcing without
                    unnecessary middle layers — ensuring timely delivery,
                    clear communication and unmatched customer support.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "300+", label: "Installers Network" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                  >
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>
                    <p className="text-gray-500 mt-2 text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageSlider />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <HowWeWork />

      {/* ================= VIDEO SECTION ================= */}
     <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://res.cloudinary.com/dal2cdpxb/video/upload/v1771053138/promoVideo_ugqm5i.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
      Powering a Sustainable Future
    </h2>

    <p className="text-gray-200 max-w-2xl mb-8">
      Delivering reliable energy solutions with innovation,
      transparency, and long-term partnerships.
    </p>

    {/* BUTTON */}
    <NavLink
      to="/partners"
      className="group inline-flex items-center bg-green-600 px-6 py-3 overflow-hidden hover:bg-green-700"
    >
      <span className="text-white font-medium transition-transform duration-300 group-hover:-translate-x-2 ">
        Become Partner
      </span>
      <span className="ml-3 text-white opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <IoArrowRedoSharp />
      </span>
    </NavLink>

  </div>
</section>

    </main>
  );
};

export default About;
