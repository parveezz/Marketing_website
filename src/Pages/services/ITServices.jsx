import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const ITServices = () => {
    const services = [
        {
            title: "Marketing Websites & Landing Page Engineering",
            description: "We build blazing-fast, SEO-optimized marketing websites, campaign landing pages, and conversion funnels that turn ad spend into revenue. Every page is engineered for Core Web Vitals, A/B testing, and pixel-perfect tracking — so your marketing performs as good as it looks."
        },
        {
            title: "Marketing Automation & CRM Integration",
            description: "We connect your CRM, email platforms, and marketing tools into one seamless engine. From HubSpot, Salesforce, and Klaviyo setups to lead scoring, nurture sequences, and pipeline automation — we eliminate manual work and make sure no lead ever slips through."
        },
        {
            title: "Analytics, Tracking & Attribution Setup",
            description: "Stop guessing what's working. We implement GA4, Google Tag Manager, server-side tracking, Meta Conversions API, and multi-touch attribution models so every campaign, channel, and creative is measured with accuracy — and every rupee of ad spend is accountable."
        },
        {
            title: "MarTech Stack, CDP & Data Pipelines",
            description: "We architect your full marketing technology stack — Customer Data Platforms (CDPs), unified customer profiles, bidirectional CRM syncs, and real-time dashboards. Your teams get one source of truth for customer data, enabling smarter segmentation and personalization."
        },
        {
            title: "Conversion Rate Optimization (CRO) & Performance",
            description: "Traffic is expensive — conversions shouldn't be. We run continuous CRO programs with heatmaps, funnel analysis, multivariate testing, and speed optimization to lift conversion rates across your website, landing pages, and checkout flows."
        }
    ];

    const strategicPillars = [
        "SEO-Ready Web & Landing Page Engineering",
        "Marketing Automation & CRM Systems",
        "GA4, GTM & Server-Side Tracking",
        "MarTech Stack, CDP & Data Pipelines"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO
                title="Marketing Technology & IT Services | ZIH Marketing Consultancy"
                description="Marketing websites, automation, CRM integration, analytics tracking, and MarTech stacks engineered to scale modern brands."
            />

            {/* Background Vertical Grid Guide Lines (12 Columns) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white/[0.04] h-full" />
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 md:py-20 bg-[#0c0a09]">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: Image */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141215] group">
                            <img
                                src="/images/service-advertising-analytics.jpg"
                                alt="Marketing Technology & Digital Infrastructure"
                                fetchPriority="high"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.08] contrast-[1.06] saturate-[1.08] group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Strategic Narrative & CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Marketing Technology • MarTech &amp; Digital Infrastructure
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Marketing technology engineered to turn traffic into revenue.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            Great marketing needs great infrastructure. We build the websites, automation, tracking, and data systems that power your campaigns — so every click, lead, and rupee of ad spend is measured, optimized, and converted.
                        </p>

                        {/* Strategic Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {strategicPillars.map((pillar, i) => (
                                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#141215]/80 px-3 py-2.5">
                                    <FiCheck className="text-[#c4f82a] text-sm shrink-0" />
                                    <span className="font-sans text-[12px] font-medium text-[#d4d4d8]">{pillar}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Link */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                        >
                            <span>Discuss Your MarTech Project</span>
                            <FiArrowUpRight className="text-base" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capabilities Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Methodology & Deliverables */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Marketing Technology Architecture
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Built for Marketers, Engineered for Growth
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Your marketing strategy is only as strong as the technology behind it. We build the systems that execute your campaigns, capture your leads, and prove your ROI.
                                </p>
                                <p>
                                    From SEO-ready websites and high-converting landing pages to CRM automation, GA4 tracking, and unified customer data — every solution we deliver is designed to make your marketing measurable, scalable, and profitable.
                                </p>
                            </div>

                            {/* Tangible Outcomes Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Marketing Technology Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>SEO-Optimized Marketing Websites &amp; Conversion Landing Pages</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>CRM Setup, Lead Scoring &amp; Email Marketing Automation</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>GA4, GTM, Server-Side Tracking &amp; Multi-Touch Attribution</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>MarTech Stack, CDP Setup &amp; Unified Customer Data Pipelines</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>CRO Programs, A/B Testing &amp; Continuous Performance Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Pill Quote */}
                        <div className="rounded-xl border border-white/10 bg-[#161618] p-4 text-[12.5px] leading-relaxed text-[#a1a1aa]">
                            <span className="font-semibold text-white">Marketing Principle:</span> If it can&apos;t be measured, it can&apos;t be optimized. We build marketing technology that gives you full visibility into every channel, campaign, and conversion.
                        </div>
                    </div>

                    {/* Right Column: Structured Capabilities List */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                        <div className="mb-2">
                            <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white">
                                Core Marketing Technology Capabilities
                            </h3>
                            <p className="font-sans text-[13px] text-[#a1a1aa] mt-1">
                                The technical disciplines that power modern marketing teams.
                            </p>
                        </div>

                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl border border-white/10 bg-[#141215]/70 p-5 sm:p-6 transition-all duration-200 hover:border-white/20 hover:bg-[#18161a]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <span className="font-mono text-[11px] font-semibold text-[#c4f82a]">
                                            [0{index + 1}]
                                        </span>
                                        <h4 className="mt-1 font-sans text-[16px] sm:text-[18px] font-semibold text-white transition-colors group-hover:text-[#c4f82a]">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-[#a1a1aa]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
            <HomeCTA />
        </main>
    );
};

export default ITServices;