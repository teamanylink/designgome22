import React from 'react';

const RoadmapCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3D900]/20 rounded-bl-full blur-[60px] pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
             <div className="inline-block bg-[#A3D900] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                Worth $2,500
             </div>
             <h2 className="text-4xl md:text-6xl font-bold mb-6">Get Your Free AI Roadmap</h2>
             <p className="text-xl md:text-2xl font-serif italic text-gray-600 mb-6">We'll Build You a Custom 90-Day AI Strategy—For Free</p>
             <p className="text-gray-500 max-w-2xl mx-auto">Most companies waste 6-12 months (and six figures) trying to figure out where AI fits in their business. We'll tell you in 45 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#A3D900]/20 flex items-center justify-center text-[#A3D900] font-bold flex-shrink-0">✓</div>
               <div>
                  <h4 className="font-bold text-gray-900 mb-1">Custom AI Opportunity Analysis</h4>
                  <p className="text-sm text-gray-600">We'll identify the 3 highest-ROI opportunities in your business where AI can either cut costs or generate revenue—specific to your operations, not generic advice.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#A3D900]/20 flex items-center justify-center text-[#A3D900] font-bold flex-shrink-0">✓</div>
               <div>
                  <h4 className="font-bold text-gray-900 mb-1">Technical Feasibility Assessment</h4>
                  <p className="text-sm text-gray-600">We'll tell you exactly what's possible with your current systems, data, and infrastructure. No bullshit. If something won't work, we'll say so.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#A3D900]/20 flex items-center justify-center text-[#A3D900] font-bold flex-shrink-0">✓</div>
               <div>
                  <h4 className="font-bold text-gray-900 mb-1">90-Day Implementation Roadmap</h4>
                  <p className="text-sm text-gray-600">You'll leave with a clear, prioritized plan: what to build first, what it'll cost, how long it'll take, and what ROI to expect.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-[#A3D900]/20 flex items-center justify-center text-[#A3D900] font-bold flex-shrink-0">✓</div>
               <div>
                  <h4 className="font-bold text-gray-900 mb-1">Build vs. Buy vs. Partner Recommendation</h4>
                  <p className="text-sm text-gray-600">We'll be brutally honest about whether you should build it yourself, buy a tool, or work with us. If we're not the right fit, we'll tell you.</p>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center mb-8">
             <p className="text-gray-700 font-medium mb-1">This isn't a sales call. It's a strategy session with operators who've built 100+ AI systems.</p>
             <p className="text-gray-500 text-sm">You'll walk away with clarity—whether you work with us or not.</p>
          </div>

          <div className="text-center">
            <p className="text-red-500 font-bold text-sm uppercase tracking-wide mb-4">The catch? We only do 8 of these per month.</p>
            <button className="w-full md:w-auto bg-black text-white hover:bg-gray-800 font-bold py-5 px-10 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-lg">
               Book Your Free AI Roadmap Call →
            </button>
            <p className="text-xs text-gray-400 mt-4">For companies serious about moving fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapCTA;