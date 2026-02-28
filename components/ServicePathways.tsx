import React from 'react';

const ServicePathways: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Our Models</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Two Ways We Build With You</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Ventures */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="material-symbols-outlined text-9xl">rocket_launch</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">🚀 Plaiground Ventures</h3>
              <p className="text-lg font-medium text-gray-500 mb-8">We Build Your AI Product and Get You Paying Customers in 30-45 Days</p>
              
              <div className="prose text-gray-600 mb-8">
                <p className="mb-6">We validate your idea with real buyers, build your MVP, launch it with professional marketing, and deploy growth systems that get you revenue from day one.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-900">What happens:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Week 1-2:</strong> Market validation with real prospects before building anything</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Week 3-6:</strong> Build and launch your product with payment processing ready</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Week 7+:</strong> Deploy acquisition channels and growth systems that scale</span>
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-black">You get: A live product generating revenue in 30-45 days, not a roadmap that takes 12 months.</p>
                <p className="text-sm text-gray-500 mt-2">Perfect for: Founders and domain experts ready to launch AI products fast.</p>
              </div>

              <button className="w-full bg-black text-white hover:bg-gray-800 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:gap-4">
                Launch Your Product <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 2: Embedded */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-2 bg-[#A3D900]"></div>
             <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="material-symbols-outlined text-9xl">bolt</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">⚡ Plaiground Embedded</h3>
              <p className="text-lg font-medium text-gray-500 mb-8">We Embed AI Engineers Who Automate Your Workflows and Build Revenue-Generating Systems in 30-60 Days</p>
              
              <div className="prose text-gray-600 mb-8">
                <p className="mb-6">We deploy senior AI engineers directly into your operations to find your highest-cost manual work, automate it with custom AI, and build intelligent capabilities that unlock new revenue streams.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-900">What happens:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-[#A3D900] font-bold">•</span>
                      <span><strong>Week 1:</strong> Embed in your operations and identify highest-ROI opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#A3D900] font-bold">•</span>
                      <span><strong>Week 2-6:</strong> Build custom AI that integrates with your existing systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#A3D900] font-bold">•</span>
                      <span><strong>Week 7+:</strong> Deploy, measure ROI, optimize, and scale to next opportunity</span>
                    </li>
                  </ul>
                </div>
                <p className="font-medium text-black">You get: Measurable cost savings and new revenue in 30-60 days, or we keep working for free.</p>
                <p className="text-sm text-gray-500 mt-2">Perfect for: Operations leaders and executives tired of AI promises and ready for AI results.</p>
              </div>

              <button className="w-full bg-[#A3D900] text-black hover:bg-[#8DB800] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:gap-4">
                Get Started <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicePathways;