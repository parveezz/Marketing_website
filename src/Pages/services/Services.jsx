import { Link } from "react-router-dom";

const Services = () => {
  const allServices = [
    {
      title: "Strategic Marketing",
      description: "We build clear marketing strategies that connect your business goals with the right audience, positioning, channels, and opportunities for sustainable growth.",
      features: ["Market Research", "Marketing Strategy", "Audience Analysis", "Competitor Analysis", "Growth Planning"],
      path: "/services/strategic-marketing",
      image: "/images/service-planning.jpg"
    },
    {
      title: "Branding",
      description: "We create distinctive brand identities that communicate who you are, what you stand for, and why your audience should choose you.",
      features: ["Brand Strategy", "Brand Identity", "Visual Direction", "Brand Positioning", "Brand Guidelines"],
      path: "/services/branding",
      image: "/images/service-branding.jpg"
    },
    {
      title: "Advertising",
      description: "We create targeted advertising campaigns designed to put your business in front of the right people and turn attention into meaningful opportunities.",
      features: ["Campaign Strategy", "Paid Search", "Paid Social", "Campaign Management", "Performance Analysis"],
      path: "/services/advertising",
      image: "/images/service-advertising.jpg"
    },
    {
      title: "Social Media",
      description: "We build thoughtful social media strategies and content that help businesses communicate consistently, build relationships, and stay relevant to their audience.",
      features: ["Social Media Strategy", "Content Planning", "Content Creation", "Community Management", "Performance Analysis"],
      path: "/services/social-media",
      image: "/images/service-social.jpg"
    }
  ];

  return (
    <main className="w-full bg-surface-muted text-text-main">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="w-full px-5 pb-10 pt-8 sm:px-8 md:px-10 md:pb-16 md:pt-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px] border-b border-border pb-8 md:pb-12">

          <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Expertise
          </p>

          <h1 className="max-w-[1100px] font-sans text-[46px] font-medium leading-[1.02] tracking-tight sm:text-[56px] md:text-[72px] lg:text-[88px]">
            Focused capabilities
            <br />
            <span className="text-text-muted">for growing brands.</span>
          </h1>

          <div className="mt-10 w-full">
            <p className="w-full font-sans text-[14px] leading-8 text-text-muted md:text-[16px] md:leading-8">
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
          
          {allServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
            <div key={index} className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              
              {/* Text side */}
              <div className={`flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="mb-4 font-sans text-[11px] font-semibold text-brand">
                  0{index + 1}
                </p>
                <h2 className="font-sans text-[32px] font-medium uppercase leading-tight md:text-[42px]">
                  {service.title}
                </h2>
                <p className="mt-6 max-w-[500px] font-sans text-[15px] leading-8 text-text-muted">
                  {service.description}
                </p>
                
                <Link
                  to={service.path}
                  className="mt-10 flex items-center gap-3 rounded-full bg-brand px-8 py-3.5 font-sans text-[13px] font-medium text-surface grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
                >
                  Read More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              {/* Image side */}
              <div className={`w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                   <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>

            </div>
          )})}

        </div>
      </section>

      {/* =====================================================
          THE ZIH STANDARD (METHODOLOGY)
      ====================================================== */}
      <section className="w-full border-t border-border bg-surface-muted px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
             <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              Methodology
            </p>
            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              The ZIH Standard.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-text-main">Data-Informed, Not Data-Blinded</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-text-muted">While we rely heavily on analytics to guide our decisions, we never lose sight of the human element. Marketing is ultimately about connecting with people, and true connection requires intuition and creativity alongside hard data.</p>
            </div>
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-text-main">Transparent Partnership</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-text-muted">We act as an extension of your team. That means no black-box strategies, clear reporting on what's working (and what isn't), and a collaborative approach to solving your biggest growth challenges.</p>
            </div>
            <div>
              <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-text-main">Agile Execution</h3>
              <p className="mt-3 font-sans text-[15px] leading-8 text-text-muted">Markets change, and rigid plans break. We build flexibility into our strategies, allowing us to pivot quickly, capitalize on emerging opportunities, and continually optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="w-full border-t border-border px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              Next Steps
            </p>

            <h2 className="max-w-[750px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Ready to elevate your strategy?
            </h2>
          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
          >
            Start a Project
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Services;
