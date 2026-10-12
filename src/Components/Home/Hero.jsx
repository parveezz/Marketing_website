import { Link } from "react-router-dom";
import WorkUpdatesBanner from "../WorkUpdatesBanner";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[660px] md:min-h-[calc(100vh-76px)] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 overflow-hidden bg-[#0c0a09]">

      {/* 1. SLIDER BACKGROUND — scrolling work updates */}
      <div className="absolute inset-0 z-0">
        <WorkUpdatesBanner isHeroBg={true} theme="light" />
      </div>

      {/* 2. Light Effect Overlay — luminous without the dark blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      {/* 3. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* 4. Centered Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        {/* Top Eyebrow Badge */}
        <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 backdrop-blur-md shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
          <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
            Full-Service Marketing Consultancy &bull; Strategic, Creative &amp; Experiential
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sans text-[32px] sm:text-[46px] md:text-[62px] lg:text-[74px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#fafafa] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          A Marketing Consultancy
          <br />
          that will Work
        </h1>

        {/* Audience Glassmorphic Pill Container */}
        <div className="mt-5 sm:mt-7 rounded-xl sm:rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13.5px] text-[#e4e4e7] shadow-xl">
          <span>For</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white">
            Startups
          </span>
          <span className="text-[#a1a1aa]">,</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white">
            Enterprise leaders
          </span>
          <span className="text-[#a1a1aa]">,</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white">
            Media &amp; Publishers
          </span>
          <span>and</span>
          <span className="rounded-md sm:rounded-lg border border-white/10 bg-[#212124] px-2.5 py-0.5 sm:px-3 sm:py-1 font-medium text-white">
            Social Good
          </span>
        </div>

        {/* High-Conversion Primary Action */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto rounded-xl bg-[#c4f82a] px-7 py-3.5 font-sans text-[13.5px] sm:text-[14.5px] font-semibold text-black shadow-[0_0_30px_-5px_rgba(196,248,42,0.45)] transition-all duration-200 hover:bg-[#b0f516] hover:scale-105 flex items-center justify-center gap-2 text-center"
          >
            <span>Book a Growth Strategy Consultation</span>
            <span className="text-base font-bold">&rarr;</span>
          </Link>

          <Link
            to="/our-work"
            className="w-full sm:w-auto rounded-xl border border-white/20 bg-black/45 px-6 py-3.5 font-sans text-[13px] sm:text-[14px] font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:border-white/40 text-center"
          >
            Explore Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
