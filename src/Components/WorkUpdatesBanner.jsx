import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import defaultUpdates from '../data/workUpdates.json';

const STORAGE_KEY = 'zih_work_updates_v1';

const WorkUpdatesBanner = () => {
  const [updates] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (err) {
        console.error(err);
      }
    }
    return defaultUpdates;
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay.current]
  );

  /* ---------- Carousel plumbing ---------- */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  /* ---------- Render ---------- */
  return (
    <section className="relative w-full h-full overflow-hidden bg-[#0a0a0a] group">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {updates.map((update, index) => (
            <div
              key={update.id || index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <img
                src={update.image || '/images/project-fallback.jpg'}
                alt={update.title || 'Work update'}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/homeimage-enhanced.webp';
                }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/40 text-white hover:bg-white hover:text-black items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/40 text-white hover:bg-white hover:text-black items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === selectedIndex
                ? 'w-7 bg-white'
                : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkUpdatesBanner;