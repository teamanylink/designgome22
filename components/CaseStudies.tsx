import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies: Real Deployments, Real Results</h2>
           <div className="h-1 w-24 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Case 1 */}
          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow bg-gray-50/50">
            <div className="mb-6">
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Marketing</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Creative Content Research & Ideation Generator</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Client: Australia's #1 TikTok Agency</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">The Bottleneck:</h4>
                <p className="text-gray-600 text-sm">Creative team spending 4-6 hours per person daily on manual TikTok research—identifying viral trends, competitor content, and successful formats.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">What We Built:</h4>
                <p className="text-gray-600 text-sm">Custom AI Researcher and Ideation Generator that autonomously screens TikTok feeds, analyzes performance metrics, identifies viral patterns, and generates pre-validated video ideas.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
               <div>
                 <p className="text-2xl font-bold text-[#A3D900]">$150K+</p>
                 <p className="text-xs text-gray-500 font-medium">annual savings</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">75%</p>
                 <p className="text-xs text-gray-500 font-medium">time freed</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">300%</p>
                 <p className="text-xs text-gray-500 font-medium">ideation increase</p>
               </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow bg-gray-50/50">
            <div className="mb-6">
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Logistics</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Future Fulfillment Proposal Generator</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Client: Top 3PL Company in Australia</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">The Bottleneck:</h4>
                <p className="text-gray-600 text-sm">Sales reps spending hours daily manually compiling complex quotes with multi-variable logic for storage, picking, packing, and shipping costs.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">What We Built:</h4>
                <p className="text-gray-600 text-sm">Custom AI Predictive Proposal Generator that integrates with internal systems and generates fully detailed proposals with pricing calculations in under 1 minute.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
               <div>
                 <p className="text-2xl font-bold text-[#A3D900]">Instant</p>
                 <p className="text-xs text-gray-500 font-medium">quote gen (was 4hr)</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">400%</p>
                 <p className="text-xs text-gray-500 font-medium">capacity increase</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">15%</p>
                 <p className="text-xs text-gray-500 font-medium">deal close rate</p>
               </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow bg-gray-50/50">
            <div className="mb-6">
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">HealthTech</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Healthcare Insurance Match AI Generator</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Client: Healthcare Technology Startup</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">The Challenge:</h4>
                <p className="text-gray-600 text-sm">Founder needed working prototype of an AI system that matches patients with optimal insurance plans based on medical history to secure seed funding.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">What We Built:</h4>
                <p className="text-gray-600 text-sm">AI-powered insurance recommendation engine that analyzes patient data, compares plan options across providers, and generates personalized insurance match reports.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
               <div>
                 <p className="text-2xl font-bold text-[#A3D900]">$100K</p>
                 <p className="text-xs text-gray-500 font-medium">raised in 48hrs</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">$5M</p>
                 <p className="text-xs text-gray-500 font-medium">valuation</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">3</p>
                 <p className="text-xs text-gray-500 font-medium">enterprise pilots</p>
               </div>
            </div>
          </div>

          {/* Case 4 */}
          <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow bg-gray-50/50">
            <div className="mb-6">
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Enterprise B2B</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">8-Figure Government Contract Proposal System</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Client: Enterprise B2B Services Company</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">The Bottleneck:</h4>
                <p className="text-gray-600 text-sm">Responding to complex government RFPs required 3-5 days of senior staff time to manually research compliance requirements and compile technical specs.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-gray-900 mb-2">What We Built:</h4>
                <p className="text-gray-600 text-sm">Custom AI RFP Response Generator trained on company library. Automatically extracts requirements, matches capabilities, and generates compliant proposal language.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
               <div>
                 <p className="text-2xl font-bold text-[#A3D900]">&lt;4 hrs</p>
                 <p className="text-xs text-gray-500 font-medium">completion (was 5 days)</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">50%</p>
                 <p className="text-xs text-gray-500 font-medium">proposal vol increase</p>
               </div>
               <div>
                 <p className="text-2xl font-bold text-gray-900">8-Figure</p>
                 <p className="text-xs text-gray-500 font-medium">contract won</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;