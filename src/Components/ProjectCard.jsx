import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({
    title,
    category,
    description,
    image,
    imagePosition = 'right', // 'left' or 'right'
    buttonText = 'View Case Study',
    buttonLink = '#',
}) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className={`w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-6 sm:py-12 md:py-14 flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 lg:gap-14`}>

            {/* Image Content */}
            <div className="w-full lg:w-[52%]">
                <Link to={buttonLink} className="block overflow-hidden rounded-2xl border border-white/10 bg-[#141215] group">
                    <img
                        src={image}
                        alt={title}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/images/project-fallback.jpg";
                        }}
                        className="w-full aspect-[16/10] object-cover transition-all duration-500 group-hover:scale-105"
                    />
                </Link>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[48%] flex flex-col items-start min-w-0">
                {category && (
                    <span className="mb-2 sm:mb-2.5 inline-block font-sans text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                        {category}
                    </span>
                )}
                <h3 className="mb-2.5 sm:mb-3 font-sans text-[20px] sm:text-[26px] md:text-[32px] font-semibold text-white tracking-[-0.02em] leading-snug break-words">
                    {title}
                </h3>
                <p className="mb-5 sm:mb-6 max-w-xl font-sans text-[13px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] break-words">
                    {description}
                </p>
                <Link
                    to={buttonLink}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] px-5 sm:px-6 py-2.5 font-sans text-[13px] sm:text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                >
                    <span>{buttonText}</span>
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </div>

        </div>
    );
};

export default ProjectCard;
