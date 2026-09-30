const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "Discovery",
      description:
        "We immerse in your business model, customer data, and competitive landscape to uncover the exact leverage points standing between you and scale.",
    },
    {
      number: "02",
      title: "Strategize",
      subtitle: "Positioning",
      description:
        "We turn qualitative insights into an unmistakable market positioning and a rigorous, channel-by-channel growth blueprint.",
    },
    {
      number: "03",
      title: "Execute",
      subtitle: "Creative",
      description:
        "We deploy cohesive brand messaging, high-converting design, and precision campaigns built for predictable, compounding acquisition.",
    },
    {
      number: "04",
      title: "Evolve",
      subtitle: "Scale",
      description:
        "We measure full-funnel attribution in real time, refining creative velocity and scaling the exact levers driving sustainable revenue.",
    },
  ];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0c0a09] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full">
        {/* =========================================================
            CENTERED HEADER
        ========================================================== */}
        <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
            <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
              How We Work
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans text-[28px] sm:text-[36px] md:text-[42px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight max-w-2xl">
            A Simple, Proven Process.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            We keep the workflow transparent and disciplined, moving seamlessly from diagnostic clarity to compounding market execution.
          </p>
        </div>

        {/* =========================================================
            VERTICAL SEQUENCE (1, 2, 3, 4)
        ========================================================== */}
        <div className="mx-auto flex w-full flex-col items-center gap-6 sm:gap-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-full md:w-4/5 lg:w-[62%] max-w-3xl rounded-xl border border-white/10 bg-[#141215]/90 px-4 py-3.5 sm:px-6 sm:py-4.5 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[#18151a]/95 group"
            >
              {/* Inner content in a ROW */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3.5 sm:gap-5 w-full">
                {/* 1. Step Number Badge */}
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1e1c20] text-[#c4f82a] font-sans text-[17px] font-bold transition-transform duration-300 group-hover:scale-105">
                  {step.number}
                </div>

                {/* 2. Step Title & Subtitle */}
                <div className="sm:w-[130px] shrink-0 text-center sm:text-left">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.5px] text-[#a1a1aa]">
                    {step.subtitle}
                  </span>
                  <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-white transition-colors group-hover:text-[#c4f82a]">
                    {step.title}
                  </h3>
                </div>

                {/* 3. Description (in the same row) */}
                <div className="flex-1 text-center sm:text-left border-t sm:border-t-0 sm:border-l border-white/10 pt-2.5 sm:pt-0 sm:pl-5">
                  <p className="font-sans text-[12.5px] sm:text-[13px] leading-relaxed text-[#a1a1aa]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
