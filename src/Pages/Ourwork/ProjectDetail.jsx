import { useParams, Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import ImageCarousel from '../../Components/ImageCarousel';
import VideoCarousel from '../../Components/VideoCarousel';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';

const ProjectDetail = () => {
    const { id } = useParams();

    // Find the project matching the ID in the URL
    const project = projectsData.find((p) => p.id === id);

    // Show a 404 / Project Not Found state if the ID doesn't exist in our JSON
    if (!project) {
        return (
            <main className="relative w-full flex flex-col items-center justify-center min-h-[75vh] bg-[#0a0a0a] text-white px-6">
                <SEO title="Project Not Found | Our Work" description="The project you are looking for does not exist." />
                <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-[#161618] px-3.5 py-1">
                    <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                        Case Study Archive
                    </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-sans text-center">
                    Project Not Found
                </h1>
                <p className="text-[#a1a1aa] text-sm md:text-base mb-8 font-sans max-w-md text-center leading-relaxed">
                    We couldn&apos;t locate the case study you&apos;re looking for. It may have been renamed, archived, or moved.
                </p>
                <Link
                    to="/our-work"
                    className="inline-flex items-center gap-2 bg-[#c4f82a] text-black font-semibold py-3 px-7 rounded-xl transition-all duration-200 hover:bg-[#b0f516] hover:scale-105 font-sans text-[13.5px]"
                >
                    <FiArrowLeft className="text-base" />
                    <span>Return to Our Work</span>
                </Link>
            </main>
        );
    }

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO
                title={`${project.title} | Case Study | ZIH`}
                description={project.cardDescription || `Case study and deliverables for ${project.title}`}
            />

            {/* =========================================================
                1. TOP BREADCRUMB & PROJECT HEADER
            ========================================================== */}
            <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#0a0a0a]">
                <div className="mx-auto w-full max-w-full">
                    {/* Back Link & Badges Row */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                        <Link
                            to="/our-work"
                            className="group inline-flex items-center gap-2 font-sans text-[12.5px] font-medium text-[#a1a1aa] transition-colors hover:text-[#c4f82a]"
                        >
                            <FiArrowLeft className="text-sm transition-transform duration-200 group-hover:-translate-x-1" />
                            <span>Back to All Work</span>
                        </Link>

                        <div className="flex items-center gap-2">
                            {project.category && (
                                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-sans text-[11px] font-medium text-[#d4d4d8]">
                                    {project.category}
                                </span>
                            )}
                            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                Case Study
                            </span>
                        </div>
                    </div>

                    {/* Headline and Metadata Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                        {/* Left: Main Titles & Narrative */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8 flex flex-col"
                        >
                            {project.subtitle && (
                                <span className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                                    {project.subtitle}
                                </span>
                            )}

                            <h1 className="font-sans text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-white tracking-tight leading-[1.15] mb-5">
                                {project.headline || project.title}
                            </h1>

                            <div className="space-y-3 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#a1a1aa] max-w-2xl">
                                {project.topSectionParagraphs && project.topSectionParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Project Specifications (Clean List, Zero Shadow Boxes) */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-4 flex flex-col divide-y divide-white/10 pt-2 lg:pt-0"
                        >
                            <div className="pb-3">
                                <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                    Client / Initiative
                                </span>
                                <span className="font-sans text-[13.5px] font-semibold text-white mt-1 block">
                                    {project.title}
                                </span>
                            </div>

                            <div className="py-3">
                                <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                    Core Practice
                                </span>
                                <span className="font-sans text-[13px] font-medium text-[#d4d4d8] mt-1 block">
                                    {project.category || "Strategic Execution"}
                                </span>
                            </div>

                            <div className="py-3">
                                <span className="block font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">
                                    Agency Role
                                </span>
                                <span className="font-sans text-[13px] font-medium text-[#d4d4d8] mt-1 block">
                                    End-to-End Creative &amp; Media Production
                                </span>
                            </div>

                            <div className="pt-3">
                                <span className="font-sans text-[11.5px] font-semibold text-[#c4f82a]">
                                    Successfully Executed &amp; Deployed
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                2. ABOUT THE PROJECT (BALANCED 12-COLUMN LAYOUT)
            ========================================================== */}
            {project.aboutParagraphs && project.aboutParagraphs.length > 0 && (
                <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 bg-[#0a0a0a]">
                    <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <span className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                Context &amp; Scope
                            </span>
                            <h2 className="font-sans text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-white tracking-tight leading-snug mb-3">
                                {project.aboutTitle || "About the Project"}
                            </h2>

                            <div className="space-y-3.5 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] w-full">
                                {project.aboutParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <p>
                                    Our production and strategy teams collaborated closely with key stakeholders from pre-event planning through post-production delivery—ensuring every visual asset, promotional touchpoint, and digital deliverable reinforced a cohesive, high-impact brand narrative.
                                </p>
                            </div>
                        </div>

                        {/* Right: Engagement Summary (Clean List, Zero Shadow Boxes) */}
                        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
                            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#c4f82a] mb-3">
                                Engagement Overview
                            </span>

                            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
                                <div>
                                    <p className="font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">Media Deliverables</p>
                                    <p className="mt-1 font-sans text-[16px] font-semibold text-white">
                                        {(project.carouselImages?.length || 0) + (project.carouselVideos?.length || 0)}+ Curated Assets
                                    </p>
                                </div>
                                <div>
                                    <p className="font-sans text-[10.5px] uppercase tracking-wider text-[#71717a]">Execution Standard</p>
                                    <p className="mt-1 font-sans text-[16px] font-semibold text-[#c4f82a]">
                                        4K Broadcast &amp; Print
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 mb-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                Core Deliverables Executed:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "Creative Direction",
                                    "Multi-Cam Coverage",
                                    "Brand Collateral",
                                    "Social Media Reels",
                                    "Color Grading & Post",
                                    "Audience Engagement"
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-sans text-[11.5px] text-[#a1a1aa]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                3. MEDIA CAROUSEL & CHALLENGES (THE SHOWCASE)
            ========================================================== */}
            {(project.carouselImages?.length > 0 || project.challenges?.length > 0) && (
                <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 bg-[#0a0a0a]">
                    <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
                        {/* Left: Image Carousel (Clean Photo Frame, No Shadows) */}
                        <div className={`w-full ${project.challenges?.length > 0 ? 'lg:col-span-6' : 'lg:col-span-10 lg:col-start-2'}`}>
                            {project.carouselImages && project.carouselImages.length > 0 && (
                                <div className="overflow-hidden rounded-xl border border-white/10 bg-transparent h-full flex flex-col justify-between">
                                    <ImageCarousel items={project.carouselImages} />
                                </div>
                            )}
                        </div>

                        {/* Right: Key Challenges (Clean Numbered List, Zero Shadow Boxes) */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                                <div>
                                    <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                        {project.challengesSubtitle || "Strategic Problem Solving"}
                                    </span>

                                    <h2 className="font-sans text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-white tracking-tight leading-tight mt-1 mb-2">
                                        {project.challengesTitle || "Key Challenges & Solutions"}
                                    </h2>

                                    {project.challengesDescription && (
                                        <p className="font-sans text-[13.5px] leading-relaxed text-[#a1a1aa] mb-5">
                                            {project.challengesDescription}
                                        </p>
                                    )}

                                    {/* Numbered Challenge Items (Clean Dividing Lines, Zero Floating Boxes) */}
                                    <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
                                        {project.challenges.map((challenge, index) => (
                                            <div
                                                key={index}
                                                className="py-3.5 flex items-start gap-3.5"
                                            >
                                                <span className="font-mono text-[13px] font-bold text-[#c4f82a] mt-0.5 shrink-0">
                                                    0{index + 1}
                                                </span>
                                                <div>
                                                    <h3 className="font-sans text-[14px] font-semibold text-white">
                                                        {challenge.title}
                                                    </h3>
                                                    <p className="mt-0.5 font-sans text-[12.5px] leading-relaxed text-[#a1a1aa]">
                                                        {challenge.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* =========================================================
                4. CLIENT TESTIMONIAL (CLEAN OPEN QUOTE, ZERO SHADOW BOXES)
            ========================================================== */}
            {project.testimonial && project.testimonial.quote && (
                <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 bg-[#0a0a0a]">
                    <div className="mx-auto w-full max-w-3xl">
                        <span className="font-sans text-[10.5px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                            Client Validation
                        </span>

                        {/* Quote Body */}
                        <blockquote className="mt-3 font-sans text-[17px] sm:text-[20px] md:text-[22px] font-normal italic text-[#fafafa] leading-relaxed">
                            &ldquo;{project.testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Author Info */}
                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                            <div>
                                <h4 className="font-sans text-[14px] font-semibold text-white">
                                    {project.testimonial.author}
                                </h4>
                                {project.testimonial.position && (
                                    <p className="font-sans text-[12px] text-[#a1a1aa] mt-0.5">
                                        {project.testimonial.position}
                                    </p>
                                )}
                            </div>

                            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#c4f82a]">
                                Verified Partner
                            </span>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                5. VIDEO HIGHLIGHTS CAROUSEL
            ========================================================== */}
            {project.carouselVideos && project.carouselVideos.length > 0 && (
                <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 bg-[#0a0a0a]">
                    <div className="mx-auto w-full max-w-full">
                        <div className="mb-6 text-center max-w-2xl mx-auto">
                            <span className="font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#c4f82a]">
                                Live Deliverables
                            </span>

                            <h2 className="mt-1 font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                {project.videoHighlightsTitle || "Video Highlights"}
                            </h2>

                            {project.videoHighlightsDescription && (
                                <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa]">
                                    {project.videoHighlightsDescription}
                                </p>
                            )}
                        </div>

                        <div className="overflow-hidden">
                            <VideoCarousel items={project.carouselVideos} />
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                6. BOTTOM CONVERSION CTA (COMPACT LUXURY)
            ========================================================== */}
            <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 overflow-hidden bg-[#0a0a0a]">
                <div className="relative z-10 mx-auto flex w-full max-w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="font-sans text-[10.5px] font-bold uppercase tracking-[2px] text-[#c4f82a]">
                            Next Steps
                        </span>
                        <h2 className="mt-1.5 max-w-[650px] font-sans text-[24px] sm:text-[30px] md:text-[34px] font-semibold text-white tracking-tight leading-tight">
                            Inspired by this case study? Let&apos;s build yours.
                        </h2>
                        <p className="mt-2 max-w-xl font-sans text-[13.5px] leading-relaxed text-[#a1a1aa]">
                            Whether you need large-scale event media, brand transformation, or high-intent acquisition campaigns, we&apos;re ready to engineer your growth.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] px-7 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                    >
                        <span>Start Your Project</span>
                        <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetail;
