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
              { client: 'Fintech Innovators', result: '+210% User Acquisition', desc: 'How we helped a leading fintech startup scale their user base while reducing CAC by 40%.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
              { client: 'EcoRetail', result: '3x ROAS in 90 Days', desc: 'A complete overhaul of paid media strategy for a sustainable fashion brand.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
              { client: 'SaaS Platform X', result: '150% Increase in SQLs', desc: 'Aligning sales and marketing to drive high-quality enterprise leads.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop' },
              { client: 'Local Services Co', result: '#1 Local Search Ranking', desc: 'Dominating local SEO and driving organic inbound phone calls.', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop' }
            ].map((study, idx) => (
              <div key={idx} className="group overflow-hidden border border-[#d5d5d5] bg-white transition-all hover:border-[#202020]">
                {/* Image */}
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#d5d5d5] bg-[#ebebeb]">
                   <img src={study.image} alt={study.client} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className="p-8 sm:p-10">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
