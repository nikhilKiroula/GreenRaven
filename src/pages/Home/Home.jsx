import React from 'react';
import solarImage1 from '../../assets/images/Solar1.jpg';
import solarImage2 from '../../assets/images/Solar2.jpg';
import transformerImage from '../../assets/images/transformer.jpg';
import powerSupplyImg from '../../assets/images/powerSupply.jpg';
import ResidentialEnergySection from './ResidentialEnergySection';

import { NavLink } from 'react-router-dom';
import CommercialEnergySection from './CommercialEnergySection';

import FloatingCards from "./FloatingCards"
import SalesStorySection from './SalesStorySection';
import InstallerPartenerNetwork from './InstallerPartnerNetwork';
import GeothermalSolutions from './GeothermalSolutions';
import Hardware from './Hardware';

const Home = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.webp?a=1&b=1&s=612x612&w=0&k=20&c=YIuMY_oGbKmKIe3c5TCt-Y7gMrw1VA4cQMURfvdlipE="
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
      <span className="text-[#cc0033]">Tomorrow</span>
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
        <button className="bg-[#cc0033] text-white px-8 py-3 cursor-pointer rounded-full font-semibold hover:bg-red-800 transition">
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
        <FloatingCards/>   
       </div>
    
  </div>
</section>

            <ResidentialEnergySection />

            <SalesStorySection/>
            

            <CommercialEnergySection />

            <InstallerPartenerNetwork/>

            <GeothermalSolutions/>

            <Hardware/>
        </div>
    );
};

export default Home;
