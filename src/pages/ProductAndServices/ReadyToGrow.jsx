import React from 'react'

const ReadyToGrow = () => {
 return (
    <div className="bg-[#1e293b] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-light text-white mb-8">
          Ready to grow your business?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://calendar.app.google/9qsvNemHcAkYwesn9" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-white text-[#1e293b] px-10 py-4 font-bold rounded shadow hover:bg-slate-100 transition-colors uppercase tracking-wider text-sm"
          >
            Schedule a Call
          </a>
          <button className="bg-transparent border border-white text-white px-10 py-4 font-bold rounded shadow hover:bg-white/10 transition-colors uppercase tracking-wider text-sm">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToGrow
