const Careers = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#fafafa] px-5 py-16 text-[#202020] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-[#bdbdbd] pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Careers
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Careers
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-[#555]">
            Join our team and build the future of marketing.
          </p>
        </div>
        
<div className="py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Senior Growth Strategist', location: 'New York / Hybrid', type: 'Full-time' },
              { title: 'SEO Specialist', location: 'London / Remote', type: 'Full-time' },
              { title: 'Brand Manager', location: 'Dubai / On-site', type: 'Full-time' },
              { title: 'Content Creator', location: 'Remote', type: 'Contract' }
            ].map((job, idx) => (
              <div key={idx} className="border border-[#d5d5d5] bg-white p-6 transition-colors hover:border-[#202020]">
                <span className="mb-3 inline-block font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#666]">
                  {job.type}
                </span>
                <h3 className="mb-2 font-sans text-[20px] font-medium text-[#202020]">{job.title}</h3>
                <p className="mb-6 font-sans text-[13px] text-[#555]">{job.location}</p>
                <button className="border-b border-[#202020] pb-1 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-[#202020] transition-all hover:text-[#666] hover:border-[#666]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
