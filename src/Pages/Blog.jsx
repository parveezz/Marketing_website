const Blog = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#fafafa] px-5 py-16 text-[#202020] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-[#bdbdbd] pb-12">
          <p className="mb-4 font-serif text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Blog
          </p>
          <h1 className="font-serif text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Journal
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-serif text-[14px] leading-6 text-[#555]">
            Thoughts, insights, and strategies for growth.
          </p>
        </div>
        
<div className="py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: 'Strategy', title: 'The Fallacy of Quick Wins in B2B Marketing', date: 'Sept 20, 2026' },
              { category: 'Branding', title: 'Why Your Brand Identity is Losing You Money', date: 'Sept 15, 2026' },
              { category: 'Advertising', title: 'Mastering Paid Social in a Cookie-less World', date: 'Sept 02, 2026' },
              { category: 'SEO', title: 'Technical SEO Checklist for 2027', date: 'Aug 28, 2026' }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="mb-4 aspect-[4/3] w-full bg-[#ebebeb] transition-all duration-500 group-hover:bg-[#d5d5d5]" />
                <span className="mb-2 inline-block font-serif text-[10px] font-semibold uppercase tracking-[2px] text-[#666]">
                  {post.category}
                </span>
                <h3 className="mb-2 font-serif text-[20px] font-medium leading-tight text-[#202020] transition-colors group-hover:text-[#555]">
                  {post.title}
                </h3>
                <p className="font-serif text-[12px] text-[#888]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
