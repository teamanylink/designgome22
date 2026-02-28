import React from "react";

const ExecutionFeatureSplit: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] dark:bg-[#0A0A0A] text-[#1A1A1A] dark:text-white transition-colors duration-500 font-sans py-24 flex items-center justify-center p-4 lg:p-12 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-60">
          <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(at 0% 0%, rgba(180, 241, 56, 0.15) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(180, 241, 56, 0.1) 0, transparent 50%)'
          }}></div>
      </div>
      
      <section className="w-full max-w-7xl mx-auto relative z-10">
        <div className="relative bg-white dark:bg-[#111111] rounded-[3rem] p-1 lg:p-2 border border-black/[0.03] dark:border-white/[0.05] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
          <div className="relative overflow-hidden bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-[2.5rem] flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 mb-10">
                <span className="w-2 h-2 rounded-full bg-[#B4F138]"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
                  System Visualisation
                </span>
              </div>
              <h1 className="font-sans font-bold text-5xl lg:text-7xl leading-[0.95] mb-10 tracking-tight text-black dark:text-white">
                Visualising{" "}
                <span className="font-serif italic font-light text-black/40 dark:text-white/30">
                  Execution
                </span>{" "}
                <br />
                Inside Your Real Operation
              </h1>
              <p className="text-black/60 dark:text-white/50 text-xl leading-relaxed max-w-xl mb-12 font-medium">
                We instrument your data sources to find the 80% of reality that
                breaks typical implementations. Scale output without scaling
                headcount.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="group relative bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(180,241,56,0.4)]">
                  Book a Free Consultation
                </button>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-black/40 dark:text-white/30 uppercase tracking-widest">
                    Efficiency Guaranteed
                  </span>
                  <span className="text-[11px] font-medium text-black/20 dark:text-white/20">
                    30-day implementation cycle
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative min-h-[500px] bg-black/5 dark:bg-white/5 p-12 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 dark:opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
              <div className="relative z-20 w-full max-w-md">
                <div
                  className="p-8 rounded-[2rem] shadow-2xl relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div className="absolute -top-12 -right-6 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl px-6 py-4 rounded-2xl flex items-center gap-4 transition-transform duration-700 hover:-translate-y-2">
                    <div className="w-3 h-3 rounded-full bg-[#B4F138] shadow-[0_0_10px_#B4F138]"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-tighter text-black/40 dark:text-white/40">
                        Decision Bottleneck
                      </span>
                      <div className="h-1.5 w-24 bg-black/5 dark:bg-white/10 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-[#B4F138] w-[70%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl px-6 py-4 rounded-2xl flex items-center gap-4 transition-transform duration-1000 hover:-translate-y-2">
                    <span className="font-serif italic text-3xl font-bold dark:text-white">
                      94%
                    </span>
                    <span className="text-[9px] leading-tight font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                      Manual Data
                      <br />
                      Entry Reduced
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <div className="h-2 w-12 bg-black/20 dark:bg-white/20 rounded-full"></div>
                        <div className="h-2 w-20 bg-black/10 dark:bg-white/10 rounded-full"></div>
                      </div>
                      <div className="h-10 w-10 rounded-full border-2 border-dashed border-black/10 dark:border-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#B4F138] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="h-24 w-full bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 flex items-end p-4 gap-2">
                      <div className="flex-1 bg-black/10 dark:bg-white/10 rounded-t-sm h-12"></div>
                      <div className="flex-1 bg-[#B4F138] rounded-t-sm h-20"></div>
                      <div className="flex-1 bg-black/10 dark:bg-white/10 rounded-t-sm h-16"></div>
                      <div className="flex-1 bg-black/10 dark:bg-white/10 rounded-t-sm h-14"></div>
                      <div className="flex-1 bg-black/10 dark:bg-white/10 rounded-t-sm h-10"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#B4F138]/20 blur-[100px] rounded-full"></div>
              </div>
            </div>

            <div className="py-6 px-12 flex flex-col md:flex-row items-center justify-between gap-4 absolute bottom-0 left-0 w-full z-20 pointer-events-none">
              {/* Optional footer content in the card if needed, currently just trusted partners text in the provided design */}
            </div>
          </div>
          <div className="py-6 px-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-12 overflow-x-auto no-scrollbar max-w-full">
                <span className="text-[10px] font-bold text-black/30 dark:text-white/20 uppercase tracking-[0.3em] whitespace-nowrap">
                  Trusted Partners:
                </span>
                <div className="flex gap-8 items-center opacity-30 grayscale dark:invert transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                  <span className="text-sm font-black tracking-tighter">
                    FORBES
                  </span>
                  <span className="text-sm font-black tracking-tighter">
                    YAHOO FINANCE
                  </span>
                  <span className="text-sm font-black tracking-tighter">
                    TED
                  </span>
                  <span className="text-sm font-black tracking-tighter">
                    ESPN
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B4F138]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10"></div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutionFeatureSplit;