import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO";
import { FiArrowUpRight, FiChevronDown, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const allServices = [
    {
      title: "Strategic Marketing",
      tagline: "Clarity Before Execution",
      description: "We build clear, data-informed marketing strategies that connect your business goals with the right audience, positioning, channels, and opportunities for sustainable, long-term commercial growth.",
      features: ["Market Research", "Marketing Strategy", "Audience Analysis", "Competitor Teardowns", "Growth Planning"],
      deliverables: ["12-Month GTM Architecture", "Unit Economics & CAC Modeling", "ICP Persona Segmentation", "Full-Funnel Opportunity Roadmap"],
      metric: "3.4x Avg Pipeline Velocity",
      path: "/services/strategic-marketing",
      image: "/images/service-planning.jpg"
    },
    {
      title: "Branding",
      tagline: "Distinctive & Enduring Identities",
      description: "We create distinctive brand identities that communicate who you are, what you stand for, and why your audience should choose you over competitors. We transform brands into defensible market assets.",
      features: ["Brand Strategy", "Brand Identity", "Visual Direction", "Brand Positioning", "Brand Guidelines"],
      deliverables: ["Comprehensive Brand Guidelines", "Visual Identity & Typography System", "Verbal Messaging Bible", "Packaging & Collateral System"],
      metric: "+185% Perceived Value Leverage",
      path: "/services/branding",
      image: "/images/service-branding.jpg"
    },
    {
      title: "Advertising",
      tagline: "Precision Acquisition Engines",
      description: "We create targeted advertising campaigns designed to put your business in front of high-intent prospects and turn digital attention into measurable, profitable commercial opportunities.",
      features: ["Campaign Strategy", "Paid Search (SEM)", "Paid Social Media", "Campaign Management", "Attribution Analysis"],
      deliverables: ["Multi-Channel Ad Architecture", "Rapid Creative Testing Sprints", "Dynamic Retargeting Funnels", "Weekly Cohort Attribution Reports"],
      metric: "-42% Average CAC Reduction",
      path: "/services/advertising",
      image: "/images/service-advertising-analytics.jpg"
    },
    {
      title: "Social Media",
      tagline: "High-Retention Community Systems",
      description: "We build thoughtful social media strategies and organic content pipelines that help businesses communicate consistently, foster real audience relationships, and cultivate cultural authority.",
      features: ["Social Media Strategy", "Content Planning", "Content Production", "Community Management", "Sentiment Analytics"],
      deliverables: ["Monthly Content Engine", "Executive Thought Leadership", "Influencer Partnership Sourcing", "Real-Time Community Engagement"],
      metric: "4.8x Organic Reach Growth",
      path: "/services/social-media",
      image: "/images/service-social-media-hero.jpg"
    }
  ];

  const engagementPhases = [
    {
      step: "01",
      name: "Discovery & Forensic Audit",
      timeline: "Weeks 1–2",
      description: "We deconstruct your historical analytics, conduct qualitative stakeholder interviews, teardown competitor positioning, and audit your unit economics to identify the highest-leverage growth bottlenecks."
    },
    {
      step: "02",
      name: "Strategic Architecture",
      timeline: "Weeks 3–4",
      description: "We draft the comprehensive blueprint: identifying your exact ICP personas, defining unique positioning matrices, prioritizing distribution channels, and structuring commercial KPI scorecards."
    },
    {
      step: "03",
      name: "Rapid Creative Prototyping",
      timeline: "Weeks 5–6",
      description: "Our design and content teams build the modular assets: high-converting landing pages, omnichannel advertising creative variants, messaging playbooks, and tracking infrastructure."
    },
    {
      step: "04",
      name: "Execution & Scaled Attribution",
      timeline: "Ongoing",
      description: "We deploy live campaigns, conduct systematic A/B experimentation, continuously reduce customer acquisition costs, and provide transparent weekly reporting dashboards tied to revenue."
    }
  ];

  const engagementModels = [
    {
      tier: "Embedded Growth Partner",
      badge: "Most Popular",
      bestFor: "High-growth businesses scaling revenue",
      description: "We act as your dedicated, full-stack marketing department—handling end-to-end strategy, creative production, ad management, and attribution.",
      includes: [
        "Full-funnel strategic direction & leadership",
        "Dedicated creative & performance media team",
        "Weekly executive sprint meetings & reports",
        "Continuous conversion rate optimization",
        "Direct Slack / communications access"
      ]
    },
    {
      tier: "Strategic Advisory & Sprints",
      badge: "High Velocity",
      bestFor: "Established brands launching or pivoting",
      description: "A focused, intensive 6 to 12-week advisory engagement delivering strategic clarity, market research, brand architecture, and execution playbooks.",
      includes: [
        "Comprehensive Go-To-Market roadmap",
        "Complete brand positioning framework",
        "Internal team training & operational handoff",
        "Competitor teardown & unit economics audit",
        "30-day post-launch optimization support"
      ]
    },
    {
      tier: "Targeted Media & Campaign Blitz",
      badge: "Specialized",
      bestFor: "Specific campaigns, rebrands, or events",
      description: "Precision-engineered deployment for major product launches, high-profile events, international expansions, or performance advertising sprints.",
      includes: [
        "Event branding & omnichannel promotion",
        "Multi-platform paid acquisition campaigns",
        "Rapid creative production & dynamic video ads",
        "Real-time live media coverage & social syndication",
        "Comprehensive post-campaign ROI audit"
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly do we start seeing measurable impact from our engagement?",
      answer: "While long-term brand equity builds progressively over quarters, our sprint-based onboarding is designed to generate immediate traction. Within the first 14 to 21 days, we complete the forensic audit, fix tracking leaks, and launch rapid-test campaigns that often surface quick-win revenue opportunities while the broader architecture is being deployed."
    },
    {
      question: "Can we hire ZIH for a single service or must we contract an integrated package?",
      answer: "You can absolutely partner with us for an individual capability—such as a focused Strategic Marketing roadmap, a standalone Branding overhaul, or targeted Paid Advertising management. However, our services are modular and designed to compound in effectiveness when deployed cohesively."
    },
    {
      question: "How does your team collaborate with our existing in-house personnel?",
      answer: "We view ourselves as an extension of your leadership, not an isolated vendor. If you already have in-house designers, copywriters, or product managers, we integrate directly with them—providing overarching strategic direction, performance benchmarks, and high-level campaign architecture while empowering your team to execute seamlessly."
    },
    {
      question: "What specific attribution and performance metrics do you report on?",
      answer: "We strictly reject vanity metrics like raw impressions or superficial follower counts unless they clearly tie to commercial intent. We track Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Customer Lifetime Value (LTV), Pipeline Velocity, and Blended Marketing Efficiency Ratios (MER) through real-time dashboards."
    },
    {
      question: "What sets ZIH apart from traditional legacy marketing agencies?",
      answer: "Traditional agencies often rely on bloated layers of middle management, slow revision cycles, and fragmented sub-contracting. ZIH is built around senior-led strategic clarity, rapid iterative testing, and transparent alignment with your revenue goals. We treat your capital with the same discipline as our own."
    }
  ];

  return (
    <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <SEO
        title="Services & Capabilities | ZIH Marketing Consultancy"
        description="Comprehensive marketing capabilities for growing brands: Strategic Marketing, Branding, Advertising, and Social Media systems."
      />

      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* =====================================================
          1. HERO
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-8 sm:py-11 md:py-14 bg-[#0c0a09]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
              Comprehensive Capabilities
            </span>
          </div>

          <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[50px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight mb-3">
            Focused capabilities for high-growth brands.
          </h1>

          <p className="font-sans text-[13.5px] sm:text-[15px] leading-relaxed text-[#a1a1aa] max-w-3xl">
            We don&apos;t try to do everything. We focus on the core pillars of modern brand velocity: clear strategy, distinctive branding, high-intent advertising, and community-driven social systems. Engineered to work individually or combine into an integrated growth engine.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          2. CORE SERVICES LISTING (ENRICHED WITH DELIVERABLES & METRICS)
      ====================================================== */}
      <section className="relative z-10 w-full">
        {allServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 border-b border-white/10 flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16`}
            >
              {/* Image & Metric Side */}
              <div className="w-full lg:w-[48%]">
                <Link
                  to={service.path}
                  className="block relative overflow-hidden rounded-2xl border border-white/10 bg-[#141215] shadow-2xl group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[16/11] object-cover transition-all duration-500 group-hover:scale-105 brightness-[1.08] contrast-[1.06] saturate-[1.08]"
                  />
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#0e0f11]/85 p-3 backdrop-blur-md">
                    <span className="font-sans text-[11px] font-medium text-[#d4d4d8] uppercase tracking-wider">
                      Target Outcome
                    </span>
                    <span className="font-sans text-[12.5px] font-bold text-[#c4f82a]">
                      {service.metric}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Text & Deliverables Side */}
              <div className="w-full lg:w-[52%] flex flex-col items-start">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                    0{index + 1} • Capability
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="font-sans text-[11.5px] font-medium text-[#a1a1aa]">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="mb-3 font-sans text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-white tracking-[-0.02em] leading-snug">
                  {service.title}
                </h2>

                <p className="mb-5 max-w-xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Grid */}
                <div className="mb-6 w-full rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                  <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                    Key Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c4f82a]/15 text-[#c4f82a]">
                          <FiCheck className="text-[10px]" />
                        </span>
                        <span className="font-sans text-[12.5px] text-[#d4d4d8]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Features Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="rounded-full border border-white/10 bg-[#141215]/80 px-3 py-1 font-sans text-[11px] font-medium text-[#a1a1aa]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-2.5 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                >
                  <span>Explore Capability</span>
                  <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* =====================================================
          3. NEW COMPONENT 1: THE 4-STAGE EXECUTION ROADMAP
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 bg-[#0c0a09]">
        <div className="mx-auto w-full max-w-full">
          <div className="mb-10 max-w-2xl">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Execution Methodology
              </span>
            </div>
            <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[38px] font-semibold text-white tracking-tight">
              How we partner: 4-stage roadmap.
            </h2>
            <p className="mt-2 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
              Every engagement follows a proven, systematic sequence designed to eliminate guesswork, mitigate commercial risk, and compound performance quickly.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementPhases.map((phase) => (
              <div
                key={phase.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141215]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[22px] font-bold text-[#c4f82a]">
                      {phase.step}
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-[#a1a1aa]">
                      {phase.timeline}
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-white leading-snug">
                    {phase.name}
                  </h3>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. NEW COMPONENT 2: ENGAGEMENT MODELS & TIERS
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 bg-[#0a0a0a]">
        <div className="mx-auto w-full max-w-full">
          <div className="mb-10 max-w-2xl">
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Flexible Collaboration
              </span>
            </div>
            <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[38px] font-semibold text-white tracking-tight">
              Structured for your growth stage.
            </h2>
            <p className="mt-2 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
              Choose the partnership model that best fits your current operational needs, growth velocity, and internal capabilities.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141215]/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-[#c4f82a]/10 border border-[#c4f82a]/30 px-3 py-0.5 font-sans text-[10.5px] font-bold uppercase tracking-wider text-[#c4f82a]">
                      {model.badge}
                    </span>
                  </div>
                  <h3 className="font-sans text-[20px] font-semibold text-white">
                    {model.tier}
                  </h3>
                  <p className="mt-1 font-sans text-[12px] font-medium text-[#c4f82a]">
                    Best for: {model.bestFor}
                  </p>
                  <p className="mt-3.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                    {model.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                      Includes:
                    </p>
                    <ul className="space-y-2.5">
                      {model.includes.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 font-sans text-[12.5px] text-[#d4d4d8]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c4f82a]/15 text-[#c4f82a] mt-0.5">
                            <FiCheck className="text-[10px]" />
                          </span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2.5 font-sans text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#c4f82a] hover:text-black hover:border-[#c4f82a]"
                  >
                    <span>Discuss Partnership</span>
                    <FiArrowUpRight className="text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. NEW COMPONENT 3: INTERACTIVE SERVICES FAQ ACCORDION
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 bg-[#0c0a09]">
        <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                  Common Inquiries
                </span>
              </div>
              <h2 className="font-sans text-[26px] sm:text-[32px] font-semibold text-white tracking-tight">
                Frequently asked questions.
              </h2>
              <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa]">
                Everything you need to know about our engagement models, onboarding process, attribution methodologies, and team integration.
              </p>

              {/* Consultation Assistance Card */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-5">
                <p className="font-sans text-[13px] font-semibold text-white">
                  Need a tailored engagement scope?
                </p>
                <p className="mt-2 font-sans text-[12.5px] leading-relaxed text-[#a1a1aa]">
                  Book a confidential 30-minute discovery consultation with our senior strategy partners to evaluate goals, timelines, and deliverables.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-[#c4f82a] hover:text-black px-4 py-2 font-sans text-[12px] font-semibold text-white transition-all duration-200"
                >
                  <span>Request Strategy Audit</span>
                  <FiArrowUpRight className="text-sm" />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 text-[11.5px] text-[#71717a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span>Strict confidentiality guaranteed. NDA signed prior to any strategic audit.</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left gap-4 cursor-pointer focus:outline-none group"
                  >
                    <span className="font-sans text-[15px] sm:text-[16.5px] font-semibold text-white transition-colors group-hover:text-[#c4f82a]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141215] text-[#d4d4d8] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#c4f82a] border-[#c4f82a]/40" : ""
                      }`}
                    >
                      <FiChevronDown className="text-base" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa] pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. BOTTOM CTA
      ====================================================== */}
      <section className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-8 sm:py-10 bg-[#0a0a0a]">
        <div className="mx-auto flex w-full max-w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-sans text-[10.5px] font-bold uppercase tracking-[2px] text-[#c4f82a]">
              Next Steps
            </span>
            <h2 className="mt-1.5 max-w-[700px] font-sans text-[24px] sm:text-[30px] font-semibold text-white leading-tight">
              Ready to elevate your marketing strategy?
            </h2>
          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 rounded-xl bg-[#c4f82a] px-7 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;


