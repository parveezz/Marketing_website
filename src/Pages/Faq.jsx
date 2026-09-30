import SEO from "../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Faq = () => {
  const faqs = [
    {
      q: "What makes your agency different from traditional marketing firms?",
      a: "We focus on measurable commercial outcomes rather than vanity metrics. Every strategy is anchored in unit economics (CAC, LTV, MER), senior strategists lead your account directly without junior handoffs, and our creative production is integrated under one roof."
    },
    {
      q: "How do you structure pricing and engagement models?",
      a: "Pricing is tailored to the scope, channel complexity, and velocity of your goals. We offer fixed-scope project sprints (such as Brand Identity Systems or Go-To-Market Blueprints) as well as ongoing monthly growth retainers for full-funnel paid media and content execution."
    },
    {
      q: "Do you work with both B2B enterprises and consumer brands?",
      a: "Yes. Our portfolio spans B2B SaaS, educational institutions, healthcare, hospitality, retail, and large-scale corporate conclaves across India, North America, Europe, and the Middle East."
    },
    {
      q: "What does the typical onboarding process look like?",
      a: "We begin with a 14-day diagnostic phase: auditing your historical ad accounts, analytics tracking, brand positioning, and competitor landscape. At the end of week two, we deliver a 90-day execution roadmap with clear KPI milestones before launching campaigns."
    },
    {
      q: "Can we engage ZIH for a single service like Branding or Event Coverage?",
      a: "Absolutely. While many clients partner with us as an integrated growth department, you can commission specialized standalone engagements such as brand architecture, high-stakes event media coverage, or paid acquisition audits."
    },
    {
      q: "How quickly can we expect to see measurable results?",
      a: "Paid acquisition and conversion rate optimization (CRO) sprints typically generate measurable lift within the first 30 to 45 days of testing. Brand repositioning, organic social authority, and content ecosystems compound progressively over a 90-to-180 day horizon."
    },
    {
      q: "How do you handle reporting and performance transparency?",
      a: "Every partner receives access to a live, real-time attribution dashboard tracking spend, pipeline velocity, conversion rates, and blended ROAS—supplemented by bi-weekly executive strategy reviews."
    },
    {
      q: "Can you collaborate alongside our internal marketing or sales team?",
      a: "Yes. We frequently operate as a specialized force-multiplier for in-house teams—handling heavy-lifting creative production, media buying, or strategic architecture while aligning directly with your internal RevOps and sales leadership."
    }
  ];

  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10 lg:py-16 overflow-hidden">
      <SEO title="FAQ" description="Frequently asked questions." />

      <div className="mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-border pb-8"
        >
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Knowledge Base
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 w-full max-w-[650px] font-sans text-[14px] leading-6 text-text-muted">
            Clear answers regarding our strategic methodology, onboarding timelines, pricing structures, attribution reporting, and cross-functional team collaboration.
          </p>
        </motion.div>

        <div className="py-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="border border-border bg-surface p-6 sm:p-7">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-brand">
                Direct Advisory
              </p>
              <h2 className="mt-2 font-sans text-[22px] font-medium leading-snug text-text-main">
                Have a specific question about your growth roadmap?
              </h2>
              <p className="mt-3 font-sans text-[13px] leading-6 text-text-muted">
                Schedule a confidential discovery call with our senior strategy partners to review your current funnel, media efficiency, and custom scope requirements.
              </p>
              <div className="mt-5 border-t border-border pt-4 space-y-2 text-[12px] text-text-muted">
                <p>• Mutual NDA available prior to account audits</p>
                <p>• Custom scope &amp; proposal delivered in 48 hours</p>
                <p>• Direct access to senior strategy leadership</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-block border border-brand bg-brand px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-surface transition-all hover:bg-transparent hover:text-text-main"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-border py-5 first:border-t-0 sm:first:border-t last:border-b"
              >
                <h3 className="font-sans text-[17px] sm:text-[18px] font-medium text-text-main">
                  {faq.q}
                </h3>
                <p className="mt-2.5 font-sans text-[13.5px] sm:text-[14px] leading-6 text-text-muted">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

