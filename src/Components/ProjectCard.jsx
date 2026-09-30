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
        <div className={`w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14 border-b border-white/10 last:border-b-0 flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-14`}>

            {/* Image Content */}
            <div className="w-full lg:w-[52%]">
                <Link to={buttonLink} className="block overflow-hidden rounded-2xl border border-white/10 bg-[#141215] shadow-2xl group">
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
            <div className="w-full lg:w-[48%] flex flex-col items-start">
                {category && (
                    <span className="mb-2.5 inline-block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                        {category}
                    </span>
                )}
                <h3 className="mb-3 font-sans text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white tracking-[-0.02em] leading-snug">
                    {title}
                </h3>
                <p className="mb-6 max-w-xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
                    {description}
                </p>
                <Link
                    to={buttonLink}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-2.5 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                >
                    <span>{buttonText}</span>
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </div>

        </div>
    );
};

export default ProjectCard;
