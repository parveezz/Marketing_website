import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-0 md:min-h-[calc(100vh-76px)] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-20 overflow-hidden bg-[#0c0a09]">

      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* 2. Topographic Wireframe Mountain Landscape at the Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-[180px] sm:h-[260px] md:h-[420px] overflow-hidden z-0 flex items-end">
        <svg
          className="w-full h-full opacity-60"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wireframeNeutral" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="100%" stopColor="#0c0a09" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal Topographic Contour Curves */}
          <path d="M0 500 C 180 480, 280 420, 420 340 C 560 260, 640 280, 720 320 C 800 360, 920 250, 1060 290 C 1200 330, 1320 460, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="1.5" />
          <path d="M0 500 C 180 460, 290 390, 420 310 C 550 230, 650 260, 720 290 C 790 320, 930 220, 1060 260 C 1190 300, 1310 430, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="1.3" />
          <path d="M0 500 C 180 440, 300 360, 420 280 C 540 200, 660 240, 720 260 C 780 280, 940 190, 1060 230 C 1180 270, 1300 400, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="1.2" />
          <path d="M0 500 C 190 420, 310 330, 420 250 C 530 170, 670 210, 720 230 C 770 250, 950 160, 1060 200 C 1170 240, 1290 370, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="1.1" />
          <path d="M0 500 C 200 400, 320 300, 420 220 C 520 140, 680 180, 720 200 C 760 220, 960 130, 1060 170 C 1160 210, 1280 340, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="1" />
          <path d="M0 500 C 210 380, 330 270, 420 190 C 510 110, 690 150, 720 170 C 750 190, 970 100, 1060 140 C 1150 180, 1270 310, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="0.9" />
          <path d="M0 500 C 220 360, 340 240, 420 160 C 500 80, 700 120, 720 140 C 740 160, 980 70, 1060 110 C 1140 150, 1260 280, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="0.8" />
          <path d="M0 500 C 230 340, 350 210, 420 130 C 490 50, 710 90, 720 110 C 730 130, 990 40, 1060 80 C 1130 120, 1250 250, 1440 500" stroke="url(#wireframeNeutral)" strokeWidth="0.75" />

          {/* Vertical Wireframe Perspective Lines */}
          {Array.from({ length: 36 }).map((_, idx) => {
            const xPos = idx * 40;
            return (
              <path
                key={idx}
                d={`M${xPos} 500 L${720 + (xPos - 720) * 0.45} ${120 + Math.abs(xPos - 720) * 0.15}`}
                stroke="url(#wireframeNeutral)"
                strokeWidth="0.6"
                strokeDasharray="2 3"
              />
            );
          })}
        </svg>
      </div>

      {/* 3. Centered Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >

        {/* Main Headline */}
        <h1 className="font-sans text-[32px] sm:text-[46px] md:text-[62px] lg:text-[74px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#fafafa]">
          A Digital Marketing Studio
          <br />
          that will Work
        </h1>

        {/* Audience Glassmorphic Pill Container */}
        <div className="mt-5 sm:mt-7 rounded-xl sm:rounded-2xl border border-white/10 bg-[#161618]/70 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13.5px] text-[#a1a1aa] shadow-lg">
          <span>For</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white shadow-sm">
            Startups
          </span>
          <span className="text-[#71717a]">,</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white shadow-sm">
            Enterprise leaders
          </span>
          <span className="text-[#71717a]">,</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white shadow-sm">
            Media &amp; Publishers
          </span>
          <span>and</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white shadow-sm">
            Social Good
          </span>
        </div>

        {/* Buttons: Our Works & Contact Us */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/our-work"
            className="rounded-xl border border-white/15 bg-[#1a1a1c]/90 px-5 py-2.5 sm:px-7 sm:py-3 font-sans text-[13px] sm:text-[14px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/30"
          >
            Our Works
          </Link>

          <Link
            to="/contact"
            className="rounded-xl bg-[#c4f82a] px-5 py-2.5 sm:px-7 sm:py-3 font-sans text-[13px] sm:text-[14px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
