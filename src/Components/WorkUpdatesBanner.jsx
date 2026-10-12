import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiArrowUpRight } from 'react-icons/fi';
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

  const scrollTo = useCallback(
    (i) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(i);
      emblaApi.plugins()?.autoplay?.reset();
    },
    [emblaApi]
  );

  const isLight = theme === 'light';

  // HERO BACKGROUND MODE — visual style only
  if (isHeroBg) {
    return (
      <div className="relative w-full h-full overflow-hidden">
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
      </div>
    );
  }

  // STANDALONE SECTION MODE — solid caption card, no image blur
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Card frame */}
        <div
          className={`relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_24px_70px_-24px_rgba(0,0,0,0.45)] ${isLight
              ? 'bg-white ring-1 ring-neutral-200/70'
              : 'bg-[#0a0a0a] ring-1 ring-white/10'
            }`}
        >
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

                  {/* Bottom-up gradient — stops at 25% only */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none ${isLight
                        ? 'bg-gradient-to-t from-black/55 via-black/20 to-transparent'
                        : 'bg-gradient-to-t from-black/70 via-black/25 to-transparent'
                      }`}
                  />

                  {(update.title || update.category) && (
                    <div
                      className={`absolute bottom-5 left-5 sm:bottom-7 sm:left-7 md:bottom-9 md:left-10 z-20 max-w-[calc(100%-40px)] sm:max-w-md md:max-w-lg rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_16px_44px_-10px_rgba(0,0,0,0.28)] transition-all duration-300 ${isLight
                          ? 'bg-white border border-neutral-200/90 text-neutral-900'
                          : 'bg-[#0a0a0a] border border-white/15 text-white'
                        }`}
                    >
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-2">
                        {update.tag && (
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-wide ${isLight
                                ? 'bg-neutral-900 text-white'
                                : 'bg-white text-black'
                              }`}
                          >
                            {update.tag}
                          </span>
                        )}
                        {update.category && (
                          <span
                            className={`text-[11.5px] sm:text-[12px] font-semibold ${isLight ? 'text-neutral-600' : 'text-white/90'
                              }`}
                          >
                            {update.category}
                          </span>
                        )}
                        {update.date && (
                          <span
                            className={`text-[11px] sm:text-[11.5px] ${isLight ? 'text-neutral-400' : 'text-white/60'
                              }`}
                          >
                            • {update.date}
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-sans text-[15px] sm:text-[17px] md:text-[20px] font-bold leading-snug tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'
                          }`}
                      >
                        {update.title}
                      </h3>

                      {update.description && (
                        <p
                          className={`mt-2 font-sans text-[12px] sm:text-[13px] line-clamp-2 leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/80'
                            }`}
                        >
                          {update.description}
                        </p>
                      )}

                      {update.link && (
                        <div className="mt-3.5">
                          <Link
                            to={update.link}
                            className={`inline-flex items-center gap-1.5 font-sans text-[12px] sm:text-[13px] font-semibold transition-colors group/link ${isLight
                                ? 'text-neutral-900 hover:text-black'
                                : 'text-white hover:text-white/80'
                              }`}
                          >
                            <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover/link:after:w-full">
                              View Case Study
                            </span>
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

          {/* Bottom radio dots — kept frosted */}
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
            <div
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] ${isLight
                  ? 'bg-white border border-neutral-200'
                  : 'bg-[#0a0a0a] border border-white/15'
                }`}
            >
              {scrollSnaps.map((_, index) => {
                const active = index === selectedIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={active ? 'true' : undefined}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer ${active
                        ? isLight
                          ? 'w-5 h-5 bg-neutral-900 shadow-[0_0_0_3px_rgba(0,0,0,0.08)]'
                          : 'w-5 h-5 bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.15)]'
                        : isLight
                          ? 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                          : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                      }`}
                  >
                    {active && (
                      <span className="absolute inset-[3px] rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkUpdatesBanner;