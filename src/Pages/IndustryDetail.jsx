import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../Components/SEO";
import HomeCTA from "../Components/Home/HomeCTA";
import Testimonials from "../Components/Home/Testimonials";
import industriesData from "../data/industries.json";

const IndustryDetail = () => {
  const { slug } = useParams();

  // Normalize slug to handle aliases (e.g. food-hospitality -> food)
  const normalizedSlug = slug ? slug.toLowerCase().replace("-hospitality", "") : "";
  const industry = industriesData.find(
    (item) => item.slug === normalizedSlug || item.id === normalizedSlug
  );

  if (!industry) {
    return (
      <main className="relative min-h-[70vh] w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20">
        <SEO title="Industry Not Found | ZIH" description="Industry practice area not found." />
        <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-[#c4f82a] mb-2">
          404 • Not Found
        </span>
        <h1 className="font-sans text-3xl sm:text-4xl font-semibold mb-4 text-white">
          Industry Practice Not Found
        </h1>
        <p className="font-sans text-[14px] text-[#a1a1aa] mb-6 max-w-md text-center">
          The industry practice you are searching for might have been updated or moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-2.5 font-sans text-sm font-semibold text-black hover:bg-[#b0f516] transition-all"
        >
          <FiArrowLeft className="text-base" />
          <span>Return Home</span>
        </Link>
      </main>
    );
  }

  // Get other industries for footer navigation
  const otherIndustries = industriesData.filter((i) => i.id !== industry.id);

  return (
    <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <SEO
        title={`${industry.title} | ZIH Marketing Consultancy`}
        description={industry.heroDescription}
      />

      {/* Background Vertical Grid Guide Lines */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14 md:py-18 bg-[#0c0a09]">
        <div className="mx-auto w-full max-w-full">
          {/* Breadcrumb / Back */}
          <div className="mb-6">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-medium text-[#a1a1aa] hover:text-[#c4f82a] transition-colors"
            >
              <FiArrowLeft className="text-sm" />
              <span>Back to About &amp; Industries</span>
            </Link>
          </div>

          <div className="max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
              <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                Industry Practice • {industry.badge}
              </span>
            </div>

            <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[50px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-3">
              {industry.title}
            </h1>

            <p className="font-sans text-[16px] sm:text-[18px] font-medium text-[#c4f82a] mb-4">
              {industry.tagline}
            </p>

            <p className="font-sans text-[14px] sm:text-[15.5px] leading-relaxed text-[#a1a1aa] max-w-3xl mb-8">
              {industry.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
              >
                <span>Consult Our Industry Specialists</span>
                <FiArrowUpRight className="text-base" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-sans text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                <span>View Real Portfolio Work</span>
                <FiArrowUpRight className="text-sm text-[#a1a1aa]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. PERFORMANCE BENCHMARKS (3 KEY METRICS)
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-8 bg-[#0e0d10]">
        <div className="mx-auto grid w-full max-w-full grid-cols-1 sm:grid-cols-3 gap-6">
          {industry.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/10 pl-5 first:border-l-0 sm:first:border-l sm:pl-6">
              <span className="font-sans text-[30px] sm:text-[36px] font-bold text-[#c4f82a] leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-[12.5px] font-medium text-[#a1a1aa]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          3. STRATEGIC OVERVIEW & CLIENT PORTFOLIO
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 bg-[#0a0a0a]">
        <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Strategic Context & Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                  Strategic Approach
                </span>
              </div>
              <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight leading-snug">
                Engineered for the unique dynamics of {industry.title}.
              </h2>
              <p className="mt-4 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa]">
                {industry.overview}
              </p>

              {/* Tangible Deliverables Checklist */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4.5">
                <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                  Industry Deliverables Architecture:
                </p>
                <div className="space-y-2">
                  {industry.keyDeliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c4f82a]/15 text-[#c4f82a]">
                        <FiCheck className="text-[10px]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-5">
              <p className="font-sans text-[13px] italic text-[#d4d4d8] leading-relaxed">
                &ldquo;{industry.quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                  Syed Zubair Hafeez • Industry Philosophy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Tailored Solutions */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white mb-1">
              Core Capabilities Deployed:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.solutions.map((sol, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-xl border border-white/10 bg-[#141215]/80 p-5 backdrop-blur-md hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-[11px] font-bold text-[#c4f82a]">
                      0{sIdx + 1} • Practice
                    </span>
                  </div>
                  <h4 className="font-sans text-[15.5px] font-semibold text-white mb-2 leading-snug">
                    {sol.title}
                  </h4>
                  <p className="font-sans text-[12.5px] sm:text-[13px] leading-relaxed text-[#a1a1aa]">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Real Client Case Projects */}
            {industry.clientProjects && industry.clientProjects.length > 0 && (
              <div className="mt-4 rounded-xl border border-white/10 bg-[#141215]/50 p-5">
                <p className="font-sans text-[11.5px] font-semibold uppercase tracking-wider text-[#c4f82a] mb-3">
                  Representative Engagements in {industry.title}:
                </p>
                <div className="space-y-3">
                  {industry.clientProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">
                      <span className="font-sans text-[13px] font-bold text-white shrink-0">
                        {proj.name}
                      </span>
                      <span className="font-sans text-[12px] text-[#a1a1aa]">
                        {proj.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. EXPLORE OTHER INDUSTRY PRACTICES
      ====================================================== */}
      <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 bg-[#0c0a09]">
        <div className="mx-auto w-full max-w-full">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#a1a1aa] mb-4">
            Explore Other Industries We Serve:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherIndustries.map((other) => (
              <Link
                key={other.id}
                to={`/industries/${other.slug}`}
                className="group flex flex-col rounded-xl bg-[#141215]/90 p-4 transition-all duration-200 hover:bg-[#1c1822]"
              >
                <span className="font-sans text-[13px] font-semibold text-white transition-colors">
                  {other.title}
                </span>
                <span className="mt-1 font-sans text-[11px] text-[#a1a1aa] group-hover:text-white transition-colors">
                  View Practice &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Home CTA */}
      <HomeCTA />
    </main>
  );
};

export default IndustryDetail;
