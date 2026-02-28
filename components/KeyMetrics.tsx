import React from "react";

const KeyMetrics: React.FC = () => {
  return (
    <div className="bg-[#F3F4F6] dark:bg-[#0F0F0F] text-[#111827] dark:text-[#F9FAFB] antialiased transition-colors duration-300">
      <main className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9FF00] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float dark:mix-blend-normal dark:opacity-10 pointer-events-none"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D9FF00] rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-float dark:mix-blend-normal dark:opacity-5 pointer-events-none"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 mb-16 lg:mb-24 text-center lg:text-left">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              System Metrics
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-sans font-medium leading-tight tracking-tight text-balance">
            Real-Time{" "}
            <span className="font-serif italic font-normal">Visibility</span>{" "}
            <br />
            Into Your Operation
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
            We embed distinct sensors directly into your workflow to capture
            granular execution data. No guesswork. Just pure, actionable
            numbers.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-card bg-white/70 dark:bg-[#18181B]/60 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[280px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D9FF00]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-4 h-4 rounded-full bg-[#D9FF00]"></div>
              </div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                Efficiency
              </span>
            </div>
            <div>
              <div className="text-6xl font-sans font-bold tracking-tighter mb-4 text-black dark:text-white">
                47
                <span className="text-4xl align-top text-[#D9FF00]">%</span>
              </div>
              <p className="font-serif italic text-lg leading-snug text-gray-600 dark:text-gray-400">
                Reduction in manual audit and documentation time.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card bg-white/70 dark:bg-[#18181B]/60 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[280px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D9FF00]/20 transition-colors duration-500">
                <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#D9FF00] transition-colors duration-500"></div>
              </div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                Velocity
              </span>
            </div>
            <div>
              <div className="text-6xl font-sans font-bold tracking-tighter mb-4 text-black dark:text-white">
                2.5
                <span className="text-4xl align-top text-gray-400 dark:text-gray-600">
                  x
                </span>
              </div>
              <p className="font-serif italic text-lg leading-snug text-gray-600 dark:text-gray-400">
                Increase in operational output speed week over week.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card bg-white/70 dark:bg-[#18181B]/60 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[280px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D9FF00]/20 transition-colors duration-500">
                <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#D9FF00] transition-colors duration-500"></div>
              </div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                Retention
              </span>
            </div>
            <div>
              <div className="text-6xl font-sans font-bold tracking-tighter mb-4 text-black dark:text-white">
                90
                <span className="text-4xl align-top text-gray-400 dark:text-gray-600">
                  +
                </span>
              </div>
              <p className="font-serif italic text-lg leading-snug text-gray-600 dark:text-gray-400">
                Client retention rate for automated workflow systems.
              </p>
            </div>
          </div>

          {/* Card 4 (Dark) */}
          <div className="bg-black dark:bg-white rounded-3xl p-8 flex flex-col justify-between h-full min-h-[280px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9FF00] blur-[60px] opacity-40 rounded-full pointer-events-none group-hover:opacity-60 transition-opacity"></div>
            <div className="mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full border border-white/20 dark:border-black/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-1">
                Accuracy
              </span>
            </div>
            <div className="relative z-10">
              <div className="text-6xl font-sans font-bold tracking-tighter mb-4 text-white dark:text-black">
                0.01
                <span className="text-4xl align-top text-gray-500">%</span>
              </div>
              <p className="font-serif italic text-lg leading-snug text-gray-300 dark:text-gray-700">
                Error rate achieved after model calibration phase.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full border-t border-gray-200 dark:border-white/10 flex justify-between pt-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex-wrap gap-4">
          <span>Forbes</span>
          <span>Fox Business</span>
          <span>Yahoo! Finance</span>
          <span>TED</span>
          <span>ABC News</span>
        </div>
      </main>
    </div>
  );
};

export default KeyMetrics;