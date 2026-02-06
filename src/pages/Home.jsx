import React from 'react';
import ServicesFeatureSection from '../components/Cards/ServicesFeatureSection';

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
                    <button className="bg-[#cc0033] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-red-800 transition-colors">
                        Get a quote
                    </button>
                    <button className="bg-[#5c6670] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-700 transition-colors">
                        Build My Door
                    </button>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-6 items-end relative">
                    {/* Item 1 - Small House */}
                    <div className="col-span-12 md:col-span-2 relative top-[-40px]">
                        <div className="w-full h-40 bg-gray-200 overflow-hidden shadow-sm">
                            <img src="https://images.unsplash.com/photo-1595156641528-569d3000a6c6?q=80&w=600&auto=format&fit=crop" alt="Small Garage" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Item 2 - Kids playing */}
                    <div className="col-span-12 md:col-span-5">
                        <div className="w-full h-96 bg-gray-200 overflow-hidden shadow-sm">
                            <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop" alt="Kids playing" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Item 3 - Firehouse / Commercial */}
                    <div className="col-span-12 md:col-span-3 relative">
                        <div className="w-full h-64 bg-gray-200 overflow-hidden shadow-sm mb-12">
                            <img src="https://images.unsplash.com/photo-1549419163-9529b552fa8e?q=80&w=600&auto=format&fit=crop" alt="Glass Door" className="w-full h-full object-cover" />
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
                            <img src="https://images.unsplash.com/photo-1517646287309-48b9f7248e9d?q=80&w=600&auto=format&fit=crop" alt="Wood Detail" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <ServicesFeatureSection/>

            {/* Dark Section */}
            <div className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Dots Pattern Background (Simulated) */}
                    <div className="absolute top-0 right-0 p-10 opacity-20 hidden md:block">
                        <div className="grid grid-cols-6 gap-2">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-normal leading-tight mb-8">
                                The right door, at the right price,<br />
                                delivered on time
                            </h2>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-lg">
                                Garage doors are an investment. Let's find you the right one.
                            </p>
                            <p className="text-gray-400 mb-12 text-sm leading-relaxed max-w-lg">
                                C.H.I Overhead Doors has decades of experience in manufacturing high-quality garage doors to meet any need. And for added peace of mind, all come with the best warranty in the industry.
                            </p>

                            <h3 className="text-xl mb-6">Browse our doors for:</h3>

                            <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
                                {/* Card 1 */}
                                <div className="relative group cursor-pointer overflow-hidden h-48">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" alt="Homes" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="text-xl font-semibold border-b-4 border-blue-600 pb-1">Homes</span>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="relative group cursor-pointer overflow-hidden h-48">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="Businesses" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="text-xl font-semibold border-b-4 border-green-600 pb-1">Businesses</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side spacer or image if needed, mostly empty in design or just extension of dark area */}
                        <div className="hidden md:block">
                            {/* Potential decoration or empty space as per design */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
