const PhilosophySection = () => {
  return (
    <section className="relative w-full border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 overflow-hidden bg-[#0c0a09]">
      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Top Pill Badge (Centered) */}
        <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
          <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
            Our Philosophy
          </span>
        </div>

        {/* Headline (Centered, without wrapping) */}
        <h2 className="font-sans text-[24px] sm:text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight text-center sm:whitespace-nowrap">
          Where Strategy Meets Creative Distinction.
        </h2>

        {/* Subtitle / Description (Centered, without wrapping on larger screens) */}
        <p className="mt-3.5 max-w-4xl font-sans text-[13.5px] sm:text-[15px] leading-relaxed text-[#a1a1aa] text-center md:whitespace-nowrap">
          Great marketing isn&apos;t just about noise. It&apos;s about engineering work that commands attention and drives revenue.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
