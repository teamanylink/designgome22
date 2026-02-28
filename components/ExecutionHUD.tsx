import React from "react";

const ExecutionHUD: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#111827] font-sans transition-colors duration-300 antialiased py-24 flex flex-col items-center">
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-gray-100 rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#A3D900]/10 rounded-full blur-[80px] opacity-40"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                System Visualisation
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] text-gray-900">
              Visualising{" "}
              <span className="font-serif italic text-gray-400 font-normal">
                Execution
              </span>{" "}
              <br />
              Inside Your Real Operation
            </h2>
          </div>

          <div className="w-full bg-gray-200/50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-xl border border-white/40 shadow-inner min-h-[600px] flex flex-col md:flex-row items-end justify-center gap-6">
            {/* Floating Label 1 */}
            <div
              className="absolute top-1/4 left-1/4 transform -translate-x-1/2 bg-white shadow-lg border border-gray-100 rounded-xl py-3 px-5 flex items-center gap-3 animate-pulse-glow"
              style={{ animationDuration: "4s" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                Manual Data Entry
              </span>
              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-serif italic">
                +
              </div>
            </div>
            {/* Floating Label 2 */}
            <div
              className="absolute top-1/3 right-1/4 transform translate-x-1/4 bg-white shadow-lg border border-gray-100 rounded-xl py-3 px-5 flex items-center gap-3"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                Unverified Data Points
              </span>
              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-serif italic">
                +
              </div>
            </div>
            {/* Floating Label 3 */}
            <div className="absolute bottom-1/3 left-1/3 bg-white shadow-lg border border-gray-100 rounded-xl py-3 px-5 flex items-center gap-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                Email Handoff Lag
              </span>
              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-serif italic">
                +
              </div>
            </div>

            {/* Left Card */}
            <div className="w-full md:w-1/3 glass-card bg-white/70 rounded-3xl p-8 relative z-10 self-end mb-8 md:mb-0">
              <div className="absolute -top-5 right-6 bg-white border border-gray-100 shadow-lg rounded-xl py-2 px-4 flex items-center gap-2 z-20">
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-800">
                  Spreadsheet Error Risk
                </span>
                <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center text-white text-[9px] font-serif italic">
                  +
                </div>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                Operational Audit
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We instrument your data sources to find the 80% of reality that
                breaks typical implementations.
              </p>
            </div>

            {/* Middle Card (Chart) */}
            <div
              className="w-full md:w-1/3 rounded-3xl p-8 relative z-20 shadow-float"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(245,247,250,0.4) 100%)",
                border: "1px solid rgba(255,255,255,1)",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.01), inset 0 0 0 1px rgba(255,255,255,0.5)",
              }}
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                    Execution Velocity
                  </h3>
                  <span className="text-4xl font-bold text-gray-900 font-sans tracking-tight">
                    84
                    <span className="text-[#A3D900] text-xl align-top">%</span>
                  </span>
                </div>
                <div className="bg-white shadow-sm border border-gray-100 rounded-xl py-2 px-4 flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-800">
                    Decision Bottleneck
                  </span>
                  <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center text-white text-[9px] font-serif italic">
                    +
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-full">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 100"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      x2="0%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#A3D900", stopOpacity: 0.2 }}
                      ></stop>
                      <stop
                        offset="100%"
                        style={{ stopColor: "#A3D900", stopOpacity: 0 }}
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 C50,80 80,60 120,60 S180,90 220,50 S280,20 300,10"
                    fill="none"
                    stroke="#A3D900"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M0,80 C50,80 80,60 120,60 S180,90 220,50 S280,20 300,10 L300,100 L0,100 Z"
                    fill="url(#chartGradient)"
                    stroke="none"
                  ></path>
                  <circle cx="220" cy="50" fill="#A3D900" r="4"></circle>
                  <g transform="translate(195, 20)">
                    <rect
                      fill="#A3D900"
                      height="20"
                      rx="4"
                      width="50"
                    ></rect>
                    <text
                      className="text-[9px] font-bold uppercase"
                      fill="#111827"
                      textAnchor="middle"
                      x="25"
                      y="13"
                    >
                      Peak
                    </text>
                  </g>
                </svg>
              </div>
              <div className="flex justify-between mt-6 pt-6 border-t border-gray-200/50 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                <span>Process Debt</span>
                <span>AI Leverage</span>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full md:w-1/3 bg-gray-900 rounded-3xl p-10 flex flex-col justify-center relative z-10 self-end shadow-2xl">
              <h3 className="text-3xl text-white font-serif italic mb-8 leading-tight">
                Try our 30-day <br />
                execution plan
              </h3>
              <button className="w-full bg-[#A3D900] hover:bg-[#b0e600] text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider text-xs">
                Start Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-100 bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-8 gap-x-12 text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-900 uppercase leading-none opacity-60 hover:opacity-100 transition-opacity duration-300">
            <span className="cursor-default">Forbes</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">Fox Business</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">Yahoo Finance</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">TED</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">Joe Rogan Experience</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">ESPN</span>
            <span className="hidden md:inline-block w-px h-3 bg-gray-300"></span>
            <span className="cursor-default">ABC News</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionHUD;