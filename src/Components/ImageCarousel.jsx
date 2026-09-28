import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MediaModal from './MediaModal';

const ImageCarousel = ({ items = [], heightClass = "h-auto max-h-[600px]" }) => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: true })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!items || items.length === 0) return null;

    const renderSingleMedia = (src) => {
        return (
            <div className="relative group cursor-pointer w-full h-full" onClick={() => setSelectedMedia(src)}>
                <img
                    src={src}
                    alt="Project media"
                    className={`w-full ${heightClass} shadow-xl object-cover rounded-xl transition-transform duration-500`}
                />
            </div>
        );
    };

    return (
        <>
            {items.length === 1 ? (
                renderSingleMedia(items[0])
            ) : (
                <div className="relative group w-full">
                    <div className="overflow-hidden w-full shadow-xl rounded-xl cursor-pointer" ref={emblaRef}>
                        <div className="flex">
                            {items.map((src, index) => (
                                <div className="flex-[0_0_100%] min-w-0 relative" key={index} onClick={() => setSelectedMedia(src)}>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className={`w-full ${heightClass} object-cover`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Previous image"
                    >
                        <FiChevronLeft className="text-xl" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Next image"
                    >
                        <FiChevronRight className="text-xl" />
                    </button>
                </div>
            )}

            <MediaModal 
                selectedMedia={selectedMedia} 
                onClose={() => setSelectedMedia(null)} 
            />
        </>
    );
};

export default ImageCarousel;
