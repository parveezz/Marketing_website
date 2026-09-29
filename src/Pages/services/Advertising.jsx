import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import { motion } from "framer-motion";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const Advertising = () => {
    const services = [
        {
            title: "Search Engine Marketing (PPC)",
            description: "We place your business at the exact moment a customer is searching for a solution. Our highly optimized Google Ads campaigns drive high-intent traffic with a focus on conversion rates and low acquisition costs."
        },
        {
            title: "Display & Programmatic",
            description: "We capture attention across the web with striking visual banner ads. By utilizing programmatic technology, we buy digital ad space efficiently to reach your audience on the sites they visit most."
        },
        {
            title: "Video & YouTube Advertising",
            description: "Leverage the power of sight, sound, and motion. We strategize and execute video campaigns that build massive brand awareness and educate consumers before they even realize they need you."
        },
        {
            title: "Retargeting Campaigns",
            description: "Don't let interested prospects slip away. Our dynamic retargeting strategies re-engage users who have visited your site, bringing them back into your sales funnel to complete their purchase."
        },
        {
            title: "Print & Out-of-Home (OOH)",
            description: "Digital isn't the only way. We design and place impactful traditional advertising campaigns—from billboards to premium print magazines—that establish authority in the physical world."
        }
    ];

    const advertisingPillars = [
        "High-Intent Paid Search (SEM)",
        "Omnichannel Paid Social Funnels",
        "Weekly Creative Sprint Pipeline",
        "Real-Time Cohort MER Attribution"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO title="Advertising Services | ZIH" description="Data-driven advertising campaigns that maximize your ROI." />

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
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 w-full"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141215] shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=85"
                                alt="High-Performance Paid Media Analytics"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.08] contrast-[1.06] saturate-[1.1] group-hover:scale-105"
                            />
                            {/* Depth Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                            {/* Floating Target Outcome Chip */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#0e0f11]/90 p-3.5 backdrop-blur-md">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-2 w-2 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[11.5px] font-medium text-[#d4d4d8]">
                                        Performance Yield
                                    </span>
                                </div>
                                <span className="font-sans text-[12px] font-bold text-[#c4f82a]">
                                    -42% Target CAC
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Acquisition Narrative, Pillars & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6 flex flex-col items-start"
                    >
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Performance Media • Paid Acquisition
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            High-intent advertising built to turn clicks into revenue.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            Stop burning capital on unmeasured clicks. We design high-converting, omnichannel media systems across Search, Social, and Programmatic networks—continuously testing creative and optimizing bidding for bottom-line ROI.
                        </p>

                        {/* Advertising Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {advertisingPillars.map((pillar, i) => (
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
                            <span>Discuss Campaign Scope</span>
                            <FiArrowUpRight className="text-base" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services / Expertise Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Acquisition Narrative, Deliverables Checklist & Performance Mandate */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Core Capabilities
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                High-Intent Paid Media
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Modern paid acquisition is not about spending more; it is about engineering predictable customer acquisition costs (CAC) that scale profitably alongside lifetime customer value (LTV).
                                </p>
                                <p>
                                    We operate at the nexus of quantitative bidding algorithms and rapid creative iteration—eliminating wasted spend across Google, Meta, TikTok, and programmatic networks through relentless attribution modeling.
                                </p>
                            </div>

                            {/* Tangible Deliverables Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Acquisition Engine Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>Full-Funnel Omnichannel Search & Paid Social Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>High-Velocity Creative Sprint Pipeline (Static, Motion & UGC)</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>Real-Time Blended MER & Attribution Intelligence Dashboards</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;Advertising is only an expense when you can&apos;t measure the return. When dialed in with mathematical precision, it becomes an infinite growth lever.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    The ZIH Performance Mandate
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

export default Advertising;