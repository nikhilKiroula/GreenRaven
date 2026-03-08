import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image1 from "../../assets/images/Sol-Ark 15k Hybrid Solar_Battery Inverter.png";
import Image2 from "../../assets/images/Solis EverCore 261kWh ESS Image.jpg";
import Image3 from "../../assets/images/solaredge-home-battery-stacked.webp";
import TopImage1 from "../../assets/images/SolarEdge Three Phase Inverters.png";
import TopImage2 from "../../assets/images/Sol-Ark 60k-3P-480V Hybrid Inverter.png";
import Logo1 from "../../assets/images/solark_header_logo.png";
import Logo2 from "../../assets/images/Solis logo.png";
import Logo3 from "../../assets/images/solaredge logo.png";
import TopLogo1 from "../../assets/images/solaredge logo.png";
import TopLogo2 from "../../assets/images/solark_header_logo.png";

const SalesSectionTwo = () => {
  const batteryAndInverterItems = [
    {
      image: TopImage1,
      logo: TopLogo1,
      label: "SolarEdge 3 Phase Commercial Inverters",
    },
    {
      image: TopImage2,
      logo: TopLogo2,
      label: "Sol-Ark 60k-3P-480V Hybrid Inverter",
    },
    {
      image: Image1,
      logo: Logo1,
      label: "Sol-Ark 15K Hybrid Solar/Battery Inverter",
    },
    {
      image: Image2,
      logo: Logo2,
      label: "Solis EverCore 261 kWh ESS",
    },
    {
      image: Image3,
      logo: Logo3,
      label: "SolarEdge Stacked Residential ESS",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Batteries and Inverters Direct From the Manufacturer
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true }}
          // breakpoints={{
          //   0: { slidesPerView: 1 },
          //   768: { slidesPerView: 2 },
          //   1024: { slidesPerView: 3 },
          // }}
        >
          {batteryAndInverterItems.map((item) => (
            <SwiperSlide key={item.label}>
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-44 object-contain"
                />
                <p className="mt-4 text-center text-sm md:text-base font-semibold text-slate-700 min-h-[48px]">
                  {item.label}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-3"></div>
                <p className="text-center text-[11px] uppercase tracking-[0.16em] font-bold text-emerald-700">
                  Manufacturer
                </p>
                <img
                  src={item.logo}
                  alt={`${item.label} manufacturer`}
                  className="mt-2 mb-4 h-8 w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SalesSectionTwo;
