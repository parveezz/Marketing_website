import { useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function CarouselPlugin() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="relative w-full max-w-xs group"
      onMouseEnter={() => autoplayPlugin.current.stop()}
      onMouseLeave={() => autoplayPlugin.current.reset()}
    >
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex-[0_0_100%] min-w-0 p-1" key={index}>
              {/* Card Replacement */}
              <div className="rounded-xl border bg-white text-gray-950 shadow-sm">
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold text-gray-800">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 disabled:opacity-50"
      >
        <FiChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 disabled:opacity-50"
      >
        <FiChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}
