const CaseStudies = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#fafafa] px-5 py-16 text-[#202020] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-[#bdbdbd] pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            CaseStudies
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Case Studies
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-[#555]">
            Deep dives into the results we've delivered.
          </p>
        </div>
        
<div className="py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {[
              { client: 'Fintech Innovators', result: '+210% User Acquisition', desc: 'How we helped a leading fintech startup scale their user base while reducing CAC by 40%.' },
              { client: 'EcoRetail', result: '3x ROAS in 90 Days', desc: 'A complete overhaul of paid media strategy for a sustainable fashion brand.' },
              { client: 'SaaS Platform X', result: '150% Increase in SQLs', desc: 'Aligning sales and marketing to drive high-quality enterprise leads.' },
              { client: 'Local Services Co', result: '#1 Local Search Ranking', desc: 'Dominating local SEO and driving organic inbound phone calls.' }
            ].map((study, idx) => (
              <div key={idx} className="border border-[#d5d5d5] bg-white p-8 sm:p-10">
                <span className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[1px] text-[#666]">
                  {study.client}
                </span>
                <h3 className="mb-4 font-sans text-[32px] font-medium leading-tight text-[#202020]">
                  {study.result}
                </h3>
                <p className="mb-8 font-sans text-[14px] leading-6 text-[#555]">
                  {study.desc}
                </p>
                <button className="border-b border-[#202020] pb-1 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-[#202020] transition-all hover:text-[#666] hover:border-[#666]">
                  View Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
