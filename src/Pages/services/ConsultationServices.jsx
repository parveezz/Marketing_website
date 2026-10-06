import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const ConsultationServices = () => {
    const services = [
        {
            title: "Strategic Growth Diagnostics",
            description: "We conduct an exhaustive audit of your current marketing infrastructure, pipeline velocity, channel efficiency, and unit economics to pinpoint exact bottlenecks suppressing scale."
        },
        {
            title: "Fractional CMO & Executive Advisory",
            description: "Gain high-level leadership and executive strategic oversight without the overhead of a full-time executive. We direct your marketing team, vet partners, and steer long-term growth initiatives."
        },
        {
            title: "Market Positioning & Whitespace Discovery",
            description: "We analyze competitor maneuvers and market dynamics to identify unexploited positioning opportunities, pricing leverage, and differentiated customer acquisition channels."
        },
        {
            title: "Capital & Media Allocation Advisory",
            description: "Stop burning capital on unproven tactics. We help leadership allocate marketing budgets across paid media, organic channels, brand equity, and event activations with deterministic ROI modeling."
        },
        {
            title: "Turnkey Execution Playbooks",
            description: "Consultation without clarity is futile. We translate high-level strategies into actionable, step-by-step operating playbooks that your internal marketing and sales teams can execute with precision."
        }
    ];

    const strategicPillars = [
        "Executive 1-on-1 Strategy & Advisory",
        "Full Marketing Infrastructure Audits",
        "Target CAC & Unit Economics Optimization",
        "Custom Operating Systems & Growth Roadmaps"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO 
                title="Consultation Services | ZIH Marketing Consultancy" 
                description="Executive marketing consultation and strategic advisory engineered to unlock breakthrough commercial growth." 
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
                                src="/images/service-strategic.jpg"
                                alt="Executive Consultation & Strategic Advisory"
                                fetchPriority="high"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.1] contrast-[1.08] saturate-[1.1] group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Strategic Narrative & CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Growth &amp; Advisory • Executive Consultation
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Strategic consultation engineered to eliminate growth uncertainty.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            Whether you need fractional CMO guidance, a complete marketing audit, or a razor-sharp market repositioning strategy, our consultation services provide high-conviction clarity, actionable roadmaps, and measurable commercial lift.
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
                            <span>Book Consultation Session</span>
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
                                    Consultation Advisory
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Advisory Framework
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Our consultation is not generic theory. We work directly with founders, CEOs, and marketing leaders to diagnose pipeline inefficiencies, refine brand positioning, and establish clear commercial systems.
                                </p>
                                <p>
                                    From fractional executive leadership to sprint-based audits, we provide tailored strategic counsel that directly impacts profitability.
                                </p>
                            </div>

                            {/* Tangible Outcomes Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Consultation Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Full Commercial Infrastructure &amp; Funnel Audit</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Quarterly Strategic Growth &amp; Resource Blueprint</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Competitor Positioning &amp; Pricing Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Executive KPIs, Scorecards &amp; Attribution Modeling</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Vendor &amp; Agency Accountability Frameworks</span>
                                    </div>
                                </div>
                            </div>

                            {/* Impact Benchmarks */}
                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-[#c4f82a]">1-on-1</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Executive Direction</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">48 Hrs</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Initial Audit Turnaround</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">100%</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Actionable Execution</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;The most expensive marketing mistake is investing capital into misaligned tactics. An executive consultation aligns strategy before money is spent.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    ZH Advisory Principle
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

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <HomeCTA />
        </main>
    );
};

export default ConsultationServices;
