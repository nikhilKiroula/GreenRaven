import React from 'react';

const Contact = () => {
    return (
        <section className="container mx-auto px-4 py-8 lg:py-16 overflow-hidden my-10">
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
                {/* Left Column - Contact Details */}
                <div className="lg:w-1/2 flex flex-col relative justify-center">
                    <div className="z-10 bg-white">
                        <h1 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
                            Contact Us
                        </h1>
                        <div className="w-16 h-1 bg-red-600 mb-10"></div>

                        <div className="text-slate-600 mb-8 leading-relaxed space-y-8">
                            <div>
                                <p className="text-xl mb-4 font-light text-slate-800">
                                    You may contact us by email or phone at:
                                </p>
                                
                                <address className="not-italic text-slate-700 text-lg border-l-4 border-slate-200 pl-6 py-2">
                                    <span className="block font-bold text-xl text-slate-900 mb-1">GreenRaven, Inc.</span>
                                    <span className="block">4809 W 41st Street, Suite 202-567</span>
                                    <span className="block">Sioux Falls, SD 57106</span>
                                </address>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                <p className="text-lg leading-relaxed">
                                    Or better yet, please email us at <a href="mailto:info@gogreenraven.com" className="text-red-700 underline decoration-red-300 hover:text-red-800 font-medium">info@gogreenraven.com</a> or <a href="https://calendar.app.google/9qsvNemHcAkYwesn9" target="_blank" rel="noopener noreferrer" className="text-red-700 underline decoration-red-300 hover:text-red-800 font-medium">click here</a> to schedule a call with our staff.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Dots Pattern (Maintained from Partner theme) */}
                    <div className="absolute -bottom-10 -left-10 grid grid-cols-6 gap-6 -z-10 opacity-30 mt-12">
                        {[...Array(48)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="lg:w-1/2 relative flex items-center">
                    <div className="relative h-[400px] lg:h-[500px] w-full shadow-2xl overflow-hidden">
                        {/* Placeholder image resembling the 'hands with phone' from your screenshot */}
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                            alt="Contacting Green Raven Support" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        {/* Dark overlay gradient to match the deep blue theme slightly */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/40 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Abstract box element to tie into the "Partner" page design style */}
                    <div className="absolute -z-10 top-10 -right-6 w-3/4 h-3/4 bg-slate-100"></div>
                </div>
            </div>

            <style>{`
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Contact;