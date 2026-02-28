import React from "react";

const ConsultationCTA: React.FC = () => {
  return (
    <div className="bg-[#F2F2F2] dark:bg-[#0F0F0F] text-[#1A1A1A] dark:text-white transition-colors duration-300 antialiased font-sans py-20 flex items-center justify-center p-6">
      <section className="w-full max-w-6xl mx-auto relative group">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4FF33] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse dark:opacity-10 dark:mix-blend-normal"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float dark:opacity-20 dark:mix-blend-normal"></div>

        <div className="relative overflow-hidden bg-white dark:bg-[#151515] rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPgo8cmVjdCB3aWR0aD0nNCcgaGVpZ2h0PSc0JyBmaWxsPScjZmZmJy8+CjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyNjY2MnLz4KPC9zdmc+\")",
            }}
          ></div>

          <div className="flex flex-col lg:flex-row min-h-[500px]">
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center relative z-10">
              <span className="inline-block py-1 px-3 rounded-full border border-gray-200 dark:border-white/10 text-xs font-semibold tracking-wider uppercase mb-6 w-fit bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                Consultation
              </span>
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] mb-8 text-[#1A1A1A] dark:text-white tracking-tight">
                Transforming <br />
                <span className="italic font-light text-gray-500 dark:text-gray-400">
                  Ambition
                </span>{" "}
                into <br />
                Actionable
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Reality</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D4FF33]/30 -z-0 rounded-sm transform -rotate-1"></span>
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md mb-10 font-light">
                Don't let operational drag slow you down. Our senior engineers
                embed directly to identify bottlenecks and automate workflows.
                Within 30 days. Guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="relative overflow-hidden group bg-[#1A1A1A] dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center">
                    Book a Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-[#D4FF33]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                </button>
                <span className="text-sm text-gray-400 dark:text-gray-500 italic ml-2">
                  No commitment required.
                </span>
              </div>
            </div>

            {/* Illustration Side */}
            <div className="relative w-full lg:w-[45%] bg-gray-50 dark:bg-white/5 overflow-hidden flex items-center justify-center p-8 lg:p-0">
              <div className="relative w-full max-w-sm aspect-square">
                {/* Floating Card 1 */}
                <div className="absolute top-1/4 left-0 w-48 h-24 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-xl border border-white/40 dark:border-white/5 shadow-lg transform -rotate-6 z-20 flex items-center p-4">
                  <div className="w-2 h-2 rounded-full bg-[#D4FF33] mr-3"></div>
                  <div className="h-2 w-24 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                </div>

                {/* Floating Card 2 */}
                <div
                  className="absolute top-1/3 right-4 w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-white/10 shadow-xl z-10 flex flex-col justify-between p-5 animate-float"
                  style={{ animationDelay: "-2s" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-2 w-8 bg-gray-300 dark:bg-white/30 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-300 dark:bg-white/30 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full"></div>
                    <div className="h-1.5 w-2/3 bg-gray-200 dark:bg-white/10 rounded-full"></div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                    <div className="h-8 w-full bg-[#1A1A1A] dark:bg-white rounded-lg opacity-90"></div>
                  </div>
                </div>

                {/* Floating Card 3 (Stats) */}
                <div className="absolute bottom-1/4 left-8 w-56 h-32 bg-white/60 dark:bg-black/60 backdrop-blur-lg rounded-xl border border-white/60 dark:border-white/10 shadow-2xl transform rotate-3 z-30 p-5 flex flex-col justify-center">
                  <div className="font-serif italic text-2xl text-[#1A1A1A] dark:text-white mb-1">
                    94%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Efficiency Gain
                  </div>
                  <div className="mt-3 w-full bg-gray-200 dark:bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4FF33] w-[94%]"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-transparent to-[#D4FF33]/20 dark:from-white/5 dark:to-[#D4FF33]/10 rounded-full filter blur-2xl opacity-60 pointer-events-none"></div>
              </div>

              {/* Grid Background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                }}
              ></div>
              <div
                className="absolute inset-0 pointer-events-none dark:opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20 py-4 px-10 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            <span>Trusted by Industry Leaders</span>
            <div className="flex gap-2">
              <span className="h-1 w-1 rounded-full bg-[#D4FF33]"></span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationCTA;