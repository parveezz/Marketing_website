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
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
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

            {/* Background Vertical Grid Guide Lines (12 Columns) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white/[0.04] h-full" />
                ))}
            </div>

            {/* =========================================================
                1. TOP BREADCRUMB & PROJECT HEADER
            ========================================================== */}
            <section className="relative z-10 w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-8 sm:pt-7 sm:pb-10 bg-[#0c0a09]">
                <div className="mx-auto w-full max-w-full">
                    {/* Back Link & Badges Row */}
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <Link
                            to="/our-work"
                            className="group inline-flex items-center gap-2 font-sans text-[12px] font-medium text-[#a1a1aa] transition-colors hover:text-[#c4f82a]"
                        >
                            <FiArrowLeft className="text-sm transition-transform duration-200 group-hover:-translate-x-1" />
                            <span>Back to All Work</span>
                        </Link>

                        <div className="flex items-center gap-2">
                            {project.category && (
                                <span className="rounded-full border border-white/10 bg-[#161618]/90 px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-[#d4d4d8] backdrop-blur-md">
                                    {project.category}
                                </span>
                            )}
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161618]/90 px-2.5 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    Case Study
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Headline and Metadata Grid */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-start">
                        {/* Left: Main Titles & Narrative */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8 flex flex-col"
                        >
                            {project.subtitle && (
                                <span className="mb-1.5 font-sans text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                    {project.subtitle}
                                </span>
                            )}

                            <h1 className="font-sans text-[26px] sm:text-[34px] md:text-[40px] font-semibold text-white tracking-tight leading-[1.15] mb-4">
                                {project.headline || project.title}
                            </h1>

                            <div className="space-y-2.5 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] max-w-2xl">
                                {project.topSectionParagraphs && project.topSectionParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Project Specifications Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-4 rounded-xl border border-white/10 bg-[#141215]/85 p-4 sm:p-5 backdrop-blur-md shadow-lg"
                        >
                            <p className="font-sans text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#c4f82a] mb-3 pb-1.5 border-b border-white/10">
                                Project Overview
                            </p>

                            <div className="space-y-3">
                                <div>
                                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#71717a]">
                                        Client / Initiative
                                    </span>
                                    <span className="font-sans text-[12.5px] font-semibold text-white mt-0.5 block">
                                        {project.title}
                                    </span>
                                </div>

                                <div>
                                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#71717a]">
                                        Core Practice
                                    </span>
                                    <span className="font-sans text-[12.5px] font-medium text-[#d4d4d8] mt-0.5 block">
                                        {project.category || "Strategic Execution"}
                                    </span>
                                </div>

                                <div>
                                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#71717a]">
                                        Agency Role
                                    </span>
                                    <span className="font-sans text-[12.5px] font-medium text-[#d4d4d8] mt-0.5 block">
                                        End-to-End Creative & Media Production
                                    </span>
                                </div>

                                <div className="pt-2.5 border-t border-white/10 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[11px] font-medium text-[#c4f82a]">
                                        Successfully Executed & Deployed
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                2. ABOUT THE PROJECT (COLUMN STYLE WITH TIGHT PADDING)
            ========================================================== */}
            {project.aboutParagraphs && project.aboutParagraphs.length > 0 && (
                <section className="relative z-10 w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 bg-[#0a0a0a]">
                    <div className="mx-auto w-full max-w-4xl flex flex-col items-start">
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-2.5 py-0.5 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                            <span className="font-sans text-[10.5px] font-medium tracking-wide text-[#fafafa]">
                                Context & Scope
                            </span>
                        </div>
                        <h2 className="font-sans text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-white tracking-tight leading-snug mb-3">
                            {project.aboutTitle || "About the Project"}
                        </h2>

                        <div className="space-y-2.5 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] w-full">
                            {project.aboutParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                3. MEDIA CAROUSEL & CHALLENGES (THE SHOWCASE)
            ========================================================== */}
            {(project.carouselImages?.length > 0 || project.challenges?.length > 0) && (
                <section className="relative z-10 w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 bg-[#0c0a09]">
                    <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
                        {/* Left: Image Carousel */}
                        <div className={`w-full ${project.challenges?.length > 0 ? 'lg:col-span-6' : 'lg:col-span-10 lg:col-start-2'}`}>
                            {project.carouselImages && project.carouselImages.length > 0 && (
                                <div className="overflow-hidden rounded-xl border border-white/15 bg-[#141215] shadow-xl">
                                    <ImageCarousel items={project.carouselImages} />
                                </div>
                            )}
                        </div>

                        {/* Right: Key Challenges as Numbered Glass Cards */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div className="lg:col-span-6 flex flex-col">
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-2.5 py-0.5 backdrop-blur-md w-fit">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[10.5px] font-medium tracking-wide text-[#fafafa]">
                                        {project.challengesSubtitle || "Strategic Problem Solving"}
                                    </span>
                                </div>

                                <h2 className="font-sans text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-white tracking-tight leading-tight mb-2">
                                    {project.challengesTitle || "Key Challenges & Solutions"}
                                </h2>

                                {project.challengesDescription && (
                                    <p className="font-sans text-[13px] leading-relaxed text-[#a1a1aa] mb-4">
                                        {project.challengesDescription}
                                    </p>
                                )}

                                {/* Numbered Challenge Cards */}
                                <div className="flex flex-col gap-2.5">
                                    {project.challenges.map((challenge, index) => (
                                        <div
                                            key={index}
                                            className="group rounded-xl border border-white/10 bg-[#141215]/80 p-3.5 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-[#18151a]"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c4f82a]/15 font-sans text-[10px] font-bold text-[#c4f82a] mt-0.5">
                                                    0{index + 1}
                                                </span>
                                                <div>
                                                    <h3 className="font-sans text-[13.5px] font-semibold text-white">
                                                        {challenge.title}
                                                    </h3>
                                                    <p className="mt-0.5 font-sans text-[12px] leading-relaxed text-[#a1a1aa]">
                                                        {challenge.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* =========================================================
                4. CLIENT TESTIMONIAL (COMPACT & BALANCED)
            ========================================================== */}
            {project.testimonial && project.testimonial.quote && (
                <section className="relative z-10 w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 bg-[#0a0a0a]">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="relative rounded-xl border border-white/10 bg-[#141215]/90 p-5 sm:p-6 shadow-xl backdrop-blur-xl">
                            {/* Top Badge */}
                            <div className="mb-3.5 flex items-center justify-between border-b border-white/10 pb-2.5">
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                    <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                                        Client Validation
                                    </span>
                                </div>
                                <span className="font-sans text-[10.5px] text-[#71717a]">
                                    Verified Engagement
                                </span>
                            </div>

                            {/* Quote Body */}
                            <blockquote className="font-sans text-[15px] sm:text-[17px] md:text-[18px] font-medium italic text-[#fafafa] leading-relaxed">
                                &ldquo;{project.testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author Info */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <h4 className="font-sans text-[13.5px] font-semibold text-white">
                                        {project.testimonial.author}
                                    </h4>
                                    {project.testimonial.position && (
                                        <p className="font-sans text-[11px] text-[#a1a1aa] mt-0.5">
                                            {project.testimonial.position}
                                        </p>
                                    )}
                                </div>

                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-sans text-[11px] font-bold text-[#c4f82a]">
                                    ZIH
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                5. VIDEO HIGHLIGHTS CAROUSEL
            ========================================================== */}
            {project.carouselVideos && project.carouselVideos.length > 0 && (
                <section className="relative z-10 w-full border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 bg-[#0c0a09]">
                    <div className="mx-auto w-full max-w-full">
                        <div className="mb-5 text-center max-w-2xl mx-auto">
                            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-2.5 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-medium tracking-wide text-[#fafafa]">
                                    Live Deliverables
                                </span>
                            </div>

                            <h2 className="font-sans text-[22px] sm:text-[28px] font-semibold text-white tracking-tight">
                                {project.videoHighlightsTitle || "Video Highlights"}
                            </h2>

                            {project.videoHighlightsDescription && (
                                <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                                    {project.videoHighlightsDescription}
                                </p>
                            )}
                        </div>

                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141215]/60 p-3 sm:p-4 backdrop-blur-md">
                            <VideoCarousel items={project.carouselVideos} />
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                6. BOTTOM CONVERSION CTA (COMPACT LUXURY)
            ========================================================== */}
            <section className="relative w-full border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 overflow-hidden bg-[#0c0a09]">
                {/* Background Waves Ambient */}
                <div className="pointer-events-none absolute inset-0 opacity-15 z-0 flex items-center justify-center">
                    <svg
                        className="w-full h-full object-cover"
                        viewBox="0 0 1440 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 150 C 360 60, 720 240, 1080 100 T 1440 170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <path d="M0 180 C 360 90, 720 270, 1080 130 T 1440 200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    </svg>
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#c4f82a]">
                            Next Steps
                        </span>
                        <h2 className="mt-1 max-w-[650px] font-sans text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-white tracking-tight leading-tight">
                            Inspired by this case study? Let&apos;s build yours.
                        </h2>
                        <p className="mt-1.5 max-w-xl font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                            Whether you need large-scale event media, brand transformation, or high-intent acquisition campaigns, we&apos;re ready to engineer your growth.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-2.5 font-sans text-[13px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
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
