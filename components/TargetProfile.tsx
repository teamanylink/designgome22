import React from "react";

const TargetProfile: React.FC = () => {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden w-full bg-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gray-100 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#A3D900]/10 rounded-full blur-[80px] opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Target Profile
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-gray-900">
            Who this is <span className="font-serif italic text-gray-500">for.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Right Fit Card */}
          <div className="group relative rounded-[2.5rem] bg-white border-t-4 border-[#A3D900] p-10 lg:p-14 h-full shadow-2xl shadow-[#A3D900]/5 transition-all duration-700 hover:shadow-[#A3D900]/10">
             <div className="absolute inset-0 bg-glass-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
                  Plaiground is the <br />
                  <span className="font-serif italic text-[#8DB800]">
                    right fit if:
                  </span>
                </h3>
                <div className="w-14 h-14 rounded-2xl bg-[#A3D900]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-6 h-6 text-[#8DB800]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/30">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-800 leading-snug">
                    You run a $10M-$100M operation with real complexity.
                  </span>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/30">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-800 leading-snug">
                    You need to automate decision-making, not just data entry.
                  </span>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#A3D900] flex items-center justify-center shadow-lg shadow-[#A3D900]/30">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-800 leading-snug">
                    You prioritize immediate deployment over lengthy workshops.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Not fit Card */}
          <div className="group relative rounded-[2.5rem] bg-gray-50/50 border border-gray-100 p-10 lg:p-14 h-full transition-all duration-700 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-semibold text-gray-400 leading-tight transition-colors group-hover:text-gray-500">
                  This is <br />
                  <span className="font-serif italic text-gray-800">
                    NOT for:
                  </span>
                </h3>
                <div className="w-14 h-14 rounded-2xl bg-gray-200/50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-500 leading-snug">
                    Companies looking for AI strategy consulting.
                  </span>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-500 leading-snug">
                    Early-stage startups without historical operational data.
                  </span>
                </li>
                <li className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-500 leading-snug">
                    Teams seeking a drag-and-drop dashboard tool.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="rounded-3xl bg-black p-[2px] overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A3D900]/30 via-transparent to-[#A3D900]/30 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative rounded-[22px] bg-[#0F0F0F] px-8 py-8 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 p-4 md:hidden">
                <div className="w-3 h-3 bg-[#A3D900] rounded-full animate-ping"></div>
              </div>
              <div className="flex items-start gap-6 max-w-2xl">
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#A3D900]/20 bg-[#A3D900]/5 items-center justify-center relative">
                  <div className="absolute w-full h-full rounded-full bg-[#A3D900]/10 animate-ping opacity-75"></div>
                  <div className="w-3 h-3 rounded-full bg-[#A3D900] shadow-[0_0_10px_rgba(163,217,0,0.8)]"></div>
                </div>
                <div>
                  <h4 className="text-white text-lg md:text-xl font-medium mb-1">
                    We only partner with 3-4 companies per quarter.
                  </h4>
                  <p className="text-gray-400 font-light">
                    Current availability:{" "}
                    <span className="text-[#A3D900] font-bold">
                      2 partnership slots
                    </span>{" "}
                    remaining this quarter.
                  </p>
                </div>
              </div>
              <button className="relative overflow-hidden w-full md:w-auto rounded-full bg-[#A3D900] text-black px-10 py-5 font-semibold text-sm transition-all hover:bg-[#b0e600] hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(163,217,0,0.3)] hover:shadow-[0_0_35px_rgba(163,217,0,0.5)]">
                <span className="relative z-10 flex justify-center items-center gap-2">
                  Apply for Partnership
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
  );
};

export default TargetProfile;