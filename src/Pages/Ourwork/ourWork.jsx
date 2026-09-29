import React, { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard';
import SEO from '../../Components/SEO';
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
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO
                title="Our Work | ZIH Marketing Consultancy"
                description="Explore our portfolio of marketing and digital solutions. View our past work and success stories."
            />

            {/* Background Vertical Grid Guide Lines (12 Columns) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white/[0.04] h-full" />
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-8 sm:py-11 md:py-14 bg-[#0c0a09]">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                        <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                            Selected Portfolio
                        </span>
                    </div>

                    <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[50px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight mb-3">
                        Our Work Speaks For Itself
                    </h1>

                    <p className="font-sans text-[13.5px] sm:text-[15px] leading-relaxed text-[#a1a1aa] max-w-3xl">
                        Discover how we help organizations across industries transform operations, accelerate innovation, and achieve measurable business outcomes through technology, strategy, and intelligent digital solutions.
                    </p>
                </motion.div>
            </section>

            {/* Category Filter Section */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-4 sm:py-5 bg-[#0e0c0b]/60 backdrop-blur-md">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-semibold transition-all duration-200 font-sans cursor-pointer ${
                                activeCategory === category
                                    ? 'bg-[#c4f82a] text-black shadow-sm'
                                    : 'bg-[#141215]/80 text-[#a1a1aa] hover:text-white hover:bg-white/10 border border-white/10'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative z-10 w-full pb-16">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            description={project.cardDescription}
                            image={project.mainImage || "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=60"}
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