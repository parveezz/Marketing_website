const Blog = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#fafafa] px-5 py-16 text-[#202020] md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-[#bdbdbd] pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Blog
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Journal
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-[#555]">
            Thoughts, insights, and strategies for growth.
          </p>
        </div>
        
<div className="py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: 'Strategy', title: 'The Fallacy of Quick Wins in B2B Marketing', date: 'Sept 20, 2026', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
              { category: 'Branding', title: 'Why Your Brand Identity is Losing You Money', date: 'Sept 15, 2026', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop' },
              { category: 'Advertising', title: 'Mastering Paid Social in a Cookie-less World', date: 'Sept 02, 2026', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop' },
              { category: 'SEO', title: 'Technical SEO Checklist for 2027', date: 'Aug 28, 2026', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop' }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden bg-[#ebebeb]">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="mb-2 inline-block font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#666]">
                  {post.category}
                </span>
                <h3 className="mb-2 font-sans text-[20px] font-medium leading-tight text-[#202020] transition-colors group-hover:text-[#555]">
                  {post.title}
                </h3>
                <p className="font-sans text-[12px] text-[#888]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
