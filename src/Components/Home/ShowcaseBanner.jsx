import { motion } from "framer-motion";

const ShowcaseBanner = () => {
  return (
    <section className="w-full pb-8 pt-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[680px] overflow-hidden border-y border-white/10 bg-[#0a0a0a]"
      >
        <img
          src="/images/homeimage-enhanced.webp"
          alt="ZIH Strategic Marketing Showcase"
          className="h-full w-full object-cover brightness-[1.12] contrast-[1.06] saturate-[1.08] filter"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default ShowcaseBanner;
