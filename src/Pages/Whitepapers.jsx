import SEO from "../Components/SEO";
import { motion } from "framer-motion";

const Whitepapers = () => {
  const papers = [
    {
      title: "The 2027 State of B2B Marketing",
      meta: "42 Pages • Benchmark Report",
      desc: "A comprehensive executive report analyzing emerging demand-generation trends, capital allocation benchmarks, AI attribution models, and martech adoption across 300+ high-growth enterprises.",
      takeaways: [
        "Full-funnel CAC & LTV benchmark ratios by industry",
        "Shifting from MQL volume to revenue-qualified pipeline",
        " Cookieless attribution & first-party data playbooks"
      ]
    },
    {
      title: "The Ultimate Guide to Brand Positioning",
      meta: "36 Pages • Strategic Playbook",
      desc: "Actionable architectural frameworks for defining an unmistakable category value proposition, commanding pricing power, and eliminating competitive commoditization in crowded markets.",
      takeaways: [
        "Category design & competitive moat engineering",
        "Verbal identity & executive messaging matrices",
        "Visual system scalability across digital & print"
      ]
    },
    {
      title: "Conversion Rate Optimization Handbook",
      meta: "48 Pages • Technical Guide",
      desc: "30 proven behavioral psychology principles, landing page architectures, and quantitative A/B testing protocols to double funnel velocity and reduce paid media leakage.",
      takeaways: [
        "Above-the-fold clarity & friction elimination",
        "High-intent lead capture & multi-step form psychology",
        "Post-click attribution & heatmap diagnostic workflows"
      ]
    },
    {
      title: "High-Velocity Paid Social & Creative Systems",
      meta: "38 Pages • Performance Blueprint",
      desc: "How modern performance teams engineer thumb-stopping short-form video, UGC pipelines, and algorithmic bidding structures across Meta, YouTube, and LinkedIn.",
      takeaways: [
        "72-hour creative sprint & hook-testing methodologies",
        "Scaling ad spend profitably without ROAS degradation",
        "Blending brand storytelling with direct-response CTAs"
      ]
    }
  ];

  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10 lg:py-16 overflow-hidden">
      <SEO title="Whitepapers" description="Download our marketing whitepapers." />

      <div className="mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-border pb-8"
        >
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Research &amp; Publications
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Whitepapers
          </h1>
          <p className="mt-4 w-full max-w-[680px] font-sans text-[14px] leading-6 text-text-muted">
            In-depth research, proprietary quantitative benchmarks, and tactical execution blueprints authored by our senior strategy, branding, and performance media partners.
          </p>
        </motion.div>
        
        <div className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {papers.map((paper, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between border border-border bg-surface p-7 sm:p-8 transition-colors hover:border-brand"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-11 w-11 border border-brand flex items-center justify-center font-sans text-[11px] font-bold">
                      PDF
                    </div>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                      {paper.meta}
                    </span>
                  </div>
                  <h3 className="mb-3 font-sans text-[22px] font-medium leading-tight text-text-main">
                    {paper.title}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-6 text-text-muted">
                    {paper.desc}
                  </p>
                  <div className="mt-5 border-t border-border pt-4 space-y-2">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-text-main">
                      Inside This Report:
                    </p>
                    {paper.takeaways.map((item, i) => (
                      <p key={i} className="font-sans text-[12.5px] leading-snug text-text-muted flex items-start gap-2">
                        <span className="text-brand font-bold">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href={`/${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                  download={`${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                  className="mt-7 flex w-fit cursor-pointer items-center justify-center border border-brand bg-brand px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-surface transition-all hover:bg-transparent hover:text-text-main"
                >
                  Download Free PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepapers;

