const ShowcaseBanner = () => {
  return (
    <section className="w-full pb-8 pt-0 overflow-hidden">
      <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[680px] overflow-hidden border-y border-white/10 bg-[#0a0a0a]">
        <img
          src="/images/homeimage-enhanced.webp"
          alt="ZIH Strategic Marketing Showcase"
          fetchPriority="high"
          decoding="async"
          width="1600"
          height="900"
          className="h-full w-full object-cover brightness-[1.12] contrast-[1.06] saturate-[1.08] filter"
        />
      </div>
    </section>
  );
};

export default ShowcaseBanner;
