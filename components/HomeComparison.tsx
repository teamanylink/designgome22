import React from 'react';

const HomeComparison: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Companies Choose Us Over Everyone Else</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[1000px] grid grid-cols-5 text-sm">
            {/* Header Row */}
            <div className="col-span-1 p-6 font-bold text-gray-500 uppercase tracking-wider border-b border-gray-800"></div>
            <div className="col-span-1 p-6 font-bold text-gray-400 text-center border-b border-gray-800">Freelancers</div>
            <div className="col-span-1 p-6 font-bold text-gray-400 text-center border-b border-gray-800">AI Agencies</div>
            <div className="col-span-1 p-6 font-bold text-gray-400 text-center border-b border-gray-800">DIY</div>
            <div className="col-span-1 p-6 pb-0 relative">
               <div className="absolute inset-x-2 top-0 bottom-0 bg-[#A3D900] rounded-t-xl opacity-10"></div>
               <div className="relative text-center font-bold text-[#A3D900] text-lg py-4 border-b-2 border-[#A3D900]">Plaiground</div>
            </div>

            {/* Row 1 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">Timeline</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">3-6 months<br/><span className="text-xs opacity-50">(if they don't ghost)</span></div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">4-6 months<br/><span className="text-xs opacity-50">per project</span></div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">6-12 months<br/><span className="text-xs opacity-50">(if you figure it out)</span></div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">4-8 weeks to revenue</div>

            {/* Row 2 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">What You Get</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Inconsistent quality,<br/>often incomplete</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">One-off solution<br/>that breaks</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Fragile systems that<br/>need constant fixing</div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">Production-ready<br/>systems that scale</div>

            {/* Row 3 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">Team</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Solo dev with<br/>limited AI expertise</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Junior devs<br/>on your project</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">You + ChatGPT<br/>+ frustration</div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">Senior AI engineers<br/>who've built at scale</div>

            {/* Row 4 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">Integration</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Basic, often doesn't<br/>work with your systems</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Limited, requires<br/>workarounds</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Duct-taped together<br/>with no-code tools</div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">Deep integration with<br/>existing infrastructure</div>

            {/* Row 5 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">Post-Launch</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">They disappear</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Minimal support,<br/>no optimization</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">You're on your own<br/>when it breaks</div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">Ongoing partnership<br/>and ROI optimization</div>

            {/* Row 6 */}
            <div className="col-span-1 p-6 font-bold text-gray-300 border-b border-gray-800">Risk</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">High - no accountability</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">Medium - they deliver<br/>and leave</div>
            <div className="col-span-1 p-6 text-center text-gray-500 border-b border-gray-800">High - you don't know<br/>what you don't know</div>
            <div className="col-span-1 p-6 text-center font-bold text-white bg-[#A3D900]/5 border-x border-[#A3D900]/20 border-b">Low - we're accountable<br/>for results</div>

             {/* Row 7 */}
            <div className="col-span-1 p-6 font-bold text-gray-300">Cost</div>
            <div className="col-span-1 p-6 text-center text-gray-500">Cheap upfront,<br/>expensive when it fails</div>
            <div className="col-span-1 p-6 text-center text-gray-500">Mid-range,<br/>hidden costs pile up</div>
            <div className="col-span-1 p-6 text-center text-gray-500">"Free" but costs<br/>you months of time</div>
            <div className="col-span-1 p-6 text-center font-bold text-[#A3D900] bg-[#A3D900]/5 border-x border-[#A3D900]/20 rounded-b-xl">Premium, but<br/>guaranteed ROI</div>

          </div>
        </div>

        <div className="text-center mt-12">
           <button className="bg-[#A3D900] hover:bg-[#8DB800] text-black font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#A3D900]/20">
             Book Your Strategy Call →
           </button>
        </div>
      </div>
    </section>
  );
};

export default HomeComparison;