import React from "react";

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#111111] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <section className="w-full py-20 lg:py-32 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-start">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-[10px] tracking-[0.2em] font-bold uppercase text-gray-500 dark:text-gray-400 bg-white dark:bg-[#1A1A1A] shadow-sm">
                Plaiground Performance
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl leading-[1.1] mb-8">
              <span className="font-bold block text-gray-900 dark:text-white">
                Boosting
              </span>
              <span className="font-serif italic text-gray-300 dark:text-gray-600 block">
                Efficiency{" "}
                <span className="not-italic font-bold font-sans text-gray-900 dark:text-white">
                  with
                </span>
              </span>
              <span className="font-bold block text-gray-900 dark:text-white">
                Embedded AI
              </span>
              <span className="font-bold block text-gray-900 dark:text-white">
                Solutions
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              We don't sell tools. We build custom AI infrastructure that scales
              output without scaling headcount.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8 lg:mt-0">
            {/* Metric 1 */}
            <div className="flex flex-col h-full group">
              <div className="flex items-baseline mb-4">
                <span className="text-7xl font-bold text-gray-900 dark:text-white tracking-tighter">
                  70
                </span>
                <span className="text-3xl font-medium text-gray-400 dark:text-gray-500 ml-1">
                  %
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-gray-400 h-12 mb-8">
                Faster order-to-fulfillment processing speed
              </p>
              <div className="flex-grow min-h-[300px] w-full bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:border-[#a3e635]/30">
                <div
                  className="absolute inset-4 rounded-2xl bg-lime-50 dark:bg-lime-900/10 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(#bef264 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-lime-100/50 to-transparent dark:from-lime-900/20 pointer-events-none rounded-b-3xl"></div>
              </div>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col h-full group">
              <div className="flex items-baseline mb-4">
                <span className="text-7xl font-bold text-gray-900 dark:text-white tracking-tighter">
                  80
                </span>
                <span className="text-3xl font-medium text-gray-400 dark:text-gray-500 ml-1">
                  %
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-gray-400 h-12 mb-8">
                Reduction in manual audit and documentation time
              </p>
              <div className="flex-grow min-h-[300px] w-full bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:border-[#a3e635]/30">
                <div
                  className="absolute inset-4 rounded-2xl bg-lime-50 dark:bg-lime-900/10 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(#bef264 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-lime-100/50 to-transparent dark:from-lime-900/20 pointer-events-none rounded-b-3xl"></div>
              </div>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col h-full group">
              <div className="flex items-baseline mb-4">
                <span className="text-7xl font-bold text-gray-900 dark:text-white tracking-tighter">
                  47
                </span>
                <span className="text-3xl font-medium text-gray-400 dark:text-gray-500 ml-1">
                  %
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-gray-400 h-12 mb-8">
                Days to full ROI on client churn prevention systems
              </p>
              <div className="flex-grow min-h-[300px] w-full bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:border-[#a3e635]/30">
                <div
                  className="absolute inset-4 rounded-2xl bg-lime-50 dark:bg-lime-900/10 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(#bef264 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-lime-100/50 to-transparent dark:from-lime-900/20 pointer-events-none rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111111]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-8">
            Our clients and products have been featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-serif font-bold text-gray-800 dark:text-gray-200">
              FORBES
            </span>
            <span className="text-xl font-sans font-bold text-gray-800 dark:text-gray-200">
              FOX BUSINESS
            </span>
            <span className="text-xl font-sans font-bold text-gray-800 dark:text-gray-200">
              YAHOO FINANCE
            </span>
            <span className="text-xl font-serif font-black text-gray-800 dark:text-gray-200">
              TED
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMetrics;