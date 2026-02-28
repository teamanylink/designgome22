import React from "react";

const ProblemSolution: React.FC = () => {
  return (
    <section className="relative py-20 px-6 lg:px-12 overflow-hidden w-full bg-[#F9FAFB] dark:bg-[#0F0F0F]">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#D4FF5F]/5 rounded-full blur-[40px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[40px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Strategic Overview
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
            Diagnose &amp;{" "}
            <span className="font-serif italic text-gray-400">Resolve</span>
          </h2>
        </div>

        {/* Problem Card (Dark) */}
        <div className="relative w-full rounded-3xl bg-[#18181B] border border-white/5 p-10 md:p-16 overflow-hidden min-h-[320px] flex flex-col justify-center shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-red-400/70 uppercase">
                The Problem
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl leading-[1.15] font-medium text-white mb-6">
              Data silos create <br className="hidden md:block" />
              <span className="font-serif italic text-white/40">
                invisible friction
              </span>{" "}
              in execution.
            </h3>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl opacity-20 hidden md:block border border-white/10"></div>
        </div>

        {/* Solution Card (Light) */}
        <div className="relative w-full rounded-3xl bg-gray-100 dark:bg-[#EAEAEA] text-black border border-white/10 p-10 md:p-16 overflow-hidden min-h-[380px] flex flex-col justify-center">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D4FF5F]/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF5F] ring-2 ring-[#D4FF5F]/30"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-black/50 uppercase">
                  The Solution
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl leading-[1.15] font-medium text-black mb-2">
                Unified neural <br />
                <span className="font-serif italic text-black/60">
                  bridging architecture.
                </span>
              </h3>
            </div>
            <div className="lg:border-l lg:border-black/5 lg:pl-12">
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                We dissolve fragmentation by implementing adaptive data streams.
                Our model proactively links disparate endpoints, transforming
                static noise into actionable, real-time intelligence.
              </p>
              <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-black/40 font-semibold">
                  Impact
                </span>
                <span className="font-serif italic text-lg text-black/80">
                  Seamless integration
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 w-24 h-24 bg-gradient-to-tr from-white/80 to-transparent rounded-2xl backdrop-blur-md border border-white/20 rotate-12 opacity-60 hidden lg:block shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;