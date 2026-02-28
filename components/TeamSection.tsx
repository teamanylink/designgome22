import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We've Launched 100+ Digital Products and Systems. We've Been Building with AI for 8+ Years.</h2>
          <p className="text-lg text-gray-500 uppercase tracking-widest font-medium mb-4">We're Trusted by 9-Figure Companies Globally.</p>
          <div className="h-1 w-20 bg-[#A3D900] mx-auto mb-8"></div>
          <p className="text-xl font-serif italic text-gray-800">We're not consultants. We're operators who've done this with our own money on the line.</p>
        </div>

        <h3 className="text-center text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-12">The Team That Ships</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Denis */}
          <div className="group bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#A3D900]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#A3D900]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
             
             <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                  {/* Placeholder for Photo */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white font-bold text-xl">D</div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Denis</h4>
                  <p className="text-[#A3D900] font-bold text-sm uppercase tracking-wider">Co-Founder & AI Engineer</p>
                </div>
             </div>
             <p className="text-gray-600 leading-relaxed">
               8+ years building AI systems. Former engineer at leading tech companies. Built AI infrastructure processing 100M+ requests daily. Expert in custom AI deployment and production-grade systems.
             </p>
          </div>

          {/* Card 2: Lucas */}
          <div className="group bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#A3D900]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
             
             <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                  {/* Placeholder for Photo */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white font-bold text-xl">L</div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Lucas</h4>
                  <p className="text-[#A3D900] font-bold text-sm uppercase tracking-wider">Co-Founder & Growth Lead</p>
                </div>
             </div>
             <p className="text-gray-600 leading-relaxed">
               Scaled multiple 7-figure digital products and AI startups. Expert in product-led growth, go-to-market strategy, and turning technical products into revenue machines.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;