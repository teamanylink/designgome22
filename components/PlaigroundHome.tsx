import React from 'react';
import HomeHero from './HomeHero';
import TrustBar from './TrustBar';
import TeamSection from './TeamSection';
import ServicePathways from './ServicePathways';
import CaseStudies from './CaseStudies';
import HomeComparison from './HomeComparison';
import FAQ from './FAQ';
import RoadmapCTA from './RoadmapCTA';

const PlaigroundHome: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-[#A3D900] selection:text-black">
      <HomeHero />
      <TrustBar />
      
      {/* Quote Section */}
      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#A3D900]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight mb-8">
            "By 2030, AI won't be a competitive advantage—it'll be the bare minimum for survival. The companies being built right now will own the next decade."
          </blockquote>
          <cite className="not-italic text-sm font-bold tracking-widest text-gray-500 uppercase">
             — Jensen Huang, CEO of NVIDIA
          </cite>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">The Window Is Closing Faster Than You Think</h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
          <p>Every day you wait to launch your AI product, someone else is signing the customers that should be yours.</p>
          <p>Every week you delay embedding AI into your operations, your competitors are cutting costs and scaling faster while your margins compress.</p>
          <p className="font-medium text-black">The companies dominating 2027 aren't starting today—they're already 12 months in.</p>
          <p>The AI gold rush isn't coming. It's here. And it's almost over.</p>
        </div>
        <div className="mt-12">
          <p className="font-serif italic text-2xl mb-8 text-gray-800">The only question is: Will you be one of the winners who moved fast, or one of the casualties who moved careful?</p>
          <button className="bg-[#A3D900] hover:bg-[#8DB800] text-black font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#A3D900]/20">
            Start Building Now →
          </button>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full"></div>

      <TeamSection />
      
      {/* Global Section */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Global Operations</h3>
          <h2 className="text-3xl md:text-4xl font-medium mb-8">AI Engineers & Growth Marketers Operating Globally</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Our team spans 7 countries:</p>
          <div className="text-4xl md:text-6xl flex justify-center gap-4 md:gap-8 mb-10 grayscale hover:grayscale-0 transition-all duration-500 cursor-default select-none">
            <span>🇺🇸</span><span>🇦🇺</span><span>🇳🇱</span><span>🇬🇧</span><span>🇨🇦</span><span>🇩🇪</span><span>🇸🇬</span>
          </div>
          <p className="text-gray-900 font-medium mb-8">Elite engineers. World-class marketers. One mission: Ship AI that makes money.</p>
          <p className="text-gray-500 mb-8">We work 24/7 across time zones so your product never stops moving.</p>
          <a href="#" className="inline-block border-b-2 border-[#A3D900] pb-0.5 font-bold hover:text-[#A3D900] transition-colors">Book Your Call →</a>
        </div>
      </section>

      <ServicePathways />
      
      <CaseStudies />
      
      <HomeComparison />
      
      <FAQ />
      
      <RoadmapCTA />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight">The Companies Winning Right Now Didn't Wait</h2>
          <div className="text-gray-400 text-lg md:text-xl space-y-2 mb-12 font-light">
            <p>They didn't wait for the perfect moment.</p>
            <p>They didn't wait to have everything figured out.</p>
            <p>They didn't wait until conditions were ideal.</p>
          </div>
          
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-serif italic mb-6">
              The AI opportunity has an expiration date. The early movers are building moats. The fast followers will survive. The slow and careful will spend the next 3 years wondering what happened.
            </p>
            <p className="font-bold text-[#A3D900]">Which one will you be?</p>
          </div>

          <div className="mb-16">
             <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Ready to Build? Pick your path:</h3>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105 active:scale-95">
                 Launch Your AI Product →
                 <span className="block text-xs font-normal text-gray-500 mt-1">Plaiground Ventures</span>
               </button>
               <button className="bg-[#A3D900] text-black hover:bg-[#8DB800] font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105 active:scale-95">
                 Embed AI That Makes Money →
                 <span className="block text-xs font-normal text-black/60 mt-1">Plaiground Embedded</span>
               </button>
             </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <p className="text-2xl font-medium mb-4">Not Sure Which Path Is Right?</p>
            <p className="text-gray-400 mb-6">Book a 30-minute strategy call. We'll diagnose your situation, tell you what's actually possible, and show you exactly what we'd build.</p>
            <p className="text-sm text-gray-500 mb-6">No pitch. No deck. Just straight talk about what works.</p>
            <button className="text-[#A3D900] border border-[#A3D900] hover:bg-[#A3D900]/10 font-bold py-3 px-8 rounded-full transition-colors mb-4">
              Book Your Strategy Call
            </button>
            <p className="text-gray-500">hello@plaiground.ai</p>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5">
             <p className="font-serif italic text-gray-500 text-lg">Stop planning. Start shipping.</p>
             <p className="font-bold text-white mt-2">Plaiground — We Build AI That Actually Works.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaigroundHome;