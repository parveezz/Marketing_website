import SEO from "../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const team = [
    {
      name: "Syed Zubair Hafeez",
      role: "CEO & Founder",
      image: "/images/ceo.jpg",
    },
    {
      name: "Elena Rostova",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          {/* Centered Heading */}
          <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[48px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight">
            About Us
          </h1>

          {/* Centered Subtitle */}
          <p className="mt-2.5 max-w-2xl font-sans text-[13.5px] sm:text-[15px] leading-relaxed text-[#a1a1aa]">
            Welcome to ZIH, where strategic clarity, creative precision, and client-centricity converge to shape the future of digital growth.
          </p>
        </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          {/* Right Column: Previous About Us Image (/images/about-team.jpg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#141215] shadow-2xl group">
              <img
                src="/images/about-team.jpg"
                alt="About ZIH Team"
                className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
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
          <div className="flex flex-col justify-between">
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

              <div className="mt-4 space-y-3.5 max-w-md font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                <p>
                  At ZIH, our values aren&apos;t abstract slogans—they are the operational foundation of every strategy, campaign, and decision we execute.
                </p>
                <p>
                  We believe meaningful brand equity isn&apos;t built on shortcuts or vanity metrics. It comes from disciplined strategy, honest alignment with human behavior, and the consistency to deliver measurable, sustainable results over time.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/80 p-4 max-w-md">
              <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                &ldquo;Strategy without clarity is noise. Creativity without purpose is waste.&rdquo;
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
          5. LEADERSHIP TEAM (FEATURING CEO)
      ====================================================== */}
      <section className="relative w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-7 sm:py-9 md:py-11 overflow-hidden bg-[#0c0a09]">
        <div className="relative z-10 mx-auto w-full max-w-full flex flex-col items-center">
          <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Leadership
              </span>
            </div>
            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
              The minds behind the strategy.
            </h2>
          </div>

          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-xl border border-white/10 bg-[#141215]/80 p-3 transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
              >
                <div className="overflow-hidden bg-[#16141a] rounded-lg w-full aspect-[4/4.5] border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <h3 className="font-sans text-[15px] font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-sans text-[10.5px] font-semibold uppercase tracking-[1px] text-[#c4f82a]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
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