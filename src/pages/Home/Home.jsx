import React from 'react';
import ServicesFeatureSection from './ServicesFeatureSection';
// import EcosystemHub from './EcoSystemHub';
import solarImage1 from '../../assets/images/Solar1.jpg';
import solarImage2 from '../../assets/images/Solar2.jpg';
import transformerImage from '../../assets/images/transformer.jpg';
import powerSupplyImg from '../../assets/images/powerSupply.jpg';
import ResidentialEnergySection from './ResidentialEnergySection';
import GreenRavenBrowseSection from './GreenRavenBrowseSection';
import { NavLink } from 'react-router-dom';
import CommercialEnergySection from './CommercialEnergySection';
import RealEnergyMakeover from './RealEnergyMakeover';


const Home = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
                <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-4">
                    The <span className="underline decoration-red-600 decoration-2 underline-offset-4">GreenRaven</span> Meeting<br />
                    the energy needs for tommorow
                </h1>
                <p className="text-gray-500 text-lg mb-8">Green Raven supports the energy production industry as a central hub—primarily in commercial solar, while also supporting geothermal, generators, and other power solutions. We help customers execute projects by providing.</p>

                <div className="flex space-x-4 mb-20">
                    <NavLink target='_blank' to='https://calendar.app.google/9qsvNemHcAkYwesn9
'><button className="bg-[#cc0033] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-red-800 transition-colors cursor-pointer">
                        Contact Us
                    </button></NavLink>
                    <NavLink to={"/product_and_services"}><button className="bg-[#5c6670] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-700 transition-colors cursor-pointer">
                        Products & Services
                    </button></NavLink>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-6 items-end relative">
                    {/* Item 1 - Small House */}
                    <div className="col-span-12 md:col-span-2 relative top-[-40px]">
                        <div className="w-full h-40 bg-gray-200 overflow-hidden shadow-sm">
                            <img src={solarImage1} alt="Small Garage" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Item 2 - Kids playing */}
                    <div className="col-span-12 md:col-span-5">
                        <div className="w-full h-96 bg-gray-200 overflow-hidden shadow-sm">
                            <img src={solarImage2} alt="Kids playing" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Item 3 - Firehouse / Commercial */}
                    <div className="col-span-12 md:col-span-3 relative">
                        <div className="w-full h-64 bg-gray-200 overflow-hidden shadow-sm mb-12">
                            <img src={transformerImage} alt="Glass Door" className="w-full h-full object-cover" />
                        </div>
                        {/* Handwriting Text */}
                        <div className="absolute -bottom-8 -left-10 text-red-700 font-handwriting rotate-[-5deg] text-center w-40">
                            <p className="font-dancing-script text-lg leading-tight">Turn heads in<br />your neighborhood</p>
                            <svg className="w-20 h-10 ml-10 text-red-700" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,10 Q50,40 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M90,10 L80,15 M90,10 L85,20" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    {/* Item 4 - Close up wood */}
                    <div className="col-span-12 md:col-span-2">
                        <div className="w-full h-80 bg-gray-200 overflow-hidden shadow-sm">
                            <img src={powerSupplyImg} alt="Wood Detail" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <GreenRavenBrowseSection/>

            <ServicesFeatureSection/>
            
            <ResidentialEnergySection/>

            <RealEnergyMakeover/>

            <CommercialEnergySection/>

            {/* Dark Section */}
                   </div>
    );
};

export default Home;
