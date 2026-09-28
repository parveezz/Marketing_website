import { FiArrowUpRight } from 'react-icons/fi';
import ImageCarousel from './ImageCarousel';

const ProjectCard = ({
    title,
    description,
    image,
    images = [],
    imagePosition = 'right', // 'left' or 'right'
    buttonText = 'Read More',
    buttonLink = '#',
    buttonStyle = 'blue', // 'blue' or 'black'
}) => {
    const isImageLeft = imagePosition === 'left';

    const buttonClass = buttonStyle === 'blue'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-[#0f172a] text-white hover:bg-black';

    return (
        <div className={`w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8 flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

            {/* Image Content */}
            <div className="w-full lg:w-[55%]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[300px] lg:h-[400px] shadow-xl object-cover rounded-xl"
                />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[45%] flex flex-col items-start">
                <h3 className="text-3xl lg:text-4xl font-bold text-text-main mb-4 uppercase font-sans">
                    {title}
                </h3>
                <p className="w-full text-text-muted text-base md:text-lg mb-8 leading-relaxed font-sans">
                    {description}
                </p>
                <a
                    href={buttonLink}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 font-sans ${buttonStyle === 'blue' ? 'bg-brand text-white hover:bg-brand-hover shadow-lg shadow-brand/20' : 'bg-surface text-text-main border border-border hover:bg-white/5'}`}
                >
                    {buttonText}
                    <FiArrowUpRight className="text-lg" />
                </a>
            </div>

        </div>
    );
};

export default ProjectCard;
