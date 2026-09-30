import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Strategic Marketing",
      description:
        "We build clear marketing strategies that connect your business goals with the right audience, positioning, channels, and opportunities for sustainable growth.",
      path: "/services/strategic-marketing",
      // Compass / Target Icon
      icon: (
        <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "Branding",
      description:
        "We create distinctive brand identities that communicate who you are, what you stand for, and why your audience should choose you in a crowded market.",
      path: "/services/branding",
      // Paintbrush / Pen Icon (matches reference design)
      icon: (
        <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
          <path d="M16 16l6-6" />
          <path d="m18 8 2-2a2.83 2.83 0 0 0-4-4l-2 2" />
          <path d="m15 5 4 4" />
        </svg>
      ),
    },
    {
      title: "Advertising",
      description:
        "We create targeted advertising campaigns designed to put your business in front of the right people and turn digital attention into measurable revenue.",
      path: "/services/advertising",
      // Lightning / Energy Icon (matches reference design)
      icon: (
        <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Social Media",
      description:
        "We build thoughtful social media strategies and content that help businesses communicate consistently, build lasting relationships, and stay relevant.",
      path: "/services/social-media",
      // Puzzle / Connection Icon (matches reference design)
      icon: (
        <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 7.85c0-1.571-1.285-2.85-2.87-2.85h-1.07V3.5A2.5 2.5 0 0 0 13 1a2.5 2.5 0 0 0-2.499 2.5V5h-1.07C7.846 5 6.56 6.279 6.56 7.85v1.07H5.06A2.5 2.5 0 0 0 2.56 11.42a2.5 2.5 0 0 0 2.5 2.5h1.5v1.07c0 1.571 1.286 2.86 2.871 2.86h1.07v1.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.499-2.5v-1.5h1.07c1.585 0 2.87-1.289 2.87-2.86v-1.07h1.5a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5h-1.5V7.85z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 overflow-hidden bg-[#0c0a09]">

      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* 2. Ambient Topographic Waves Texture in Background (Subtle Neutral) */}
      <div className="pointer-events-none absolute inset-0 opacity-15 z-0">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 100 Q 360 40, 720 120 T 1440 80" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <path d="M0 180 Q 360 120, 720 200 T 1440 160" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
          <path d="M0 260 Q 360 200, 720 280 T 1440 240" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <path d="M0 340 Q 360 280, 720 360 T 1440 320" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full">

        {/* =========================================================
            HEADER (MATCHING REFERENCE IMAGE)
        ========================================================== */}
        <div className="mb-8 sm:mb-9 flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
            <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
              Our Services
            </span>
          </div>

          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.02em] text-[#fafafa]">
            High-Impact Digital Solutions
          </h2>

          <p className="mt-2.5 max-w-2xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            Transform your brand with innovative marketing, design, and growth systems that engage and convert.
          </p>
        </div>

        {/* =========================================================
            SERVICES CARDS GRID
        ========================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#141215]/85 backdrop-blur-md p-5 sm:p-5.5 transition-all duration-300 hover:border-white/25 hover:bg-[#18151a]/95 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Heading Beside Icon (Horizontal Row) */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1e1c20]/90 text-[#c4f82a] shadow-inner transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>

                  <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-[#fafafa] transition-colors group-hover:text-white leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="font-sans text-[12.5px] sm:text-[13px] leading-relaxed text-[#a1a1aa]">
                  {service.description}
                </p>
              </div>

              {/* Bottom Learn More Button */}
              <div className="mt-5 pt-1">
                <Link
                  to={service.path}
                  className="block w-full rounded-xl border border-white/10 bg-[#1f1d22]/80 py-2.5 px-4 text-center font-sans text-[13px] font-medium text-[#fafafa] transition-all duration-200 hover:bg-white/10 hover:border-white/25 hover:text-[#c4f82a]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
