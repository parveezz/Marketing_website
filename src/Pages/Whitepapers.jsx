import SEO from "../Components/SEO";
const Whitepapers = () => {
  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-16 text-text-main md:px-8 lg:px-10 lg:py-24">
      <SEO title="Whitepapers" description="Download our marketing whitepapers." />

      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-border pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Whitepapers
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Whitepapers
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-text-muted">
            Comprehensive research and marketing guides.
          </p>
        </div>
        
<div className="py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: 'The 2027 State of B2B Marketing', desc: 'A comprehensive 40-page report on emerging trends, budgeting benchmarks, and technology adoption.' },
              { title: 'The Ultimate Guide to Brand Positioning', desc: 'Actionable frameworks for defining your value proposition in crowded markets.' },
              { title: 'Conversion Rate Optimization Handbook', desc: '30 proven tactics to improve landing page performance and funnel velocity.' }
            ].map((paper, idx) => (
              <div key={idx} className="flex flex-col justify-between border border-border bg-surface p-8">
                <div>
                  <div className="mb-6 h-12 w-12 border border-brand flex items-center justify-center font-sans text-[12px] font-bold">PDF</div>
                  <h3 className="mb-3 font-sans text-[22px] font-medium leading-tight text-text-main">{paper.title}</h3>
                  <p className="font-sans text-[13px] leading-6 text-text-muted">{paper.desc}</p>
                </div>
                <a href={`/${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`} download={`${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`} className="mt-8 flex w-fit cursor-pointer items-center justify-center border border-brand bg-brand px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-surface transition-all hover:bg-transparent hover:text-text-main">
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepapers;
