import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const PublicRelations = () => {
    const services = [
        {
            title: "Executive & Brand Podcasts",
            description: "End-to-end podcast production—from studio recording and guest curation to audio mastering, YouTube visual episodes, and viral short-form micro-content for LinkedIn and Instagram."
        },
        {
            title: "Specialized News Articles & Editorials",
            description: "We craft authoritative, newsworthy narratives and secure placements in top-tier business publications, regional dailies, and specialized trade media to build lasting credibility."
        },
        {
            title: "High-Profile Media Interviews",
            description: "We position your founders and key executives as industry thought leaders, booking strategic interviews on influential business talk shows, digital media outlets, and podcasts."
        },
        {
            title: "Targeted Channel Coverage",
            description: "Cover yourself in the right channels and brand yourself right. We identify and penetrate the exact media channels and industry forums that command the attention of your high-value decision-makers."
        },
        {
            title: "Press Release Syndication & Crisis Communications",
            description: "Strategic announcement distribution across national wire services, paired with proactive reputation management and rapid narrative control to protect brand prestige."
        }
    ];

    const prPillars = [
        "Executive Podcast Production & Syndication",
        "Tier-1 News Articles & Editorial Placements",
        "Strategic High-Profile Media Interviews",
        "Targeted Channel Coverage & Brand Positioning"
    ];

    const industries = [
        "Education",
        "Automobiles",
        "Real Estate",
        "Sports",
        "Food & Hospitality"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO
                title="Public Relations & Media Placement Services | ZIH"
                description="Strategic P.R. activities including podcasts, specialized news articles, executive interviews, and channel coverage by ZIH Marketing Consultancy."
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
                    {/* Left Column: Framed Visual */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141215] group">
                            <img
                                src="/images/service-planning.jpg"
                                alt="Public Relations and Media Placements"
                                fetchPriority="high"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.08] contrast-[1.06] saturate-[1.1] group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Narrative & Pillars */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Public Relations • Media Package
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Cover yourself in the right channels. Brand yourself right.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            ZH Marketing Consultancy offers a comprehensive package of P.R. activities—including custom podcasts, specialized news articles, high-profile interviews, and targeted media syndication designed to position you at the forefront of your industry.
                        </p>

                        {/* PR Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {prPillars.map((pillar, i) => (
                                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#141215]/80 px-3 py-2.5">
                                    <FiCheck className="text-[#c4f82a] text-sm shrink-0" />
                                    <span className="font-sans text-[12px] font-medium text-[#d4d4d8]">{pillar}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Links */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                            >
                                <span>Inquire About PR Packages</span>
                                <FiArrowUpRight className="text-base" />
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-sans text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-white/10"
                            >
                                <span>All Services</span>
                                <FiArrowUpRight className="text-sm text-[#a1a1aa]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: PR Strategy & Industries */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    PR Deliverables
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Integrated Public Relations
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Effective PR goes beyond traditional press releases. We engineer comprehensive media visibility that builds trust, commands authority, and turns founder expertise into industry leadership.
                                </p>
                                <p>
                                    Whether launching a new division, scaling an educational institution, announcing real estate developments, or highlighting sports excellence, our PR packages ensure your story reaches the right audience.
                                </p>
                            </div>

                            {/* Industries Catered */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Key Industries We Cater To:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {industries.map((ind) => (
                                        <span
                                            key={ind}
                                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-sans text-[12px] font-medium text-[#c4f82a]"
                                        >
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;Coverage in the right channels is what separates ordinary brands from category leaders. Brand yourself with authority.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    ZH Marketing Consultancy
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 5 Capabilities Detailed */}
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

export default PublicRelations;
