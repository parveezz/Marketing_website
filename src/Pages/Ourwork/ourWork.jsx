import React, { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard';
import SEO from '../../Components/SEO';
import projectsData from '../../data/projects.json';

const OurWork = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories from the JSON data dynamically
    const categories = ["All", ...new Set(projectsData.map(project => project.category).filter(Boolean))];

    // Filter projects based on selected category
    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <div className="w-full bg-surface-muted min-h-screen">
            <SEO
                title="Our Work"
                description="Explore our portfolio of marketing and digital solutions. View our past work and success stories."
            />

            {/* Hero Section */}
            <section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 pt-12 pb-8 text-center md:text-left">
                <h2 className="text-sm font-bold text-brand mb-4 tracking-wider uppercase font-sans">
                    Success Stories
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-text-main mb-6 tracking-tight font-sans">
                    Our Work Speaks For Itself
                </h1>
                <p className="w-full text-text-muted text-base md:text-lg leading-relaxed font-sans max-w-4xl">
                    Discover how we help organizations across industries transform operations, accelerate innovation, and achieve measurable business outcomes through technology, strategy, and intelligent digital solutions.
                </p>
            </section>

            {/* Category Filter Section */}
            <section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mb-10">
                <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-sans ${activeCategory === category
                                ? 'bg-brand text-white shadow-lg shadow-brand/20 border border-brand'
                                : 'bg-surface text-text-muted hover:bg-white/5 border border-border'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="w-full h-full pb-24">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.cardDescription}
                            image={project.mainImage || "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=60"}
                            imagePosition={index % 2 === 0 ? 'right' : 'left'}
                            buttonText="View Work"
                            buttonLink={`/our-work/${project.id}`}
                            buttonStyle={index % 2 === 0 ? 'blue' : 'black'}
                        />
                    ))
                ) : (
                    <div className="text-center py-20 text-text-muted text-lg font-sans">
                        No projects found in this category.
                    </div>
                )}
            </section>
        </div>
    )
}

export default OurWork;