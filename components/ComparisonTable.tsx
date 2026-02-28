import React from "react";

const ComparisonTable: React.FC = () => {
  return (
    <div className="bg-white text-[#111827] font-sans transition-colors duration-300 antialiased py-24 flex items-center justify-center">
      <section className="relative w-full px-6 lg:px-12 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[-10%] right-[10%] w-[800px] h-[800px] bg-[#A3D900]/10 rounded-full blur-[60px] opacity-50 animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[60px] opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Comparison
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-gray-900">
              Plaiground vs.{" "}
              <span className="font-serif italic text-gray-500">
                Other Options
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              What You Actually Get With Each Approach
            </p>
          </div>

          <div className="relative overflow-x-auto hide-scrollbar rounded-3xl glass-card bg-white/40 p-1">
            <div className="min-w-[1000px] grid grid-cols-6 text-sm">
              <div className="col-span-1 p-6 flex items-end font-semibold text-gray-400 text-xs uppercase tracking-wider">
                Features
              </div>
              <div className="col-span-1 p-6 pb-8 bg-white/80 rounded-t-2xl shadow-sm border-x border-t border-gray-100 flex flex-col items-center justify-end relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#A3D900]"></div>
                <span className="font-bold text-lg text-gray-900 mb-1">
                  Plaiground
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Integrated AI
                </span>
              </div>
              <div className="col-span-1 p-6 flex flex-col items-center justify-end text-center">
                <span className="font-semibold text-gray-700 mb-1">
                  AI Automation Agency
                </span>
              </div>
              <div className="col-span-1 p-6 flex flex-col items-center justify-end text-center">
                <span className="font-semibold text-gray-700 mb-1">
                  Freelancer
                </span>
              </div>
              <div className="col-span-1 p-6 flex flex-col items-center justify-end text-center">
                <span className="font-semibold text-gray-700 mb-1">
                  New Employee
                </span>
              </div>
              <div className="col-span-1 p-6 flex flex-col items-center justify-end text-center">
                <span className="font-semibold text-gray-700 mb-1">
                  DIY Internal
                </span>
              </div>

              {/* Row 1 */}
              <div className="col-span-6 grid grid-cols-6 bg-white/60 backdrop-blur-sm rounded-lg my-1 group hover:bg-white/80 transition-colors">
                <div className="col-span-1 p-6 flex items-center font-medium text-gray-900">
                  Time to Production
                </div>
                <div
                  className="col-span-1 p-6 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163, 217, 0, 0.05) 0%, rgba(163, 217, 0, 0.02) 100%)",
                    borderLeft: "1px solid rgba(163, 217, 0, 0.1)",
                    borderRight: "1px solid rgba(163, 217, 0, 0.1)",
                  }}
                >
                  <span className="font-bold text-gray-900 bg-white/50 px-3 py-1 rounded-full border border-[#A3D900]/20">
                    Days
                  </span>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center text-gray-500">
                  Weeks
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center text-gray-500">
                  Weeks
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center text-gray-500">
                  Months
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center text-gray-500">
                  Months
                </div>
              </div>

              {/* Row 2 */}
              <div className="col-span-6 grid grid-cols-6 bg-white/60 backdrop-blur-sm rounded-lg my-1 group hover:bg-white/80 transition-colors">
                <div className="col-span-1 p-6 flex items-center font-medium text-gray-900">
                  Works in Your Systems
                </div>
                <div
                  className="col-span-1 p-6 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163, 217, 0, 0.05) 0%, rgba(163, 217, 0, 0.02) 100%)",
                    borderLeft: "1px solid rgba(163, 217, 0, 0.1)",
                    borderRight: "1px solid rgba(163, 217, 0, 0.1)",
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/20 scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center opacity-50 grayscale">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center opacity-50 grayscale">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center opacity-50 grayscale">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                </div>
              </div>

               {/* Row 3 */}
              <div className="col-span-6 grid grid-cols-6 bg-white/60 backdrop-blur-sm rounded-lg my-1 group hover:bg-white/80 transition-colors">
                <div className="col-span-1 p-6 flex items-center font-medium text-gray-900">
                  Handles Edge Cases
                </div>
                <div
                  className="col-span-1 p-6 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163, 217, 0, 0.05) 0%, rgba(163, 217, 0, 0.02) 100%)",
                    borderLeft: "1px solid rgba(163, 217, 0, 0.1)",
                    borderRight: "1px solid rgba(163, 217, 0, 0.1)",
                  }}
                >
                 <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/20 scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center opacity-50 grayscale">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
              </div>

               {/* Row 4 */}
              <div className="col-span-6 grid grid-cols-6 bg-white/60 backdrop-blur-sm rounded-lg my-1 group hover:bg-white/80 transition-colors">
                <div className="col-span-1 p-6 flex items-center font-medium text-gray-900">
                  Zero Maintenance
                </div>
                <div
                  className="col-span-1 p-6 flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163, 217, 0, 0.05) 0%, rgba(163, 217, 0, 0.02) 100%)",
                    borderLeft: "1px solid rgba(163, 217, 0, 0.1)",
                    borderRight: "1px solid rgba(163, 217, 0, 0.1)",
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/20 scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    $$$ Monthly
                  </span>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    Hourly Rate
                  </span>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    Salary
                  </span>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
              </div>

               {/* Row 5 */}
              <div className="col-span-6 grid grid-cols-6 bg-white/60 backdrop-blur-sm rounded-lg my-1 group hover:bg-white/80 transition-colors">
                <div className="col-span-1 p-6 flex items-center font-medium text-gray-900">
                  Enterprise Security
                </div>
                <div
                  className="col-span-1 p-6 flex items-center justify-center relative rounded-b-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163, 217, 0, 0.05) 0%, rgba(163, 217, 0, 0.02) 100%)",
                    borderLeft: "1px solid rgba(163, 217, 0, 0.1)",
                    borderRight: "1px solid rgba(163, 217, 0, 0.1)",
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/20 scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
                <div className="col-span-1 p-6 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center justify-center p-8 rounded-3xl bg-gray-50 border border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-glass-shine opacity-60"></div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 relative z-10">
                The Bottom Line
              </h4>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                Plaiground isn't just another tool or a contractor. It's a fully
                integrated, autonomous intelligence layer that scales instantly
                without the overhead of traditional hiring or agency management.
              </p>
              <div className="mt-6 relative z-10">
                <button className="relative overflow-hidden group rounded-full bg-gray-900 text-white px-8 py-3 font-semibold text-sm transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Deploy Intelligence
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonTable;