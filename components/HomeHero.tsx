import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 px-6 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A3D900]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
           <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">
             We Build AI Solutions That Generate Revenue
           </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-gray-900 mb-8 leading-[0.95]">
          Real products. <br />
          Real customers. <br />
          <span className="relative inline-block">
             <span className="relative z-10">Real money.</span>
             <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-3 md:h-6 bg-[#A3D900]/40 -rotate-1 rounded-sm"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 font-serif italic">
          No pilots. No roadmaps. No "transformation strategies." <br />
          <span className="not-italic font-medium text-gray-900">Just AI that ships fast and prints money.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative bg-[#111827] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
             <span className="relative z-10 flex items-center gap-2">
               Book Your Strategy Call
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </span>
             <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;