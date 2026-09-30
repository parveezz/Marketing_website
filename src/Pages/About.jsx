import SEO from "../Components/SEO";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      number: "01",
      title: "Clarity",
      description:
        "We simplify complex marketing challenges and create clear strategies that give businesses direction.",
    },
    {
      number: "02",
      title: "Purpose",
      description:
        "Every idea, campaign, and creative decision should have a reason behind it and contribute to a meaningful business goal.",
    },
    {
      number: "03",
      title: "Consistency",
      description:
        "Strong brands are built through consistent communication, experiences, and decisions across every touchpoint.",
    },
    {
      number: "04",
      title: "Growth",
      description:
        "We focus on building marketing systems that create opportunities for sustainable and long-term growth.",
    },
  ];

  return (
    <main className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      <SEO
        title="About Us"
        description="Learn more about ZIH Marketing Consultancy and our strategic philosophy."
      />

      {/* =====================================================
          1. TOP BANNER HEADER (MATCHING REFERENCE IMAGE)
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 md:py-11 overflow-hidden bg-[#0c0a09]">
        {/* Background Vertical Grid Guide Lines (12 Columns) */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/[0.04] h-full" />
          ))}
        </div>

        {/* Subtle Ambient Waves Texture */}
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

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Centered Heading */}
          <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[48px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight">
            About Us
          </h1>

          {/* Centered Subtitle */}
          <p className="mt-2.5 max-w-2xl font-sans text-[13.5px] sm:text-[15px] leading-relaxed text-[#a1a1aa]">
            Welcome to ZIH, where strategic clarity, creative precision, and client-centricity converge to shape the future of digital growth.
          </p>
        </div>
      </section>

      {/* =====================================================
          2. ABOUT ZIH SECTION (MATCHING REFERENCE IMAGE 2-COL)
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 md:py-11 overflow-hidden bg-[#0c0a09]">
        {/* Background Vertical Grid Guide Lines (12 Columns) */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/[0.04] h-full" />
          ))}
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Heading & Present Text */}
          <div>
            <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.02em] text-white leading-tight">
              About ZIH
            </h2>

            <div className="mt-4 space-y-4 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
              <p>
                ZIH is a marketing consultancy built around a simple idea:
                effective marketing starts with understanding. We combine
                strategy, creativity, and purposeful execution to help
                businesses build brands that connect with the people they
                want to reach.
              </p>

              <p>
                Businesses don&apos;t need more noise. They need clarity. They need
                to understand who they are speaking to, what makes them
                different, and how to communicate that difference effectively.
                At ZIH, we work across strategy, branding, advertising, and
                social media to create marketing that is intentional,
                consistent, and connected to real business objectives.
              </p>

              <p>
                Our approach is collaborative. We work closely with our
                clients, understand their challenges, and build solutions
                around where they want to go.
              </p>
            </div>
          </div>

          {/* Right Column: Previous About Us Image (/images/about-team.jpg) */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#141215] shadow-2xl group">
              <img
                src="/images/about-team.jpg"
                alt="About ZIH Team"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="600"
                className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. OUR STORY / TIMELINE
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 md:py-11 overflow-hidden bg-[#0c0a09]">
        <div className="relative z-10 mx-auto w-full max-w-full">
          <div className="mb-6 sm:mb-8">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Our Story
              </span>
            </div>
            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
              Built on a foundation of clarity and purpose.
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-5 sm:p-6 backdrop-blur-md">
              <span className="font-sans text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                01 • Genesis
              </span>
              <h3 className="mt-2 font-sans text-[17px] sm:text-[18px] font-semibold text-white">
                The Beginning
              </h3>
              <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                Founded by Syed Zubair Hafeez, ZIH started with a singular vision: to strip away the vanity metrics and jargon from marketing and replace it with genuine strategy.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-5 sm:p-6 backdrop-blur-md">
              <span className="font-sans text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                02 • Growth
              </span>
              <h3 className="mt-2 font-sans text-[17px] sm:text-[18px] font-semibold text-white">
                Our Evolution
              </h3>
              <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                Over the years, we expanded capabilities across digital, branding, and performance campaigns, maintaining our strategy-first commitment for high-growth partners.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-5 sm:p-6 backdrop-blur-md">
              <span className="font-sans text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                03 • Vision
              </span>
              <h3 className="mt-2 font-sans text-[17px] sm:text-[18px] font-semibold text-white">
                Looking Ahead
              </h3>
              <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                Today, ZIH acts as a trusted growth partner for ambitious brands, continuously adopting modern systems while staying grounded in psychological clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. VALUES ("WHAT GUIDES US")
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 md:py-11 overflow-hidden bg-[#0c0a09]">
        <div className="relative z-10 mx-auto grid w-full max-w-full grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                  What Guides Us
                </span>
              </div>
              <h2 className="font-sans text-[24px] sm:text-[32px] font-semibold text-white tracking-tight">
                Principles behind the work.
              </h2>

              <div className="mt-4 space-y-3.5 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                <p>
                  At ZIH, our values aren&apos;t abstract slogans—they are the operational foundation of every strategy, campaign, and decision we execute across digital, print, and experiential channels.
                </p>
                <p>
                  We believe meaningful brand equity isn&apos;t built on shortcuts or vanity metrics. It comes from disciplined strategy, honest alignment with human behavior, and the consistency to deliver measurable, sustainable results over time.
                </p>
              </div>

              {/* Operational Commitments Checklist */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                  Our Operational Commitments:
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                    <span>Senior-Led Strategy & Execution Without Junior Handoffs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                    <span>100% Transparent Attribution, Reporting & Media Spend Clarity</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                    <span>Cross-Functional Integration With Your Internal Sales & Ops Teams</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                    <span>Continuous Weekly Creative Iteration & Funnel Optimization</span>
                  </div>
                </div>
              </div>

              {/* Core Pillars Tags */}
              <div className="mt-5">
                <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                  Industries & Domains We Elevate
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Educational Institutions", "Global Conclaves & Events", "Healthcare & Wellness", "Retail & Hospitality", "B2B Enterprise", "Consumer Brands"].map((domain) => (
                    <span
                      key={domain}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-sans text-[11px] text-[#d4d4d8]"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
              <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                &ldquo;Strategy without clarity is noise. Creativity without purpose is waste. We build growth engines where every creative asset serves a measurable commercial objective.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                  The ZIH Creed
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-xl border border-white/10 bg-[#141215]/70 p-4.5 sm:p-5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-sans text-[16px] sm:text-[17px] font-semibold text-white">
                    {value.title}
                  </h3>
                  <span className="font-sans text-[11px] font-bold text-[#c4f82a]">
                    {value.number}
                  </span>
                </div>
                <p className="font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. LEADERSHIP & FOUNDER MESSAGE (FEATURING CEO)
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 overflow-hidden bg-[#0c0a09]">
        <div className="relative z-10 mx-auto w-full max-w-5xl flex flex-col items-center">
          <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Leadership
              </span>
            </div>
            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
              The mind behind the strategy.
            </h2>
          </div>

          <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-12">
            {/* Left Card: CEO Photo & Title */}
            <div className="md:col-span-4 group flex flex-col justify-between rounded-xl border border-white/10 bg-[#141215]/80 p-3.5 transition-all duration-300 hover:border-white/25">
              <div className="overflow-hidden bg-[#16141a] rounded-lg w-full aspect-[4/4.5] border border-white/10">
                <img
                  src="/images/ceo.jpg"
                  alt="Syed Zubair Hafeez"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="450"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-sans text-[16px] font-semibold text-white">
                  Syed Zubair Hafeez
                </h3>
                <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[1.2px] text-[#c4f82a]">
                  CEO &amp; Founder
                </p>
              </div>
            </div>

            {/* Right Card: Message About ZIH & Our Digital Presence */}
            <div className="md:col-span-8 flex flex-col justify-between rounded-xl border border-white/10 bg-[#141215]/80 p-6 sm:p-8 backdrop-blur-md">
              <div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                  Founder&apos;s Note • Our Digital Home
                </span>

                <h3 className="mt-2 font-sans text-[20px] sm:text-[24px] font-semibold text-white leading-snug">
                  Where Strategic Clarity Meets Purposeful Execution.
                </h3>

                <div className="mt-4 space-y-3.5 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
                  <p>
                    Welcome to the official digital home of <strong className="font-medium text-white">ZIH Marketing Consultancy</strong>. This platform is designed to give you a transparent look into how we think, how we build brands, and the measurable impact we deliver for our partners across education, enterprise conclaves, hospitality, and modern consumer businesses.
                  </p>
                  <p>
                    Every case study, service blueprint, and campaign showcased on this website reflects our core belief: great marketing is not about making noise—it is about engineering trust, positioning your brand with unmistakable authority, and turning audience attention into sustainable long-term growth.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="font-sans text-[13px] font-semibold text-white">
                    Syed Zubair Hafeez
                  </p>
                  <p className="font-sans text-[11.5px] text-[#a1a1aa]">
                    Founder &amp; Chief Executive Officer, ZIH Marketing Consultancy
                  </p>
                </div>

                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold text-[#c4f82a] hover:underline"
                >
                  <span>Explore Our Work &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. BOTTOM CTA
      ====================================================== */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 overflow-hidden bg-[#0c0a09]">
        <div className="relative z-10 mx-auto flex w-full max-w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#c4f82a]">
              Start Something Meaningful
            </span>
            <h2 className="mt-1.5 max-w-[700px] font-sans text-[24px] sm:text-[30px] font-semibold text-white leading-tight">
              Ready to transform your ideas into digital masterpieces?
            </h2>
          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 rounded-xl bg-[#c4f82a] px-7 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
          >
            Start Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;