import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight, FiPlayCircle } from 'react-icons/fi';
import MediaModal from './MediaModal';

const VideoCarousel = ({ items = [] }) => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: false, 
        align: 'start',
        containScroll: 'trimSnaps'
    }, [
        Autoplay({ delay: 5000, stopOnInteraction: true })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!items || items.length === 0) return null;

    return (
        <div className="w-full relative px-12">
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex -ml-4">
                    {items.map((src, index) => (
                        <div 
                            className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 relative" 
                            key={index} 
                        >
                            <div 
                                className="relative group cursor-pointer w-full h-[250px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
                                onClick={() => setSelectedMedia(src)}
                            >
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <FiPlayCircle className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-all drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transform group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:bg-gray-50 text-black rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Previous video"
            >
                <FiChevronLeft className="text-xl" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 hover:bg-gray-50 text-black rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                aria-label="Next video"
            >
                <FiChevronRight className="text-xl" />
            </button>

            <MediaModal 
                selectedMedia={selectedMedia} 
                onClose={() => setSelectedMedia(null)} 
            />
        </div>
    );
};

export default VideoCarousel;
