import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiStar,
  FiTrendingUp,
  FiShield,
  FiRadio,
  FiZap,
  FiShare2,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

const AwardsAchievements = () => {
  const awards = [
    {
      id: "event-media",
      title: "Excellence in Event Media & Production",
      category: "Live Experiential & Sports",
      organization: "World Business Conclave & ISSO Athletics 2026",
      description:
        "Recognized for end-to-end event media operations across a 3-day international business conclave and a multi-venue athletics championship. Our team handled multi-camera live coverage, turnkey stadium branding, on-ground signage systems, and real-time broadcast feeds reaching 50,000+ physical attendees and over 200,000 digital viewers. The engagement covered pre-event hype campaigns, on-site production control, and post-event highlight reels distributed across broadcast and social channels.",
      highlight: "50,000+ attendees • 200K+ digital viewers • 3-day multi-venue production",
      badge: "Gold Award 2026",
      icon: FiAward,
      tooltip: "Event Media",
    },
    {
      id: "strategic-campaign",
      title: "Best Strategic Marketing Campaign",
      category: "Growth & GTM Architecture",
      organization: "Global Brand & Marketing Summit",
      description:
        "Engineered a full-funnel go-to-market architecture for a B2B SaaS client entering a crowded North American market. The engagement covered ICP definition, positioning and messaging frameworks, channel mix modeling across paid, organic, partner, and outbound, and a rebuilt lead qualification system. The campaign delivered 3.4x average pipeline acceleration within two quarters and reduced blended customer acquisition cost by 42% — while lifting sales-qualified lead conversion by 61%.",
      highlight: "3.4x pipeline acceleration • 42% lower CAC • 61% higher SQL conversion",
      badge: "Winner 2025–26",
      icon: FiTrendingUp,
      tooltip: "Strategic Campaign",
    },
    {
      id: "brand-transformation",
      title: "Brand Transformation of the Year",
      category: "Identity & Visual Systems",
      organization: "Regional Creative & Marketing Conclave",
      description:
        "Led a full brand transformation for two legacy consumer and institutional brands that had lost market relevance over the past decade. The work spanned brand strategy, naming architecture, visual identity systems, tone-of-voice guidelines, packaging, in-store collateral, and a digital design system. Within 9 months of relaunch, perceived brand equity rose by 185%, aided by a 2.7x lift in unaided recall and a measurable increase in premium price tolerance across both portfolios.",
      highlight: "+185% brand equity • 2.7x unaided recall • 9-month relaunch window",
      badge: "Industry Honoree",
      icon: FiStar,
      tooltip: "Brand Transformation",
    },
    {
      id: "growth-advisory",
      title: "Top Growth & Advisory Consultancy",
      category: "Fractional CMO & Strategy",
      organization: "Executive Enterprise Leadership Forum",
      description:
        "Awarded for sustained, high-retention executive advisory work across a portfolio of startups, mid-market operators, and enterprise divisions. Our fractional CMO and strategy engagements covered unit economics modeling, commercial roadmap design, marketing team structuring, board-level reporting, and cross-functional alignment between sales, product, and marketing. The award specifically recognized an average 26-month client retention rate and repeat engagements across multiple funding rounds and M&A cycles.",
      highlight: "26-month avg retention • Multi-round advisory • Board-level engagements",
      badge: "Top Consultancy",
      icon: FiShield,
      tooltip: "Growth Advisory",
    },
    {
      id: "pr-media",
      title: "Media & Public Relations Excellence",
      category: "Press, Podcasts & Authority",
      organization: "National Media & Communications Forum",
      description:
        "Built and executed a tiered PR and authority-building program for founder-led and enterprise clients — securing placements in tier-1 business press, industry trade publications, and long-form podcast features. The program generated over 12 million earned media impressions across print, digital, and broadcast over a 12-month window, and positioned multiple client executives as recognized category voices through bylined articles, keynote placements, and analyst briefings.",
      highlight: "12M+ earned impressions • Tier-1 press • Executive thought leadership",
      badge: "PR Leader 2025",
      icon: FiRadio,
      tooltip: "Media & PR",
    },
    {
      id: "advertising",
      title: "Most Effective Advertising Campaign",
      category: "Paid Media & Creative",
      organization: "Ad Club Annual Awards",
      description:
        "Developed and ran an integrated multi-channel advertising campaign spanning out-of-home, print, radio, and paid digital for a consumer launch. The creative platform was built around a single unifying idea, then adapted across formats and audiences without losing brand consistency. The campaign delivered record aided recall scores in the category, a 4.2x return on ad spend across the primary launch window, and sustained lift in branded search volume that continued months after the paid flights ended.",
      highlight: "4.2x ROAS • Record recall • Sustained branded search lift",
      badge: "Ad Club Winner",
      icon: FiZap,
      tooltip: "Advertising",
    },
    {
      id: "social-media",
      title: "Best Social Media Growth Engine",
      category: "Content & Community",
      organization: "Social Media Marketing Awards",
      description:
        "Designed and operated always-on content engines and community programs across Instagram, LinkedIn, and YouTube for a mix of B2C and B2B clients. The system combined editorial calendars, in-house short-form production, creator partnerships, and community management playbooks. Over a 9-month period, the programs collectively grew engaged follower bases by 6x, lifted average watch-through rates by 48%, and turned social channels into consistent top-of-funnel sources for both lead gen and direct commerce.",
      highlight: "6x follower growth • 48% higher watch-through • Lead-gen + commerce channel",
      badge: "Top Social 2025",
      icon: FiShare2,
      tooltip: "Social Media",
    },
    {
      id: "consultation",
      title: "Excellence in Executive Consulting",
      category: "1-on-1 Advisory & CMO Services",
      organization: "Business Advisory Council",
      description:
        "Recognized for hands-on, senior-level consulting engagements with founders, CMOs, and boards across growth-stage and enterprise organizations. The work covered GTM strategy, marketing team design and hiring, budget allocation, agency selection and oversight, and board-level commercial planning. Clients cited clarity, candor, and long-term strategic partnership as the differentiators — with several engagements extending into multi-year advisory relationships across successive funding stages and market expansions.",
      highlight: "Founder & CMO advisory • Team & budget design • Multi-year partnerships",
      badge: "Advisory Honor",
      icon: FiUsers,
      tooltip: "Consultation",
    },
  ];

  const milestones = [
    { value: "100+", label: "Strategic Campaigns Scaled" },
    { value: "50,000+", label: "Live Event Attendees Executed" },
    { value: "12M+", label: "Earned Media Impressions" },
    { value: "98%", label: "Client Retainer Retention" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeAward = awards[activeIndex];
  const ActiveIcon = activeAward.icon;

  return (
    <section className="w-full border-t border-white/10 bg-[#0c0a09] px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          <span className="text-[11.5px] font-medium uppercase tracking-wider text-[#c4f82a]">
            Accolades • Industry Recognition
          </span>
          <h2 className="mt-2 text-[28px] sm:text-[36px] md:text-[42px] font-semibold tracking-tight text-[#fafafa]">
            Awards &amp; Proven Milestones
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            Recognized by premier global conclaves, sports federations, and enterprise leaders for strategic rigor and flawless execution.
          </p>
        </div>

        {/* Two-column: single award + icon sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px] gap-6 lg:gap-8">

          {/* LEFT: only the active award */}
          <div>
            <div className="rounded-xl border border-white/10 bg-[#121114] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#18181b] text-[#c4f82a]">
                    <ActiveIcon size={18} />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-wide text-[#a1a1aa]">
                    {activeAward.category}
                  </span>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-[#c4f82a]">
                  {activeAward.badge}
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[24px] font-semibold text-white leading-snug">
                {activeAward.title}
              </h3>

              <p className="mt-2 text-[13px] font-medium text-[#d4d4d8]">
                {activeAward.organization}
              </p>

              <p className="mt-4 text-[13.5px] sm:text-[14px] leading-[1.75] text-[#a1a1aa]">
                {activeAward.description}
              </p>

              {/* Highlight strip */}
              {activeAward.highlight && (
                <div className="mt-5 rounded-lg border border-[#c4f82a]/20 bg-[#c4f82a]/5 px-4 py-3">
                  <p className="text-[12px] font-medium tracking-wide text-[#c4f82a]">
                    {activeAward.highlight}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: icon-only tab sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center gap-2">
              {awards.map((award, idx) => {
                const Icon = award.icon;
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={award.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={award.title}
                    aria-pressed={isActive}
                    className={`group relative flex h-11 w-11 items-center justify-center rounded-lg border transition-colors ${isActive
                        ? "border-[#c4f82a]/50 bg-[#c4f82a]/10 text-[#c4f82a]"
                        : "border-white/10 bg-[#161618] text-[#71717a] hover:border-white/20 hover:text-[#a1a1aa]"
                      }`}
                  >
                    <Icon size={16} />

                    {/* Tooltip */}
                    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-white/10 bg-[#18181b] px-2.5 py-1 text-[11.5px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {award.tooltip}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

        </div>

        {/* Mobile / tablet tab row (for < lg) */}
        <div className="lg:hidden mt-4 flex flex-wrap items-center justify-center gap-2">
          {awards.map((award, idx) => {
            const Icon = award.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={award.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={award.title}
                aria-pressed={isActive}
                className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${isActive
                    ? "border-[#c4f82a]/50 bg-[#c4f82a]/10 text-[#c4f82a]"
                    : "border-white/10 bg-[#161618] text-[#71717a]"
                  }`}
              >
                <Icon size={15} />
              </button>
            );
          })}
        </div>

        {/* Milestones */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#141215] p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#c4f82a] tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="mt-2 text-[11px] sm:text-[12px] font-medium uppercase tracking-wide text-[#a1a1aa]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-[13px] text-[#a1a1aa]">
              Every recognition is backed by empirical commercial outcomes and documented case studies.
            </p>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#c4f82a] hover:underline"
            >
              <span>Explore Verified Client Case Studies</span>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsAchievements;