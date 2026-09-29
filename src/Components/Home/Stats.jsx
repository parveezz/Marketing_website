import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Ad Spend Managed", value: "$50M+" },
    { label: "Brands Scaled", value: "200+" },
    { label: "Global Markets", value: "15+" },
  ];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0a0a0a] px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 overflow-hidden">
      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-2 sm:grid-cols-4 items-center justify-center gap-6 sm:gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white tracking-tight leading-none">
              {stat.value}
            </h3>
            <p className="mt-1.5 font-sans text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[1.5px] text-[#71717a]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
