import { IoArrowRedoSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import HowWeWork from "./HowWeWork";
// import aboutVideo from "https://drive.google.com/file/d/1EdF2YlZT2DS6ar1l7TgVGAsEuKfHFLme/view";

const About = () => {

  return (
    <main className="w-full overflow-x-hidden mt-10">
      {/* ================= HERO ================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                About{" "}
                <span className="relative inline-block">
                  Us
                  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-red-600"></span>
                </span>
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-sm text-blue-700 font-medium">
                  Partner Rated
                </span>
              </div>

              {/* DESCRIPTION */}
              <section>
                <div className="max-w-7xl mx-auto py-6">
                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify max-w-3xl">
                    <p>
                      Built by industry veterans with decades of experience,
                      GreenRaven is based in Sacramento, CA and has been
                      developing relationships with product manufacturers and
                      installers since 2012. With several decades building solar
                      installation companies, software solutions for the solar
                      industry and providing interim C-level consulting
                      services, we speak your language.
                    </p>

                    <p>
                      We understand the need for product sourcing without
                      multiple layers of middle-men as well as the need for
                      timely delivery with a dedication to details,
                      communication and customer support you expect.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ================= RIGHT IMAGE BLOCK ================= */}
            <ImageSlider />
          </div>
        </div>
      </section>


      {/* ================= HOW WE WORK ================= */}

      <HowWeWork />

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
