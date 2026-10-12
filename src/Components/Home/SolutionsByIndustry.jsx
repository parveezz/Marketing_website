import { Link } from "react-router-dom";
import { FiArrowUpRight, FiBookOpen, FiHome, FiCompass, FiAward, FiCoffee } from "react-icons/fi";

const sectors = [
  {
    title: "Education & Academies",
    slug: "education",
    metric: "+38% Admissions",
    description: "Enrollment pipelines, campus spectacles, annual days & institutional brand prestige.",
    icon: FiBookOpen,
    accent: "#c4f82a",
  },
  {
    title: "Real Estate & Housing",
    slug: "real-estate",
    metric: "3.2x Walk-ins",
    description: "Project launches, 3D experiential collateral, local footfall drivers & HNI lead acquisition.",
    icon: FiHome,
    accent: "#38bdf8",
  },
  {
    title: "Automotive & Dealerships",
    slug: "automobiles",
    metric: "4.1x Test Drives",
    description: "Showroom launches, experiential test-drive campaigns & dealer-network digital engines.",
    icon: FiCompass,
    accent: "#f59e0b",
  },
  {
    title: "Sports & Live Events",
    slug: "sports",
    metric: "50k+ Attendees",
    description: "Stadium sports production, multi-camera broadcasting, live media drops & fan engagement.",
    icon: FiAward,
    accent: "#ec4899",
  },
];

const SolutionsByIndustry = () => {
  return (
    <section className="relative w-full border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 md:py-16 overflow-hidden bg-[#0c0a09]">
      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Domain Competence • Solutions by Industry
              </span>
            </div>
            <h2 className="font-sans text-[26px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-tight">
              Tailored Strategy for Specialized Sectors
            </h2>
          </div>

          <p className="font-sans text-[13px] sm:text-[14px] text-[#a1a1aa] max-w-md">
            Generic marketing falls flat. We engineer sector-specific playbooks tailored to your industry's exact buyer psychology and regulatory landscape.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.slug}
                to={`/industries/${sector.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141215]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[#18161a] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors group-hover:border-[#c4f82a] group-hover:text-[#c4f82a]">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-wide rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white group-hover:border-[#c4f82a]/40 group-hover:text-[#c4f82a]">
                      {sector.metric}
                    </span>
                  </div>

                  <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-white transition-colors group-hover:text-[#c4f82a] leading-snug">
                    {sector.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-[#a1a1aa]">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-white/5 font-sans text-[12.5px] font-semibold text-white group-hover:text-[#c4f82a] transition-colors">
                  <span>Explore Sector Practice</span>
                  <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsByIndustry;
