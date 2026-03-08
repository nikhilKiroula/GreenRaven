import React from "react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ZNShineLogo from "../../assets/images/ZNSHINE-Logo.png";
import HelieneLogo from "../../assets/images/Heliene-logo-new2.png";
import TalesunLogo from "../../assets/images/talesun-logo-vector.png";
import CanadianLogo from "../../assets/images/Canadian-Solar-logo.png";
import SunplusLogo from "../../assets/images/Sunplus Logo .png";
import HanwhaLogo from "../../assets/images/Hanwha_logo.svg.png";

const manufacturerLogos = [
  { src: ZNShineLogo, name: "ZNShine", label: "Shipped from North Carolina, U.S." },
  { src: HelieneLogo, name: "Heliene", label: "Shipped from Minnesota, U.S." },
  { src: TalesunLogo, name: "Talesun", label: "Shipped from Philippines and Indonesia" },
  { src: CanadianLogo, name: "CanadianSolar", label: "Shipped from Texas, U.S." },
  { src: SunplusLogo, name: "Sunplus", label: "Shipped from China and Indonesia" },
  { src: HanwhaLogo, name: "Hanwha", label: "Shipped from Georgia (US) and S. Korea" },
];

const SolarPanels = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Solar Panels Direct From the Manufacturer
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}

          //   breakpoints={{
          //     640: { slidesPerView: 3 },
          //     1024: { slidesPerView: 4 },
          //   }}
        >
          {manufacturerLogos.map((logo) => (
            <SwiperSlide key={logo.name}>
              <div className="h-70 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-evenly">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-16 w-auto object-contain mt-8"
                />
                <p className="text-sm md:text-base font-semibold text-slate-700 text-center">
                  {logo.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SolarPanels;
