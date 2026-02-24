import React from 'react';
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Youtube, 
    Linkedin, 
    MapPin, 
    Phone, 
    Sun, 
    Zap, 
    Battery,
    Leaf 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '../navbar/Logo';

const Footer = () => {
    return (
        <footer className="font-sans">
            {/* Top Call-to-Action Banner - Adapted for Green Energy Theme */}
            <div className="bg-[#0a1128] py-12 px-4 relative overflow-hidden">
                {/* Background Pattern (Subtle dots) */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <div className="grid grid-cols-6 gap-2">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide text-center md:text-left">
                        Powering your future with sustainable energy solutions.
                    </h2>
                   <NavLink to={"/contact"}> <button className="bg-transparent border border-white/30 text-white hover:bg-green-600 hover:text-white cursor-pointer transition-colors px-8 py-3 uppercase text-sm tracking-widest font-medium">
                        Contact Us
                    </button></NavLink>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-[#050810] text-white pt-16 pb-8 border-t border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                        
                        {/* Left Column: Brand & Contact Info */}
                        <div className="lg:w-1/3 flex flex-col gap-8">
                            {/* Logo Representation */}
                           <div className='-m-0.5'>
                             <Logo/>
                           </div>
                            
                            {/* Contact Details from Image */}
                            <div className="flex flex-col gap-4 text-slate-400 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-1 text-green-500 shrink-0" />
                                    <p className="leading-relaxed">
                                        4809 W 41st Street, Suite 202 #567 <br />
                                        Sioux Falls, SD 57106
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-green-500 shrink-0" />
                                    <p>415-816-2476</p>
                                </div>
                            </div>

                            <div className="text-sm text-slate-500 mt-2">
                                © GreenRaven, Inc. All rights reserved.
                            </div>
                        </div>

                        {/* Right Section: Links Columns */}
                        <div className="lg:w-2/3">
                            <h3 className="text-sm font-bold tracking-widest text-green-500 uppercase mb-6 border-b border-slate-800 pb-4">
                                Site Links
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Column 1 */}
                                <div className="flex flex-col gap-4">
                                    <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                        <li><NavLink to={"/contact"} className="hover:text-green-400 transition-colors">Contact Us</NavLink></li>
                                        <li><NavLink to={"/about"} className="hover:text-green-400 transition-colors">About Us</NavLink></li>
                                        <li><a href="#" className="hover:text-green-400 transition-colors">Industry News</a></li>
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div className="flex flex-col gap-4">
                                    <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                        <li><a href="#" className="hover:text-green-400 transition-colors">Promotions</a></li>
                                        <li><a href="#" className="hover:text-green-400 transition-colors">Resellers</a></li>
                                        <li><a href="#" className="hover:text-green-400 transition-colors">FAQ's</a></li>
                                    </ul>
                                </div>

                                {/* Column 3 */}
                                <div className="flex flex-col gap-4">
                                    <ul className="flex flex-col gap-3 text-sm font-light text-slate-300">
                                        <li><a href="#" className="hover:text-green-400 transition-colors">Gallery</a></li>
                                        <li><a href="#" className="hover:text-green-400 transition-colors">Our Products</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Partner Logos Section (Mocked based on image brands) */}
                            <div className="mt-12 pt-8 border-t border-slate-800/50">
                                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">Trusted Partners</h4>
                                <div className="flex flex-wrap items-center justify-between gap-8 opacity-70 grayscale-0 transition-all duration-500">
                                    {/* Mock Text Logos using Fonts to mimic brands */}
                                    <div className="flex items-center gap-1 font-bold text-lg text-orange-500 tracking-tight">
                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-orange-500 border-r-[6px] border-r-transparent"></div>
                                        IRONRIDGE
                                    </div>
                                    
                                    <div className="font-bold text-lg text-red-500 tracking-wider flex items-center gap-1">
                                        <Sun size={18} strokeWidth={3} />
                                        HELIENE
                                    </div>

                                    <div className="font-black text-xl text-white tracking-tighter">
                                        EG4<span className="text-green-500">.</span>
                                    </div>

                                    <div className="font-bold text-lg text-orange-400 tracking-wide uppercase">
                                        GENERAC
                                    </div>

                                    <div className="font-bold text-lg text-blue-400 tracking-tight flex items-center">
                                        Trina<span className="font-light text-white">solar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#0f1420] py-4 border-t border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-slate-400 font-light">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <span className="hidden md:inline">|</span>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <span className="hidden md:inline">|</span>
                            <a href="#" className="hover:text-white">Sitemap</a>
                        </div>
                        
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={16} /></a>
                            <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={16} /></a>
                            <a href="#" className="hover:text-green-400 transition-colors"><Linkedin size={16} /></a>
                            <a href="#" className="hover:text-green-400 transition-colors"><Youtube size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;