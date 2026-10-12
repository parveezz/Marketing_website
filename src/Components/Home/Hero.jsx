import { Link } from "react-router-dom";
import WorkUpdatesBanner from "../WorkUpdatesBanner";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[520px] w-full flex-col justify-end overflow-hidden bg-[#0a0a0a] px-4 pb-10 pt-20 sm:min-h-[560px] sm:px-6 sm:pb-12 sm:pt-24 md:min-h-[calc(100vh-76px)] md:px-8 lg:px-12 xl:px-16">

      {/* 1. Background Work Updates */}
      <div className="absolute inset-0 z-0">
        <WorkUpdatesBanner isHeroBg={true} theme="dark" />
      </div>

      {/* 1b. Legibility overlay — bottom-up dark fade */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      {/* 2. Hero Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">

          {/* Left Content — 80% on lg+ */}
          <div className="flex min-w-0 w-full flex-col items-start lg:w-[80%] lg:flex-none">


            {/* Headline — no width cap, explicit break at sm+ */}
            <h1 className="whitespace-normal font-sans text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-white [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)] sm:text-[32px] md:text-[38px] lg:text-[clamp(28px,2.6vw,42px)]">
              A Marketing Consultancy{" "}
              <span className="whitespace-nowrap text-[#c4f82a]">
                that Works
              </span>
            </h1>

            {/* Audience labels */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-white sm:mt-4 sm:gap-2 sm:text-[12px]">
              <span className="mr-1 text-white/60">For</span>

              {[
                "Startups",
                "Enterprise Leaders",
                "Media & Publishers",
                "Social Good",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 font-medium text-white backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content — CTA, 20% on lg+ */}
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center lg:w-[20%] lg:shrink-0 lg:flex-col lg:items-end">
            <Link
              to="/our-work"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#c4f82a] px-5 py-2.5 font-sans text-[13px] font-semibold text-black transition-all duration-200 shadow-[0_8px_24px_-8px_rgba(196,248,42,0.6)] hover:bg-[#b5e81f] hover:shadow-[0_10px_28px_-8px_rgba(196,248,42,0.8)] hover:scale-[1.02] active:scale-95"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;