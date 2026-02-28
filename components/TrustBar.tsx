import React from "react";

const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#050505] text-gray-900 dark:text-white antialiased transition-colors duration-300 py-12 flex flex-col items-center justify-center">
      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl border border-white/40 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm dark:shadow-none overflow-hidden px-8 py-12 md:px-12 md:py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#C2F970] rounded-b-full opacity-80"></div>
          <div className="flex flex-col items-center justify-center mb-10 md:mb-14">
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase text-center font-sans">
              Our clients and products have been featured in
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-baseline gap-x-12 gap-y-10 md:gap-x-24 opacity-60 dark:opacity-50 hover:opacity-100 dark:hover:opacity-90 transition-opacity duration-500 ease-in-out">
            <div className="group select-none">
              <span className="font-serif font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-100 tracking-tight">
                FORBES
              </span>
            </div>
            <div className="group select-none">
              <span className="font-sans font-black text-lg md:text-xl text-gray-800 dark:text-gray-200 uppercase tracking-tighter">
                Fox Business
              </span>
            </div>
            <div className="group select-none">
              <span className="font-sans font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100 tracking-tight">
                yahoo<span className="text-[#C2F970] font-black">!</span>{" "}
                <span className="font-light">finance</span>
              </span>
            </div>
            <div className="group select-none">
              <span className="font-sans font-black text-xl md:text-2xl text-gray-900 dark:text-gray-100 tracking-tight text-red-600 dark:text-white">
                TED
              </span>
            </div>
            <div className="group select-none">
              <span className="font-sans font-bold text-lg md:text-xl text-gray-800 dark:text-gray-200 tracking-widest uppercase">
                ABC News
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustBar;