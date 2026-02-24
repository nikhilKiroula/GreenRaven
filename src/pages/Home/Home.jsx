
import ResidentialEnergySection from './ResidentialEnergySection';

import { NavLink } from 'react-router-dom';
import CommercialEnergySection from './CommercialEnergySection';
import HeroImg from "../../assets/images/heroImage.png"
import FloatingCards from "./FloatingCards"
import SalesStorySection from './SalesStorySection';
import InstallerPartenerNetwork from './InstallerPartnerNetwork';
import GeothermalSolutions from './GeothermalSolutions';
import Hardware from './Hardware';

const Home = () => {
  return (
    <section className="font-sans text-gray-800 flex flex-col gap-8">
      {/* Hero Section */}
      <article className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImg}
            alt="Energy background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center mt-24">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-white">
            Meeting the Energy Needs for <br />
            <span className="text-green-600">Tomorrow</span>
          </h1>

          {/* Subtext */}
          <p className="text-white text-lg max-w-3xl mx-auto mb-10">
            GreenRaven supports the energy production industry as a central hub —
            specializing in commercial solar, geothermal systems, generators,
            and advanced power solutions.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 ">
            <NavLink
              target="_blank"
              to="https://calendar.app.google/9qsvNemHcAkYwesn9"
            >
              <button className="bg-green-600 text-white px-8 py-3 cursor-pointer rounded-full font-semibold hover:bg-green-800 transition">
                Contact Us
              </button>
            </NavLink>

            {/* <NavLink to="/">
        <button className="bg-white/20 backdrop-blur-md cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition">
          Our Solutions →
        </button>
      </NavLink> */}
          </div>

          <div>
            <h3 className='text-[20px] text-white font-semibold my-4'>
              We help customers execute projects by providing:
            </h3>
            <FloatingCards />
          </div>

        </div>
      </article>

      <SalesStorySection />

      <Hardware />

      <ResidentialEnergySection />

      <CommercialEnergySection />

      <InstallerPartenerNetwork />

      <GeothermalSolutions />

      
    </section>
  );
};

export default Home;
