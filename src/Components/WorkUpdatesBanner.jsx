import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import defaultUpdates from '../data/workUpdates.json';

const STORAGE_KEY = 'zih_work_updates_v1';

const WorkUpdatesBanner = ({ isHeroBg = false, theme = 'light' }) => {
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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
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

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    emblaApi.plugins()?.autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    emblaApi.plugins()?.autoplay?.reset();
  }, [emblaApi]);

  const scrollTo = useCallback((i) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(i);
    emblaApi.plugins()?.autoplay?.reset();
  }, [emblaApi]);

  const isLight = theme === 'light';

  // HERO BACKGROUND MODE: fills the parent hero section
  if (isHeroBg) {
    const currentUpdate = updates[selectedIndex];

    return (
      <div className="relative w-full h-full overflow-hidden group">
        {/* Slides Track */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {updates.map((update, index) => (
              <div
                key={update.id || index}
                className="flex-[0_0_100%] min-w-0 relative h-full bg-[#0a0a0a]"
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

        {/* Light Mode Arrows */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-neutral-900 border border-neutral-200/90 shadow-xl hover:bg-neutral-900 hover:text-white items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-md"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-neutral-900 border border-neutral-200/90 shadow-xl hover:bg-neutral-900 hover:text-white items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-md"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Light Mode Bottom Badges & Controls */}
        <div className="absolute bottom-5 inset-x-6 sm:inset-x-10 z-20 flex items-center justify-between pointer-events-none">
          {/* Current update title badge (light mode) */}
          {currentUpdate && (
            <div className="hidden md:inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/90 shadow-lg text-neutral-900 pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {currentUpdate.tag && (
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                  {currentUpdate.tag}
                </span>
              )}
              <span className="text-[12px] font-semibold text-neutral-800 max-w-[280px] lg:max-w-[400px] truncate">
                {currentUpdate.title}
              </span>
              {currentUpdate.link && (
                <Link
                  to={currentUpdate.link}
                  className="text-xs font-bold text-neutral-900 hover:underline flex items-center gap-0.5"
                >
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          )}

          {/* Dots Indicator (light mode) */}
          <div className="ml-auto flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-neutral-200/90 pointer-events-auto">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === selectedIndex
                    ? 'w-6 bg-neutral-900'
                    : 'w-1.5 bg-neutral-300 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // STANDALONE SECTION MODE
  return (
    <section className="relative w-full pb-8 pt-0 overflow-hidden bg-[#0a0a0a]">
      <div className={`relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] overflow-hidden border-y group ${
        isLight ? 'border-neutral-200/30 bg-[#f4f4f5]' : 'border-white/10 bg-[#0a0a0a]'
      }`}>
        {/* Slides Track */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {updates.map((update, index) => (
              <div
                key={update.id || index}
                className="flex-[0_0_100%] min-w-0 relative h-full bg-neutral-100"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                {(update.title || update.category) && (
                  <div className={`absolute bottom-6 left-5 sm:bottom-8 sm:left-8 md:bottom-10 md:left-12 z-20 max-w-[calc(100%-40px)] sm:max-w-md md:max-w-lg rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                    isLight
                      ? 'bg-white/95 backdrop-blur-md border border-neutral-200/90 text-neutral-900'
                      : 'bg-black/85 backdrop-blur-md border border-white/15 text-white'
                  }`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {update.tag && (
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-wide ${
                          isLight ? 'bg-neutral-900 text-white' : 'bg-[#c4f82a] text-black'
                        }`}>
                          {update.tag}
                        </span>
                      )}
                      {update.category && (
                        <span className={`text-[11.5px] sm:text-[12px] font-semibold ${
                          isLight ? 'text-neutral-600' : 'text-neutral-300'
                        }`}>
                          {update.category}
                        </span>
                      )}
                      {update.date && (
                        <span className={`text-[11px] sm:text-[11.5px] ${
                          isLight ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          • {update.date}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-sans text-[15px] sm:text-[17px] md:text-[20px] font-bold leading-snug tracking-tight ${
                      isLight ? 'text-neutral-900' : 'text-white'
                    }`}>
                      {update.title}
                    </h3>

                    {update.description && (
                      <p className={`mt-1.5 font-sans text-[12px] sm:text-[13px] line-clamp-2 leading-relaxed ${
                        isLight ? 'text-neutral-600' : 'text-[#a1a1aa]'
                      }`}>
                        {update.description}
                      </p>
                    )}

                    {update.link && (
                      <div className="mt-3">
                        <Link
                          to={update.link}
                          className={`inline-flex items-center gap-1.5 font-sans text-[12px] sm:text-[13px] font-semibold transition-colors group/link ${
                            isLight
                              ? 'text-neutral-900 hover:text-black hover:underline'
                              : 'text-white hover:text-[#c4f82a]'
                          }`}
                        >
                          <span>View Case Study</span>
                          <FiArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className={`hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full shadow-lg items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 ${
            isLight
              ? 'bg-white/95 text-neutral-900 border border-neutral-200/90 hover:bg-neutral-900 hover:text-white'
              : 'border border-white/40 text-white hover:bg-white hover:text-black'
          }`}
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className={`hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full shadow-lg items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 ${
            isLight
              ? 'bg-white/95 text-neutral-900 border border-neutral-200/90 hover:bg-neutral-900 hover:text-white'
              : 'border border-white/40 text-white hover:bg-white hover:text-black'
          }`}
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Pill */}
        <div className={`absolute bottom-6 right-5 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg ${
          isLight
            ? 'bg-white/95 backdrop-blur-md border border-neutral-200/90'
            : 'bg-black/60 backdrop-blur-md border border-white/10'
        }`}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex
                  ? isLight ? 'w-6 bg-neutral-900' : 'w-6 bg-white'
                  : isLight ? 'w-1.5 bg-neutral-300 hover:bg-neutral-500' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkUpdatesBanner;