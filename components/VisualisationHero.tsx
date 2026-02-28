import React from "react";

const VisualisationHero: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] text-[#111827] font-sans transition-colors duration-300 antialiased flex flex-col items-center">
      <section className="relative w-full px-6 pt-16 pb-24 md:pt-24 lg:pt-32 lg:px-12 flex flex-col items-center justify-center overflow-hidden">
        <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
            System Visualisation
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-center text-gray-900 mb-6 max-w-5xl mx-auto">
          Visualising{" "}
          <span className="font-serif italic text-gray-400 font-light">
            Execution
          </span>{" "}
          <br />
          Inside Your Real Operation
        </h1>
        <p className="text-lg md:text-xl text-gray-500 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Transform invisible data flows into tangible insights. Our platform
          creates a unified operational reality, highlighting bottlenecks before
          they break your momentum.
        </p>

        <div className="relative w-full max-w-[1200px] bg-gray-200/50 rounded-[2.5rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-inner border border-white/50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-300/30 mix-blend-multiply pointer-events-none"></div>

          {/* Visualization Area */}
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Background SVG Grid/Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
              viewBox="0 0 1000 600"
            >
              <path
                d="M300,350 Q450,250 500,280 T700,450"
                fill="none"
                stroke="#D1D5DB"
                strokeDasharray="8 8"
                strokeWidth="2"
              ></path>
              <path
                d="M500,280 Q600,300 750,300"
                fill="none"
                stroke="#D1D5DB"
                strokeDasharray="8 8"
                strokeWidth="2"
              ></path>
            </svg>

            {/* Floating Tags */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full pl-5 pr-2 py-2 flex items-center gap-3 animate-pulse-glow" style={{ animationDuration: '5s'}}>
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-gray-800">
                Manual Data Entry
              </span>
              <button className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-colors">
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>
              </button>
            </div>

            <div className="absolute top-[45%] left-[10%] md:left-[15%] z-10 bg-white shadow-lg border border-gray-100 rounded-full pl-5 pr-2 py-2 flex items-center gap-3">
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-gray-800">
                Email Handoff Lag
              </span>
              <button className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-colors">
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>
              </button>
            </div>

            <div className="absolute top-[35%] right-[5%] md:right-[10%] z-10 bg-white shadow-lg border border-gray-100 rounded-full pl-5 pr-2 py-2 flex items-center gap-3">
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-gray-800 leading-tight">
                Unverified Data
                <br />
                Points
              </span>
              <button className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-colors">
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>
              </button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-30 pointer-events-none">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 whitespace-nowrap">
                Embedded AI Workflow HUD
              </span>
            </div>

            {/* Bottom Cards Area */}
            <div className="absolute bottom-0 w-full flex flex-col lg:flex-row items-end justify-between gap-6 px-4 pb-4">
              
              {/* Card 1 */}
              <div className="bg-gray-300/40 backdrop-blur-sm rounded-3xl p-6 w-full lg:w-1/4 h-48 border border-white/20 relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-2 shadow-sm z-20">
                  <span className="text-[10px] font-bold tracking-wide uppercase">
                    Spreadsheet Error Risk
                  </span>
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] text-white">
                      add
                    </span>
                  </div>
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                  Operational Audit
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-4">
                  We instrument your data sources to find the 80% of reality
                  that breaks typical implementations.
                </p>
              </div>

              {/* Card 2 (Chart) */}
              <div className="bg-gray-300/40 backdrop-blur-sm rounded-3xl p-6 w-full lg:w-2/4 h-48 border border-white/20 relative flex flex-col justify-between overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-full pl-4 pr-1 py-1 flex items-center gap-3 shadow-sm z-20">
                  <span className="text-[10px] font-bold tracking-wide uppercase">
                    Decision Bottleneck
                  </span>
                  <button className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[12px]">
                      add
                    </span>
                  </button>
                </div>
                <div className="flex justify-between items-start w-full opacity-40 text-[10px] font-bold uppercase tracking-wider">
                  <span>Exec Speed</span>
                  <span>98%</span>
                </div>
                <div className="absolute inset-0 flex items-end pb-8 px-6">
                  <svg
                    className="w-full h-24 overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 C100,80 150,40 250,60 S350,90 450,30 S550,60 600,40"
                      fill="none"
                      stroke="#A3D900"
                      strokeLinecap="round"
                      strokeWidth="3"
                      className="chart-path-anim"
                    ></path>
                    <path
                      d="M0,80 C100,80 150,40 250,60 S350,90 450,30 S550,60 600,40 V120 H0 Z"
                      fill="url(#gradient-green)"
                      opacity="0.1"
                    ></path>
                    <defs>
                      <linearGradient
                        id="gradient-green"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#A3D900", stopOpacity: 0.5 }}
                        ></stop>
                        <stop
                          offset="100%"
                          style={{ stopColor: "#A3D900", stopOpacity: 0 }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-[35%] left-[65%] bg-[#A3D900] text-gray-900 text-[9px] font-bold px-2 py-0.5 rounded-sm">
                    PEAK
                  </div>
                </div>
                <div className="flex justify-between items-end w-full opacity-40 text-[10px] font-bold uppercase tracking-wider relative z-10">
                  <span>Process Debt</span>
                  <span>AI Leverage</span>
                </div>
              </div>

              {/* Card 3 (CTA) */}
              <div className="bg-[#1A1A1A] rounded-3xl p-8 w-full lg:w-1/3 h-56 border border-gray-800 relative flex flex-col justify-center shadow-2xl">
                <h3 className="font-serif italic text-2xl text-white mb-6 leading-tight">
                  Try our 30-day <br />
                  execution plan
                </h3>
                <button className="w-full bg-[#A3D900] hover:bg-[#b0ea00] text-gray-900 font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-lg transition-all transform active:scale-95 shadow-glow">
                  Start Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <div className="w-full border-t border-gray-200 bg-white/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            Forbes
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            Fox Business
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            Yahoo Finance
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            TED
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            Joe Rogan Experience
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            ESPN
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-300"></span>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 cursor-default hover:text-[#A3D900] transition-colors">
            ABC News
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisualisationHero;