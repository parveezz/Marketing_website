
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MediaModal from './MediaModal';

const ImageCarousel = ({
    items = [],
    heightClass = 'h-auto max-h-[600px]',
}) => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
        },
        [
            Autoplay({
                delay: 5000,
                stopOnInteraction: true,
            }),
        ]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    if (!items || items.length === 0) {
        return null;
    }

    const renderSingleMedia = (src) => {
        return (
            <div
                className="relative w-full cursor-pointer"
                onClick={() => setSelectedMedia(src)}
            >
                <img
                    src={src}
                    alt="Project media"
                    className={`w-full ${heightClass} object-cover rounded-xl shadow-xl`}
                />
            </div>
        );
    };

    return (
        <>
            {items.length === 1 ? (
                renderSingleMedia(items[0])
            ) : (
                <div className="relative w-full">

                    {/* Carousel */}
                    <div
                        ref={emblaRef}
                        className="overflow-hidden w-full rounded-xl shadow-xl"
                    >
                        <div className="flex">
                            {items.map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 relative"
                                    onClick={() => setSelectedMedia(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className={`w-full ${heightClass} object-cover`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LEFT ARROW */}
                    <button
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous image"
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            z-20
                            flex
                            items-center
                            justify-center
                            w-11
                            h-11
                            rounded-full
                            bg-white/90
                            text-black
                            shadow-lg
                            hover:bg-white
                            transition
                        "
                    >
                        <FiChevronLeft className="w-6 h-6" />
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next image"
                        className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            z-20
                            flex
                            items-center
                            justify-center
                            w-11
                            h-11
                            rounded-full
                            bg-white/90
                            text-black
                            shadow-lg
                            hover:bg-white
                            transition
                        "
                    >
                        <FiChevronRight className="w-6 h-6" />
                    </button>

                </div>
            )}

            {/* Media Modal */}
            <MediaModal
                selectedMedia={selectedMedia}
                onClose={() => setSelectedMedia(null)}
            />
        </>
    );
};

export default ImageCarousel;
