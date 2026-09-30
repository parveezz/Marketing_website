import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const Branding = () => {
    const services = [
        {
            title: "Brand Strategy & Positioning",
            description: "We define your core purpose, target audience, and unique value proposition. This foundational strategy ensures your brand stands out in a crowded market and speaks directly to the right people."
        },
        {
            title: "Visual Identity & Logo Design",
            description: "From typography to color palettes and logo marks, we craft a cohesive visual language that captures your brand's essence and makes a striking, memorable first impression."
        },
        {
            title: "Brand Voice & Messaging",
            description: "How your brand sounds is just as important as how it looks. We develop comprehensive messaging frameworks, taglines, and tone-of-voice guidelines to ensure consistent communication."
        },
        {
            title: "Corporate Brand Guidelines",
            description: "We deliver detailed rulebooks that empower your internal teams and external partners to apply your branding flawlessly across every single medium and touchpoint."
        },
        {
            title: "Rebranding & Evolution",
            description: "For established businesses looking to pivot or modernize, we carefully evolve your brand identity, honoring your heritage while positioning you for future growth."
        }
    ];

    const brandingPillars = [
        "Defensible Market Identity Systems",
        "Master Guidelines & Design Tokens",
        "Executive Voice & Messaging Matrix",
        "Multi-Viewport Typography Hierarchies"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO title="Branding Services | ZIH" description="Distinctive brand identities that build trust and long-term value." />

            {/* Background Vertical Grid Guide Lines (12 Columns) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white/[0.04] h-full" />
                ))}
            </div>

            {/* Redesigned Hero: Left-Side Bright Framed Image & Right-Side Text */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 md:py-20 bg-[#0c0a09]">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: High-Clarity, Enhanced Brightness Framed Image */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141215] shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
                            <img
                                src="/images/service-branding.jpg"
                                alt="Branding & Design Strategy Session"
                                fetchPriority="high"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.06] contrast-[1.05] saturate-[1.08] group-hover:scale-105"
                            />
                            {/* Depth Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                            {/* Floating Target Outcome Chip */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#0e0f11]/90 p-3.5 backdrop-blur-md">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-2 w-2 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[11.5px] font-medium text-[#d4d4d8]">
                                        Brand Equity
                                    </span>
                                </div>
                                <span className="font-sans text-[12px] font-bold text-[#c4f82a]">
                                    +185% Perceived Value
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative, Pillars & CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Brand Architecture • Visual Identity
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Branding that commands authority and leaves a mark.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            We don&apos;t just design logos; we engineer comprehensive visual and verbal identities. We translate your company&apos;s distinct market advantages into an enduring brand system that builds immediate recognition and deep customer trust.
                        </p>

                        {/* Branding Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {brandingPillars.map((pillar, i) => (
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
                            <span>Discuss Branding Scope</span>
                            <FiArrowUpRight className="text-base" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services / Expertise Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Deep Narrative, Deliverables Checklist & Brand Manifesto */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Core Capabilities
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Systematic Brand Architecture
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    A great brand is the most defensible moat a company can possess. In markets saturated with commoditized alternatives and aggressive bidding wars, distinctive branding creates immediate perceived premium and lasting customer loyalty.
                                </p>
                                <p>
                                    We build unified visual and verbal identity systems engineered to scale effortlessly across mobile viewports, print collateral, product packaging, and investor relations.
                                </p>
                            </div>

                            {/* Tangible Deliverables Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Identity System Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>100+ Page Brand Guideline & Token Specifications</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Custom Typography Hierarchy & Color System Tokens</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Verbal Tone, Messaging Matrix & Executive Positioning</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Responsive Logo Suite, Iconography & Motion Signatures</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Figma UI Component Library & Social Brand Templates</span>
                                    </div>
                                </div>
                            </div>

                            {/* Brand Equity Benchmarks */}
                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-[#c4f82a]">+68%</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Brand Recall & Recognition</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">4–6 Wks</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">End-to-End Identity Sprint</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">360°</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Digital & Print Cohesion</p>
                                </div>
                            </div>

                            {/* Brand Touchpoints */}
                            <div className="mt-5">
                                <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                                    Identity Touchpoints
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["Visual Identity", "Design Systems", "Brand Voice & Copy", "Packaging & Print", "Pitch Decks", "Environmental Signage"].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-sans text-[11px] text-[#d4d4d8]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;Your brand is the intangible premium you command in the customer&apos;s mind before you even open your mouth.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    The ZIH Brand Imperative
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 5 Framework Capabilities */}
                    <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
                        {services.map((service, index) => (
                            <div key={service.title} className="py-6 first:pt-0 last:pb-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="font-sans text-[11px] font-bold text-[#c4f82a]">
                                                0{index + 1}
                                            </span>
                                            <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-white">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2.5 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa] max-w-2xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Stories / Testimonials */}
            <Testimonials />

            {/* Next Component: Home CTA */}
            <HomeCTA />
        </main>
    );
};

export default Branding;