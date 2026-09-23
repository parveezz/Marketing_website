const Faq = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#fafafa] px-5 py-16 text-[#202020] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-[#bdbdbd] pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Faq
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            FAQ
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-[#555]">
            Answers to common questions about our services and process.
          </p>
        </div>
        
<div className="py-16">
          <div className="mx-auto max-w-[800px]">
            {[
              { q: 'What makes your agency different?', a: 'We focus on measurable business outcomes rather than vanity metrics. Our strategies are deeply rooted in data, and we operate as an extension of your team.' },
              { q: 'How do you price your services?', a: 'Pricing is customized based on the scope and complexity of your needs. We offer project-based pricing for specific deliverables and retainer models for ongoing partnerships.' },
              { q: 'Do you work with international clients?', a: 'Yes, we have offices globally and work with clients across North America, Europe, and the Middle East.' },
              { q: 'What is the typical onboarding process?', a: 'We start with a comprehensive discovery phase, followed by an audit of your current assets. Within the first two weeks, we present a tailored 90-day execution plan.' }
            ].map((faq, idx) => (
              <div key={idx} className="border-t border-[#d5d5d5] py-6 last:border-b">
                <h3 className="font-sans text-[18px] font-medium text-[#202020]">{faq.q}</h3>
                <p className="mt-3 font-sans text-[14px] leading-6 text-[#555]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
