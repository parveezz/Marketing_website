import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import { motion } from "framer-motion";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const SocialMedia = () => {
    const services = [
        {
            title: "Social Media Strategy",
            description: "We audit your current digital footprint and develop a custom roadmap detailing exactly which platforms to use, what content to post, and how to outmaneuver your competitors."
        },
        {
            title: "Community Management",
            description: "We don't just post; we participate. Our team actively engages with your followers, responds to comments, and fosters a genuine sense of community that turns passive scrollers into loyal brand advocates."
        },
        {
            title: "Content Creation & Curation",
            description: "From striking graphics and compelling short-form videos to thought leadership articles, our creative team produces a steady stream of high-quality content designed specifically for the nuances of each platform."
        },
        {
            title: "Influencer Partnerships",
            description: "We identify, vet, and manage relationships with key influencers who align with your brand values, leveraging their established trust to introduce your product to entirely new audiences."
        },
        {
            title: "Social Listening & Analytics",
            description: "We monitor the internet for mentions of your brand and industry trends. Through detailed monthly reporting, we continuously refine our strategy based on real-time data and user sentiment."
        }
    ];

    const socialPillars = [
        "Monthly Multi-Format Content Engine",
        "Viral Short-Form Video (Reels/TikTok)",
        "Executive Thought Leadership System",
        "Active Two-Way Community Management"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO title="Social Media Services | ZIH" description="Engaging social media management that builds loyal communities." />

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
                                src="/images/service-social-media-hero.jpg"
                                alt="Modern Social Media Content & Strategy"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.08] contrast-[1.06] saturate-[1.1] group-hover:scale-105"
                            />
                            {/* Depth Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                            {/* Floating Target Outcome Chip */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#0e0f11]/90 p-3.5 backdrop-blur-md">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-2 w-2 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[11.5px] font-medium text-[#d4d4d8]">
                                        Organic Momentum
                                    </span>
                                </div>
                                <span className="font-sans text-[12px] font-bold text-[#c4f82a]">
                                    4.8x Reach Multiplier
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Social Narrative, Pillars & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6 flex flex-col items-start"
                    >
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Social Engine • Community Growth
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Cultivate an engaged audience that turns into customers.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            We don&apos;t create shallow vanity posts. We engineer comprehensive social content ecosystems—from high-energy short-form video to executive thought leadership—that build genuine brand affinity and drive customer conversion.
                        </p>

                        {/* Social Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {socialPillars.map((pillar, i) => (
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
                            <span>Discuss Social Scope</span>
                            <FiArrowUpRight className="text-base" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services / Expertise Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Community Narrative, Deliverables Checklist & Community Creed */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Core Capabilities
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Cultural Engagement Engine
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Social media is no longer just a broadcast feed; it is the primary arena where brand equity, market credibility, and cultural relevance are actively established and defended.
                                </p>
                                <p>
                                    We design editorial publishing engines, short-form video systems, and executive thought leadership programs that transform casual passive scrollers into passionate brand advocates and loyal customers.
                                </p>
                            </div>

                            {/* Tangible Deliverables Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Social System Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>30-Day Multi-Platform Editorial & Production Pipelines</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>High-Impact Short-Form Video (Reels, TikTok & Shorts)</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                        <span>Executive Ghostwriting & Thought Leadership Architecture</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;Attention is the new currency. If you aren&apos;t creating content that adds genuine value to your audience&apos;s daily feed, you simply don&apos;t exist.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    The ZIH Community Creed
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

export default SocialMedia;