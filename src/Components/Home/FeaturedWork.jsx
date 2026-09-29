import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import projectsData from "../../data/projects.json";

const FeaturedWork = () => {
  // Pull real project items from the actual Work page data
  const projects = [
    {
      id: "isso-games",
      title: "ISSO Games Athletics",
      category: "Sports & Event Branding",
      image: "/videos/isso-games/img3.jpg",
    },
    {
      id: "investiture-ceremony",
      title: "Investiture Ceremony",
      category: "Leadership & Media",
      image: "/videos/investiture/mainimage.png",
    },
    {
      id: "hcc-mehdipatnam",
      title: "Hyderabad Chai Co.",
      category: "Launch & Promotion",
      image: "/videos/hyderabadChai/mainImage.webp",
    },
    {
      id: "aekaksh-preschool",
      title: "Aekaksh Pre School",
      category: "Education Marketing",
      image: "/videos/Aaksah/mainimage.png",
    },
    {
      id: "chess-tournament-2026",
      title: "South Zone Chess",
      category: "Tournament Coverage",
      image: "/videos/Chess/img3.jpg",
    },
    {
      id: "world-business-conclave-2026",
      title: "Business Conclave Awards",
      category: "Corporate Media",
      image: "/videos/conclave/img3.jpg",
    },
    {
      id: "pallavi-school-pocharam-2026",
      title: "Pallavi International",
      category: "Event Production",
      image: "/videos/pocharam-palavi/img3.jpg",
    },
  ];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0c0a09] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* 1. Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full">
        {/* =========================================================
            HEADER (MATCHING REFERENCE IMAGE)
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4"
        >
          {/* Big Featured Work Heading */}
          <div>
            <h2 className="font-sans text-[34px] sm:text-[44px] md:text-[52px] font-bold tracking-tight text-white uppercase leading-none">
              FEATURED WORK
            </h2>
          </div>

          {/* Right Agency Copy (Curated ZIH Narrative) */}
          <div className="max-w-md">
            <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
              A curated selection of our work across brand positioning, full-funnel acquisition, and digital experiences for high-growth partners.
            </p>
          </div>
        </motion.div>

        {/* Horizontal Divider Line */}
        <div className="w-full border-b border-white/10 mb-6 sm:mb-7" />

        {/* =========================================================
            7-COLUMN VERTICAL STRIP IMAGES (PULLED FROM WORK PAGE)
        ========================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                to={`/our-work/${project.id}`}
                className="group relative block aspect-[3/5] h-[190px] sm:h-[220px] md:h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#16141a] transition-all duration-300 hover:border-[#c4f82a] hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle Hover Overlay with Real Project Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-[#c4f82a]">
                    {project.category}
                  </span>
                  <span className="font-sans text-[12px] font-semibold text-white truncate leading-tight mt-0.5">
                    {project.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link to Full Work Page */}
        <div className="mt-6 flex items-center justify-between">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold text-[#a1a1aa] transition-colors hover:text-[#c4f82a]"
          >
            <span>Explore all case studies on our Work page</span>
            <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
