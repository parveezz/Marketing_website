import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const stories = [
    {
      name: "Sarah Jenkins",
      role: "VP of Growth, TechFlow",
      tag: "B2B SaaS",
      avatar: "/images/avatar-sarah-jenkins.jpg",
      metric: "-42% CAC",
      before:
        "We were burning through $45k/month on paid ads with zero attribution. Our internal team was exhausted and acquisition costs kept compounding without scalable returns.",
      after:
        "ZIH audited our funnel and rebuilt our full-funnel creative matrix. Within 90 days, our customer acquisition cost dropped 42% while qualified pipeline doubled.",
    },
    {
      name: "Rahul Mehta",
      role: "Founder, Elevate Direct",
      tag: "E-Commerce",
      avatar: "/images/avatar-rahul-mehta.jpg",
      metric: "3.8x ROAS",
      before:
        "Our brand messaging was fragmented across three disconnected agencies. We had strong incoming traffic, but our conversion rate was stagnant at 0.9%.",
      after:
        "ZIH united our brand narrative with aggressive CRO testing. Our blended conversion rate surged to 2.8%, and ad spend delivered a consistent 3.8x return on ad spend.",
    },
    {
      name: "Meera Patel",
      role: "Head of Marketing, Lumina Health",
      tag: "Consumer Tech",
      avatar: "/images/avatar-meera-patel.jpg",
      metric: "+185% Retention",
      before:
        "Every new launch felt like starting from ground zero. We lacked market differentiation and couldn't retain customers beyond their initial purchase.",
      after:
        "They helped us carve an unmistakable market positioning. Our organic retention jumped 185% and enterprise partnerships became our #1 growth engine.",
    },
  ];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0c0a09] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full">
        {/* =========================================================
            HEADER (TRANSFORMATION STORIES)
        ========================================================== */}
        <div className="mb-8 sm:mb-10 flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
            <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
              Transformation Stories
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight max-w-3xl">
            Real Brands. Real Shifts. Real Growth.
          </h2>

          <p className="mt-2.5 max-w-xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            See how intentional strategy and sharp execution turn marketing bottlenecks into predictable momentum.
          </p>
        </div>

        {/* =========================================================
            TRANSFORMATION CARDS (BEFORE / AFTER COMPARISON)
        ========================================================== */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#141215]/85 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[#18151a]/95 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 rounded-lg object-cover border border-white/15"
                    />
                    <div>
                      <h3 className="font-sans text-[14.5px] font-semibold text-white leading-snug">
                        {story.name}
                      </h3>
                      <p className="font-sans text-[11.5px] text-[#a1a1aa] leading-tight mt-0.5">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <span className="rounded border border-white/10 bg-[#1f1d22] px-2 py-0.5 font-sans text-[10.5px] font-medium text-[#d4d4d8]">
                    {story.tag}
                  </span>
                </div>

                {/* BEFORE SECTION */}
                <div className="mt-3.5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-[#a1a1aa]">
                      BEFORE
                    </span>
                  </div>
                  <p className="font-sans text-[12.5px] leading-relaxed text-[#a1a1aa]">
                    &ldquo;{story.before}&rdquo;
                  </p>
                </div>
              </div>

              {/* AFTER / OUTCOME SECTION (EMBEDDED CONTRAST CONTAINER) */}
              <div className="mt-4 rounded-lg border border-white/10 bg-[#0a0a0a] p-3 sm:p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-[#c4f82a] text-[12px]" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                      AFTER
                    </span>
                  </div>
                  <span className="rounded bg-[#c4f82a] px-1.5 py-0.5 font-sans text-[10px] font-bold text-black">
                    {story.metric}
                  </span>
                </div>
                <p className="font-sans text-[12.5px] leading-relaxed text-[#f4f4f5]">
                  &ldquo;{story.after}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM PAGINATION PILLS / INDICATOR
        ========================================================== */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1">
          {stories.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="flex h-7 min-w-7 items-center justify-center px-1 cursor-pointer"
            >
              <span
                className={`block h-1.5 transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? "w-8 bg-[#c4f82a]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
