import { motion } from "framer-motion";

const TrustedBy = () => {
  const clients = [
    "Indus International School",
    "ISSO Games Athletics",
    "Pallavi International",
    "Hyderabad Chai Company",
    "World Business Conclave",
    "Aekaksh Pre School",
    "South Zone Chess",
    "Adani Sportsline",
  ];

  // Duplicate for seamless continuous x-axis marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0a0a0a] py-5 sm:py-6 overflow-hidden">
      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* 2. Top Centered Label */}
      <div className="relative z-10 mb-4 px-4 text-center">
        <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[2.5px] text-[#71717a]">
          Trusted by Leading Institutions &amp; Modern Brands
        </p>
      </div>

      {/* 3. Infinite X-Axis Scrolling Track */}
      <div className="relative z-10 flex w-full overflow-hidden">
        {/* Left & Right Fade Masks for Smooth Infinite Feel */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-8 sm:gap-14 shrink-0 whitespace-nowrap"
        >
          {marqueeItems.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shrink-0 group cursor-default"
            >
              {/* Solid Lime Accent Dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a] opacity-80 group-hover:scale-125 transition-transform" />

              {/* Client Brand Name */}
              <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[1.5px] text-[#a1a1aa] transition-colors group-hover:text-white">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
