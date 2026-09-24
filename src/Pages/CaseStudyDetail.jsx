import { useParams, Link } from "react-router-dom";
import { studies } from "./CaseStudies";
import SEO from "../Components/SEO";
import { FiArrowLeft } from "react-icons/fi";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = studies.find((s) => s.id === id);

  if (!study) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-surface-muted text-text-main">
        <h1 className="mb-4 font-sans text-4xl font-semibold">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-brand hover:underline">
          Return to Case Studies
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-8 text-text-main md:px-8 lg:px-10 lg:py-12">
      <SEO title={`${study.client} Case Study`} description={study.desc} />

      <div className="mx-auto w-full max-w-[1100px]">
        {/* Back Link */}
        <Link to="/case-studies" className="group mb-8 inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[1px] text-text-muted transition-colors hover:text-text-main">
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="border-b border-border pb-8">
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-brand">
            {study.client}
          </p>
          <h1 className="font-sans text-[32px] font-medium leading-tight tracking-[-1px] sm:text-[42px] md:text-[50px]">
            {study.result}
          </h1>
          <p className="mt-4 w-full max-w-[600px] font-sans text-[15px] leading-relaxed text-[#ccc]">
            {study.desc}
          </p>
        </div>

        {/* Stats Bar */}
        {study.stats && (
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-border py-6 sm:grid-cols-3">
            {study.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-left">
                <p className="font-sans text-[32px] font-medium text-brand lg:text-[40px]">{stat.value}</p>
                <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Image */}
        <div className="mb-10 aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-surface">
          <img src={study.image} alt={study.client} className="h-full w-full object-cover" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[900px]">
          
          <div className="mb-8">
            <h2 className="mb-3 font-sans text-[20px] font-medium text-text-main">
              The Challenge
            </h2>
            <p className="font-sans text-[15px] leading-8 text-[#ccc]">
              {study.challenge}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-3 font-sans text-[20px] font-medium text-text-main">
              Our Strategy
            </h2>
            <p className="font-sans text-[15px] leading-8 text-[#ccc]">
              {study.strategy}
            </p>
          </div>

          {study.testimonial && (
            <blockquote className="my-10 border-l-2 border-brand bg-surface py-6 pl-6 pr-4 italic text-text-main">
              <p className="font-sans text-[16px] leading-relaxed md:text-[20px]">
                "{study.testimonial}"
              </p>
              <footer className="mt-4 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-text-muted">
                — {study.client}
              </footer>
            </blockquote>
          )}

          <div className="mb-10">
            <h2 className="mb-3 font-sans text-[20px] font-medium text-brand">
              The Impact
            </h2>
            <p className="font-sans text-[15px] leading-8 text-text-main">
              {study.impact}
            </p>
          </div>

          {study.services && (
            <div className="mt-16 border-t border-border pt-10">
              <h3 className="mb-5 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-text-muted">
                Services Provided
              </h3>
              <div className="flex flex-wrap gap-3">
                {study.services.map((service, idx) => (
                  <span key={idx} className="rounded-full border border-border bg-surface px-4 py-2 font-sans text-[11px] font-medium text-[#ccc]">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
