import React, { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard';
import SEO from '../../Components/SEO';
import WorkUpdatesBanner from '../../Components/WorkUpdatesBanner';
import projectsData from '../../data/projects.json';
import { motion } from 'framer-motion';

const OurWork = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories from the JSON data dynamically
    const categories = ["All", ...new Set(projectsData.map(project => project.category).filter(Boolean))];

    // Filter projects based on selected category
    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen">
            <SEO
                title="Our Work | ZIH Marketing Consultancy"
                description="Explore our portfolio of marketing and digital solutions. View our past work and success stories."
            />

            {/* =========================================================
                HERO: SLIDER BACKGROUND + TEXT OVERLAY
            ========================================================= */}
            <section className="relative w-full h-[520px] sm:h-[600px] md:h-[640px] lg:h-[700px] overflow-hidden bg-[#0a0a0a]">
                {/* SLIDER — fills the entire hero */}
                <div className="absolute inset-0 z-0">
                    <WorkUpdatesBanner />
                </div>

                {/* Bottom-left gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-10" />

                {/* TEXT OVERLAY — bottom-left, aligned to site padding */}
                <div className="absolute inset-0 z-20 flex items-end pointer-events-none">
                    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 pb-16 sm:pb-20 md:pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl pointer-events-auto"
                        >
                            <div className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1 backdrop-blur-md">
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Selected Portfolio
                                </span>
                            </div>

                            <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-semibold tracking-[-0.02em] text-white leading-[1.1] mb-4">
                                Our Work Speaks For Itself
                            </h1>

                            <p className="font-sans text-[13.5px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#e4e4e7] max-w-2xl">
                                Discover how we help organizations across industries transform operations, accelerate innovation, and achieve measurable business outcomes through technology, strategy, and intelligent digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CATEGORY FILTER
            ========================================================= */}
            <section className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-5 bg-[#0e0c0b]/80 backdrop-blur-md border-y border-white/5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-semibold transition-all duration-200 font-sans cursor-pointer ${activeCategory === category
                                ? 'bg-[#c4f82a] text-black shadow-[0_0_20px_-4px_rgba(196,248,42,0.6)]'
                                : 'bg-[#141215]/80 text-[#a1a1aa] hover:text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* =========================================================
                PROJECTS
            ========================================================= */}
            <section className="relative z-10 w-full pb-16">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            headline={project.headline}
                            category={project.category}
                            description={project.cardDescription}
                            aboutText={project.aboutParagraphs?.[0]}
                            highlights={project.challenges || []}
                            image={project.mainImage || "/images/project-fallback.jpg"}
                            imagePosition={index % 2 === 0 ? 'right' : 'left'}
                            buttonText="View Case Study"
                            buttonLink={`/our-work/${project.id}`}
                        />
                    ))
                ) : (
                    <div className="text-center py-20 text-[#a1a1aa] text-base font-sans">
                        No projects found in this category.
                    </div>
                )}
            </section>
        </main>
    );
};

export default OurWork;