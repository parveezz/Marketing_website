import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="relative w-full border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-7 overflow-hidden bg-[#0c0a09]">
      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* 2. Subtle Background Ambient Waves Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-15 z-0 flex items-center justify-center">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 150 C 360 60, 720 240, 1080 100 T 1440 170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <path d="M0 180 C 360 90, 720 270, 1080 130 T 1440 200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <path d="M0 210 C 360 120, 720 300, 1080 160 T 1440 230" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Centered Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[38px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight max-w-2xl">
            Let&apos;s Build Something Extraordinary Together.
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-3 max-w-xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            We would love to discuss how our strategic marketing, creative storytelling, and high-performance acquisition systems can accelerate your brand. Get in touch to discuss your next chapter.
          </p>

          {/* Centered CTA Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#c4f82a] px-7 py-3 font-sans text-[14px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105 cursor-pointer"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
