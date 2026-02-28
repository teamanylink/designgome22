import React from "react";

const CoreCapabilities: React.FC = () => {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-[#A3D900]/20 rounded-full blur-[60px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[60px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Core Capabilities
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-gray-900">
            Transforming complexity into <br className="hidden md:block" />
            <span className="font-serif italic text-gray-500">
              seamless intelligence.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            Our embedded AI solutions restructure operational workflows,
            eliminating friction points invisible to the human eye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-3xl bg-white border border-gray-100 p-10 h-full transition-all duration-500 hover:border-[#A3D900]/50 hover:shadow-2xl hover:shadow-[#A3D900]/5 overflow-hidden">
            <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative w-16 h-16 mb-8 rounded-2xl bg-glass-gradient glass-card flex items-center justify-center overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-[#A3D900]/30 blur-md absolute top-2 right-2"></div>
              <div className="w-2 h-8 bg-black/5 rounded-full rotate-45 transform"></div>
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 group-hover:text-[#A3D900] transition-colors duration-300">
              Autonomous <br />
              <span className="font-serif italic font-normal text-gray-600 group-hover:text-[#A3D900]/80">
                Reconciliation
              </span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Data silos are dismantled through our proprietary neural bridging.
              We automate cross-platform verification, ensuring 99.9% data
              integrity without manual intervention.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Efficiency Gain
              </span>
              <span className="text-3xl font-bold text-gray-900">
                70<span className="text-lg align-top text-[#A3D900]">%</span>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-3xl bg-white border border-gray-100 p-10 h-full transition-all duration-500 hover:border-[#A3D900]/50 hover:shadow-2xl hover:shadow-[#A3D900]/5 overflow-hidden">
            <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative w-16 h-16 mb-8 rounded-2xl bg-glass-gradient glass-card flex items-center justify-center overflow-hidden">
              <div className="w-10 h-10 rounded-full border border-[#A3D900]/40 absolute"></div>
              <div className="w-6 h-6 rounded-full bg-black/5 blur-[1px]"></div>
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 group-hover:text-[#A3D900] transition-colors duration-300">
              Predictive <br />
              <span className="font-serif italic font-normal text-gray-600 group-hover:text-[#A3D900]/80">
                Scaling Models
              </span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Anticipate demand spikes before they occur. Our architecture
              dynamically allocates server resources, reducing overhead while
              maintaining peak performance latency.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Cost Reduction
              </span>
              <span className="text-3xl font-bold text-gray-900">
                45<span className="text-lg align-top text-[#A3D900]">%</span>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-3xl bg-white border border-gray-100 p-10 h-full transition-all duration-500 hover:border-[#A3D900]/50 hover:shadow-2xl hover:shadow-[#A3D900]/5 overflow-hidden">
            <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative w-16 h-16 mb-8 rounded-2xl bg-glass-gradient glass-card flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A3D900]/20 to-transparent opacity-50"></div>
              <div className="w-8 h-1 bg-black/10 rounded-full mb-1"></div>
              <div className="w-5 h-1 bg-black/10 rounded-full mb-1"></div>
              <div className="w-8 h-1 bg-black/10 rounded-full"></div>
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 group-hover:text-[#A3D900] transition-colors duration-300">
              Visualized <br />
              <span className="font-serif italic font-normal text-gray-600 group-hover:text-[#A3D900]/80">
                Bottlenecks
              </span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              See the unseen. We render abstract data flows into actionable
              visual insights, highlighting operational drag instantly so your
              team can pivot strategies in real-time.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Visibility
              </span>
              <span className="text-3xl font-bold text-gray-900">
                100<span className="text-lg align-top text-[#A3D900]">%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 py-10 border-y border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-xs md:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase leading-none">
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              Forbes
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              Fox Business
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              Yahoo Finance
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              TED
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              Joe Rogan Experience
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              ESPN
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-300"></span>
            <span className="hover:text-[#A3D900] transition-colors cursor-default">
              ABC News
            </span>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between pt-10 border-t border-gray-200">
          <div className="max-w-md mb-8 md:mb-0">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Ready for deployment?
            </h4>
            <p className="text-base text-gray-500">
              Our engineers integrate directly into your operation. No tools to
              roll out. No disruption.
            </p>
          </div>
          <button className="relative overflow-hidden group rounded-full bg-gray-900 text-white px-10 py-5 font-semibold text-sm transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
            <span className="relative z-10 flex items-center gap-3">
              Start Integration
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;