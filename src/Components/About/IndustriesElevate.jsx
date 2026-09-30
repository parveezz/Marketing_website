import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight, FiBookOpen, FiCompass, FiHome, FiAward, FiCoffee } from "react-icons/fi";

const industries = [
  {
    id: "education",
    projectRef: "Pallavi International School",
    subtitle: "Education • K-12 & Campus PR",
    image: "/images/project-pallavi-pocharam-main.jpg",
    ourWorkPath: "/our-work/pallavi-school-pocharam-2026",
    icon: <FiBookOpen className="text-lg text-[#c4f82a]" />,
    narrative:
      "We partnered with Pallavi International School to orchestrate full-funnel admissions campaigns, campus investiture ceremonies, and rapid media syndication. Our integrated strategy drove verified parental inquiries and elevated executive leadership visibility across regional media channels."
  },
  {
    id: "automobiles",
    projectRef: "Dealership Launch & Promotions",
    subtitle: "Automobiles • Test Drive Acquisition",
    image: "/images/project-promotions-main.jpg",
    ourWorkPath: "/our-work/advertisements-promotions",
    icon: <FiCompass className="text-lg text-[#c4f82a]" />,
    narrative:
      "For regional dealership networks and automotive launches, we engineered high-velocity test drive lead acquisition, theatrical showroom model unveilings, and citywide outdoor billboard blitzes. The campaign turned digital attention into measurable dealership floor footfall."
  },
  {
    id: "real-estate",
    projectRef: "World Business Conclave",
    subtitle: "Real Estate • Luxury Conclaves",
    image: "/images/project-conclave-main.jpg",
    ourWorkPath: "/our-work/world-business-conclave-2026",
    icon: <FiHome className="text-lg text-[#c4f82a]" />,
    narrative:
      "We accelerated sales velocity for premier real estate developers and high-level corporate conclaves. By combining targeted NRI digital acquisition funnels with VIP gala staging and architectural walkthroughs, we minimized inventory holding cycles and attracted high-net-worth investors."
  },
  {
    id: "sports",
    projectRef: "ISSO Games Athletics",
    subtitle: "Sports • Tournament Operations",
    image: "/videos/isso-games/img3.jpg",
    ourWorkPath: "/our-work/isso-games",
    icon: <FiAward className="text-lg text-[#c4f82a]" />,
    narrative:
      "For the ISSO Games Athletics tournament, we deployed full perimeter stadium branding, multi-camera live broadcast infrastructure, and real-time social reel production. Over 50,000 athletes, dignitaries, and attendees experienced a seamlessly coordinated, Olympic-standard atmosphere."
  },
  {
    id: "food",
    projectRef: "Hyderabad Chai Company",
    subtitle: "Food & Hospitality • Launch Footfall",
    image: "/videos/hyderabadChai/mainImage.webp",
    ourWorkPath: "/our-work/hcc-mehdipatnam",
    icon: <FiCoffee className="text-lg text-[#c4f82a]" />,
    narrative:
      "We orchestrated the promotional marketing and grand opening event for Hyderabad Chai Company in Mehdipatnam. Through hyper-local geo-targeted social teasers, macro culinary cinematography, and launch-day crowd activation, we delivered immediate standing-room-only footfall."
  }
];

const IndustriesElevate = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0c0a09] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16">
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* ================= HEADER (MATCHING CLIENT REFERENCE) ================= */}
        <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#c4f82a]">
            Industries &amp; Sectors
          </span>

          <h2 className="mt-2.5 font-sans text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-white tracking-tight leading-tight max-w-3xl">
            Sectors Where We Drive Market Leadership
          </h2>

          <p className="mt-3 max-w-2xl font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
            Our team partners with businesses across key industries to engineer reliable, scalable, and high-impact marketing solutions.
          </p>
        </div>

        {/* ================= CAROUSEL WRAPPER WITH CRISP CIRCULAR ARROWS ================= */}
        <div className="relative w-full px-0 sm:px-6 md:px-8">
          {/* Circular Left Arrow Button (Clean, Solid, No Blur/Shadow) */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous Industry"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-200 hover:bg-[#c4f82a] hover:border-[#c4f82a] cursor-pointer"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-5">
              {industries.map((ind) => (
                <div
                  key={ind.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-5"
                >
                  {/* Card Container (Clean, Flat, No Shadows) */}
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#141215] p-5 sm:p-6 transition-all duration-300 hover:border-white/25">
                    <div>
                      {/* 1. Pure Clean Project Photo */}
                      <Link
                        to={ind.ourWorkPath}
                        className="block overflow-hidden rounded-xl border border-white/10 bg-[#16141a] aspect-[16/10] mb-5"
                      >
                        <img
                          src={ind.image}
                          alt={ind.projectRef}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/images/project-fallback.jpg";
                          }}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </Link>

                      {/* 2. Card Header (Icon Box + Name + Subtitle, No Stat Box) */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                          {ind.icon}
                        </div>
                        <div>
                          <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight leading-snug">
                            {ind.projectRef}
                          </h3>
                          <p className="mt-0.5 font-sans text-[12px] text-zinc-400">
                            {ind.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* 3. Divider Line (Matching Reference) */}
                      <div className="my-4 border-t border-white/10" />

                      {/* 4. Narrative Paragraph (Matching Reference) */}
                      <p className="font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                        {ind.narrative}
                      </p>
                    </div>

                    {/* 5. Clean Bottom Action */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
                      <Link
                        to={ind.ourWorkPath}
                        className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold text-[#c4f82a] transition-all hover:underline"
                      >
                        <span>View Case Study</span>
                        <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circular Right Arrow Button (Clean, Solid, No Blur/Shadow) */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next Industry"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-200 hover:bg-[#c4f82a] hover:border-[#c4f82a] cursor-pointer"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* ================= BOTTOM PAGINATION INDICATOR ================= */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {industries.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollTo(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === selectedIndex
                  ? "w-6 bg-[#c4f82a]"
                  : "w-2 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesElevate;