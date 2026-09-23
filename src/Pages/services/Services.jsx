import { Link } from "react-router-dom";

const Services = () => {
  const allServices = [
    {
      title: "Strategic Marketing",
      description: "We build clear marketing strategies that connect your business goals with the right audience, positioning, channels, and opportunities for sustainable growth.",
      features: ["Market Research", "Marketing Strategy", "Audience Analysis", "Competitor Analysis", "Growth Planning"],
      path: "/services/strategic-marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Branding",
      description: "We create distinctive brand identities that communicate who you are, what you stand for, and why your audience should choose you.",
      features: ["Brand Strategy", "Brand Identity", "Visual Direction", "Brand Positioning", "Brand Guidelines"],
      path: "/services/branding",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Advertising",
      description: "We create targeted advertising campaigns designed to put your business in front of the right people and turn attention into meaningful opportunities.",
      features: ["Campaign Strategy", "Paid Search", "Paid Social", "Campaign Management", "Performance Analysis"],
      path: "/services/advertising",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Social Media",
      description: "We build thoughtful social media strategies and content that help businesses communicate consistently, build relationships, and stay relevant to their audience.",
      features: ["Social Media Strategy", "Content Planning", "Content Creation", "Community Management", "Performance Analysis"],
      path: "/services/social-media",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="w-full bg-[#fafafa] text-[#202020]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="w-full px-5 pb-10 pt-8 sm:px-8 md:px-10 md:pb-16 md:pt-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px] border-b border-[#bdbdbd] pb-8 md:pb-12">

          <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Expertise
          </p>

          <h1 className="max-w-[1100px] font-sans text-[46px] font-medium leading-[1.02] tracking-tight sm:text-[56px] md:text-[72px] lg:text-[88px]">
            Focused capabilities
            <br />
            <span className="text-[#666]">for growing brands.</span>
          </h1>

          <div className="mt-10 grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">

            <div />

            <p className="max-w-[650px] font-sans text-[14px] leading-8 text-[#555] md:text-[16px] md:leading-8">
              We don't try to do everything. We focus on the core pillars of growth: clear strategy, distinctive branding, effective advertising, and meaningful social presence. Our services are designed to work individually or integrate into a powerful, cohesive engine.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES LISTING
      ====================================================== */}
      <section className="w-full px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-20 md:gap-32">
          
          {allServices.map((service, index) => (
            <div key={index} className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
              
              <div className="flex flex-col justify-between">
                <div>
                  <p className="mb-4 font-sans text-[11px] text-[#777]">
                    0{index + 1}
                  </p>
                  <h2 className="font-sans text-[26px] font-medium leading-tight md:text-[40px]">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-[500px] font-sans text-[15px] leading-8 text-[#555]">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  to={service.path}
                  className="mt-10 w-fit border-b border-[#202020] pb-1 font-sans text-[13px] font-semibold text-[#202020] transition-colors hover:text-[#666]"
                >
                  Explore {service.title} →
                </Link>
              </div>

              <div className="border-l border-[#bdbdbd] pl-8 lg:pl-16">
                <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                  Deliverables
                </p>
                <ul className="mb-12 flex flex-col gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 font-sans text-[16px] text-[#202020]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#202020]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#ebebeb]">
                   <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          THE ZIH STANDARD (METHODOLOGY)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] bg-[#f0f0f0] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
             <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Methodology
            </p>
            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              The ZIH Standard.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-[#202020]">Data-Informed, Not Data-Blinded</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-[#555]">While we rely heavily on analytics to guide our decisions, we never lose sight of the human element. Marketing is ultimately about connecting with people, and true connection requires intuition and creativity alongside hard data.</p>
            </div>
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-[#202020]">Transparent Partnership</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-[#555]">We act as an extension of your team. That means no black-box strategies, clear reporting on what's working (and what isn't), and a collaborative approach to solving your biggest growth challenges.</p>
            </div>
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-[#202020]">Agile Execution</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-[#555]">Markets change, and rigid plans break. We build flexibility into our strategies, allowing us to pivot quickly, capitalize on emerging opportunities, and continually optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Next Steps
            </p>

            <h2 className="max-w-[750px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Ready to elevate your strategy?
            </h2>
          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 border border-[#202020] bg-[#202020] px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
          >
            Start a Project
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Services;
