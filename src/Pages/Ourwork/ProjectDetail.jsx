import { useParams, Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import ImageCarousel from '../../Components/ImageCarousel';
import VideoCarousel from '../../Components/VideoCarousel';
import { FiArrowLeft, FiAlertCircle } from 'react-icons/fi';
import projectsData from '../../data/projects.json';

const ProjectDetail = () => {
    const { id } = useParams();

    // Find the project matching the ID in the URL
    const project = projectsData.find((p) => p.id === id);

    // Show a 404 / Project Not Found state if the ID doesn't exist in our JSON
    if (!project) {
        return (
            <div className="w-full flex flex-col items-center justify-center min-h-screen bg-surface-muted px-4">
                <SEO title="Project Not Found | Our Work" description="The project you are looking for does not exist." />
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 font-sans">
                    Project Not Found
                </h1>
                <p className="text-text-muted text-lg mb-8 font-sans">
                    We couldn't find the project you're looking for. It might have been moved or deleted.
                </p>
                <Link to="/our-work" className="bg-brand hover:bg-brand-hover text-white font-medium py-3 px-8 rounded-lg transition-colors font-sans">
                    Back to Our Work
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col">
            <SEO title={`${project.title} | Our Work`} description={`Project details for ${project.title}`} />

            {/* Top Light Section */}
            <section className="w-full bg-surface pt-6 pb-2 px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="w-full">

                    {project.subtitle && (
                        <h3 className="text-sm font-bold text-brand mb-4 tracking-wider uppercase font-sans">
                            {project.subtitle}
                        </h3>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-text-main mb-8 tracking-tight w-full font-sans">
                        {project.headline || project.title}
                    </h1>

                    <div className="w-full space-y-2 text-text-muted text-base md:text-lg leading-relaxed font-sans">
                        {project.topSectionParagraphs && project.topSectionParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark About Section */}
            <section className="w-full bg-surface-muted pt-6 lg:pt-8 lg:pb-6 px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="w-full text-text-main">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight font-sans">
                        {project.aboutTitle}
                    </h2>

                    <div className="w-full space-y-2 text-text-muted text-sm md:text-base leading-relaxed font-sans">
                        {project.aboutParagraphs && project.aboutParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Combined Media and Details Section */}
            {(project.carouselImages?.length > 0 || project.challenges?.length > 0) && (
                <section className="w-full bg-surface py-16 lg:py-24 px-4 md:px-8 lg:px-12 xl:px-16">
                    <div className="w-full flex flex-col lg:flex-row gap-12 lg:items-start max-w-full mx-auto">

                        {/* Left Content - Carousel */}
                        <div className={`w-full ${project.challenges?.length > 0 ? 'lg:w-1/2' : 'max-w-5xl mx-auto'}`}>
                            {project.carouselImages && project.carouselImages.length > 0 && (
                                <ImageCarousel items={project.carouselImages} />
                            )}
                        </div>

                        {/* Right Content - Challenges */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div className={`w-full ${project.carouselImages?.length > 0 ? 'lg:w-1/2' : 'max-w-3xl mx-auto'} flex flex-col`}>
                                <h3 className="text-sm font-bold text-brand mb-4 tracking-wider uppercase font-sans">
                                    {project.challengesSubtitle || "Challenges"}
                                </h3>
                                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-text-main mb-6 tracking-tight leading-[1.2] font-sans">
                                    {project.challengesTitle}
                                </h2>
                                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 font-sans">
                                    {project.challengesDescription}
                                </p>

                                <ul className="list-disc pl-5 space-y-3 text-text-muted text-sm md:text-base leading-relaxed font-sans">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index}>
                                            <strong className="text-text-main">{challenge.title}:</strong> {challenge.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Testimonial Section */}
            {project.testimonial && project.testimonial.quote && (
                <section className="w-full bg-surface py-4 lg:py-5 px-4 md:px-8 lg:px-12 xl:px-16 border-t border-border">
                    <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6">
                        <div className="w-full lg:w-2/3 text-left">
                            <div className="text-3xl text-brand opacity-40 mb-2 font-sans font-bold leading-none">"</div>
                            <p className="text-base md:text-lg lg:text-xl text-text-main font-medium italic leading-relaxed font-sans">
                                {project.testimonial.quote}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right lg:mt-3">
                            <h4 className="text-sm md:text-base font-bold text-text-main font-sans">
                                {project.testimonial.author}
                            </h4>
                            {project.testimonial.position && (
                                <span className="text-xs text-text-muted mt-0.5 uppercase tracking-wider font-medium font-sans">
                                    {project.testimonial.position}
                                </span>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Video Section */}
            {project.carouselVideos && project.carouselVideos.length > 0 && (
                <section className="w-full bg-surface-muted py-16 lg:py-24 px-4 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
                    <div className="w-full flex flex-col items-center">
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                            {project.videoHighlightsTitle && (
                                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight font-sans">
                                    {project.videoHighlightsTitle}
                                </h2>
                            )}
                            {project.videoHighlightsDescription && (
                                <p className="text-text-muted text-base md:text-lg leading-relaxed font-sans">
                                    {project.videoHighlightsDescription}
                                </p>
                            )}
                        </div>
                        <VideoCarousel items={project.carouselVideos} />
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="w-full bg-brand py-8 lg:py-10 px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="max-w-3xl text-left">
                        <span className="text-white/90 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-1.5 block font-sans">
                            Let's Build Together
                        </span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight leading-snug font-sans">
                            Start Your Digital Transformation Journey Today
                        </h2>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed font-sans">
                            Partner with us to modernize your business, unlock innovation, and build scalable digital solutions that drive measurable growth.
                        </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 lg:mt-0 w-full lg:w-auto text-left lg:text-right">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center bg-surface-muted hover:bg-surface text-text-main font-medium text-xs md:text-sm py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md font-sans"
                        >
                            Talk To Our Experts
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
