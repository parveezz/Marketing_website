import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      number: "01",
      title: "Strategic Marketing",
      description:
        "Clear marketing strategies built around your business, audience, and growth objectives.",
      path: "/services/strategic-marketing",
    },
    {
      number: "02",
      title: "Branding",
      description:
        "Distinctive brand identities that create recognition, trust, and consistency.",
      path: "/services/branding",
    },
    {
      number: "03",
      title: "Advertising",
      description:
        "Targeted campaigns designed to reach the right audience and create meaningful opportunities.",
      path: "/services/advertising",
    },
    {
      number: "04",
      title: "Social Media",
      description:
        "Thoughtful social strategies and content that keep your brand connected to its audience.",
      path: "/services/social-media",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, audience, market, and the challenges standing between you and your goals.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "We turn those insights into a focused marketing direction designed around what matters most.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We bring the strategy to life through branding, campaigns, content, and purposeful marketing.",
    },
    {
      number: "04",
      title: "Evolve",
      description:
        "We measure, learn, and refine the work to create stronger results over time.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Ad Spend Managed", value: "$50M+" },
    { label: "Brands Scaled", value: "200+" },
    { label: "Global Markets", value: "15+" },
  ];

  const testimonials = [
    {
      quote: "ZIH didn't just give us a marketing plan. They gave us clarity. Our brand positioning is finally aligned with our ambition, and the results speak for themselves.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions"
    },
    {
      quote: "The advertising strategy they implemented reduced our acquisition costs by 40% in the first quarter while scaling our reach. Highly recommended.",
      author: "Michael Chang",
      role: "Founder, Elevate Retail"
    }
  ];

  const caseStudies = [
    {
      title: "Rebranding a Legacy Financial Institution",
      category: "Branding & Strategy",
      description: "How we helped a 50-year-old firm attract a younger demographic while maintaining trust with their core audience."
    },
    {
      title: "Scaling E-commerce Sales by 300%",
      category: "Advertising",
      description: "A data-driven paid search and social campaign that dominated Q4 market share."
    }
  ];

  return (
    <main className="w-full bg-[#fafafa] text-[#202020]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="w-full px-5 pb-16 pt-10 sm:px-8 md:px-10 md:pb-24 md:pt-16 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px]">

          <div className="grid min-h-[calc(100vh-120px)] w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">

            {/* Hero Heading */}
            <div>

              <p className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[4px] text-[#666]">
                ZIH Marketing Consultancy
              </p>

              <h1 className="font-sans text-[52px] font-medium leading-[0.98] tracking-tight sm:text-[64px] md:text-[82px] lg:text-[100px] xl:text-[112px]">
                Marketing
                <br />
                <span className="text-[#666]">
                  with purpose.
                </span>
              </h1>

              <p className="mt-9 max-w-[620px] font-sans text-[14px] leading-8 text-[#555] md:text-[16px]">
                We help businesses build meaningful brands, reach the right
                audiences, and create marketing strategies designed for
                sustainable growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="border border-[#202020] bg-[#202020] px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
                >
                  Start a Conversation
                </Link>

                <Link
                  to="/services"
                  className="border border-[#bdbdbd] px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#202020] transition-all duration-300 hover:border-[#202020]"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* Hero Side */}
            <div className="hidden h-full items-end justify-end lg:flex">

              <div className="w-[260px] border-l border-[#bdbdbd] pl-7">

                <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-[#666]">
                  Our Philosophy
                </p>

                <p className="mt-5 font-sans text-[18px] leading-8">
                  Good marketing isn't about saying more.
                  <br />
                  It's about saying what matters.
                </p>

              </div>

            </div>

          </div>
          
          {/* Hero Image */}
          <div className="mt-16 aspect-[21/9] w-full overflow-hidden bg-[#ebebeb]">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Marketing with purpose" className="h-full w-full object-cover" />
          </div>

        </div>
      </section>

      {/* =====================================================
          TRUSTED BY (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] bg-[#fdfdfd] px-5 py-8 md:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-6 md:flex-row md:justify-between lg:gap-12">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#888] text-center md:w-auto md:text-left">
            Trusted by modern teams
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-8 md:w-auto md:gap-12 lg:gap-16">
            <span className="font-sans text-[20px] font-bold tracking-widest text-[#bbb] transition-colors hover:text-[#888] cursor-pointer">ACME</span>
            <span className="font-sans text-[22px] font-black tracking-tight text-[#bbb] transition-colors hover:text-[#888] cursor-pointer">Globex.</span>
            <span className="font-sans text-[18px] font-medium tracking-[3px] text-[#bbb] transition-colors hover:text-[#888] cursor-pointer">SOYUZ</span>
            <span className="font-sans text-[24px] font-light tracking-wide text-[#bbb] transition-colors hover:text-[#888] cursor-pointer">initech</span>
            <span className="font-sans text-[20px] font-extrabold italic tracking-tighter text-[#bbb] transition-colors hover:text-[#888] cursor-pointer">MASSIVE</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] bg-[#f0f0f0] px-5 py-12 md:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center md:items-start">
              <h3 className="font-sans text-[32px] font-medium text-[#202020] md:text-[42px]">{stat.value}</h3>
              <p className="mt-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-[#666]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              What We Believe
            </p>

            <h2 className="max-w-[650px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Clarity creates better marketing.
            </h2>

          </div>

          <div className="space-y-6">

            <p className="font-sans text-[15px] leading-8 text-[#555] md:text-[16px]">
              The best marketing doesn't begin with a campaign. It begins
              with understanding your business, your audience, and what
              makes you different.
            </p>

            <p className="font-sans text-[15px] leading-8 text-[#555] md:text-[16px]">
              ZIH brings strategy and creativity together to create
              marketing that feels intentional, communicates clearly, and
              supports real business objectives.
            </p>

            <Link
              to="/about"
              className="inline-block border-b border-[#202020] pb-1 font-sans text-[13px] font-semibold text-[#202020]"
            >
              More about ZIH
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 md:px-8 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 lg:grid-cols-2">

          {/* Left */}
          <div className="py-8 lg:border-r lg:border-[#bdbdbd] lg:py-20 lg:pr-20">

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              What We Do
            </p>

            <h2 className="max-w-[550px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Everything starts with a clear direction.
            </h2>

            <p className="mt-7 max-w-[500px] font-sans text-[15px] leading-8 text-[#555]">
              From strategy to execution, we create focused marketing
              solutions around what your business actually needs.
            </p>

          </div>

          {/* Right */}
          <div>

            {services.map((service) => (
              <Link
                key={service.number}
                to={service.path}
                className="group block border-b border-[#bdbdbd] py-6 transition-colors duration-300 hover:bg-[#f3f3f3] lg:pl-16 lg:pr-5"
              >

                <div className="flex items-start justify-between gap-6">

                  <div>

                    <p className="mb-3 font-sans text-[11px] text-[#777]">
                      {service.number}
                    </p>

                    <h3 className="font-sans text-[20px] font-medium md:text-[24px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[500px] font-sans text-[14px] leading-7 text-[#666]">
                      {service.description}
                    </p>

                  </div>

                  <span className="mt-1 font-sans text-[18px] md:text-[20px] text-[#777] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CASE STUDIES (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px]">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                Featured Work
              </p>
              <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
                Proven Impact.
              </h2>
            </div>
            <Link to="/services" className="border-b border-[#202020] pb-1 font-sans text-[13px] font-semibold text-[#202020] transition-colors hover:text-[#666]">
              View all capabilities
            </Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <div key={i} className="group cursor-pointer border border-[#bdbdbd] bg-white p-8 transition-all hover:border-[#202020]">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#666]">{study.category}</p>
                <h3 className="mt-4 font-sans text-[20px] font-medium leading-tight text-[#202020] md:text-[24px]">{study.title}</h3>
                <p className="mt-4 font-sans text-[14px] leading-7 text-[#555]">{study.description}</p>
                <div className="mt-8 flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-[#202020] transition-transform group-hover:translate-x-2">
                  Read Study <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ====================================================== */}
      <section className="w-full px-5 py-8 sm:px-8 md:px-10 md:py-20 lg:px-10">

        <div className="mx-auto w-full max-w-[1250px]">

          <p className="mb-8 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            Our Perspective
          </p>

          <h2 className="max-w-[1200px] font-sans text-[32px] font-medium leading-[1.08] tracking-tight md:text-[48px] lg:text-[60px]">
            Your brand is more than what you sell.
            <span className="text-[#777]">
              {" "}
              It's how people remember you.
            </span>
          </h2>

        </div>

      </section>

      {/* =====================================================
          TESTIMONIALS (NEW)
      ====================================================== */}
      <section className="w-full border-y border-[#bdbdbd] bg-[#fdfdfd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
             <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Client Voices
            </p>
            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Trusted by ambitious leaders.
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            {testimonials.map((test, index) => (
              <div key={index} className="border-l border-[#202020] pl-6 md:pl-10">
                <p className="font-sans text-[18px] leading-8 text-[#202020] md:text-[18px] md:text-[20px] md:leading-10">
                  "{test.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-sans text-[14px] font-bold text-[#202020]">{test.author}</p>
                  <p className="font-sans text-[12px] text-[#666]">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto mb-12 grid w-full max-w-[1250px] grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              How We Work
            </p>

            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              A simple process.
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-[600px] font-sans text-[15px] leading-8 text-[#555]">
              We keep the process focused and collaborative, moving from
              understanding to strategy and from strategy to meaningful
              execution.
            </p>

          </div>

        </div>

        <div className="mx-auto max-w-[1250px] border-t border-[#bdbdbd]">

          {process.map((item) => (
            <div
              key={item.number}
              className="grid w-full grid-cols-1 gap-5 border-b border-[#bdbdbd] py-6 md:grid-cols-[100px_1fr_1.5fr] md:items-start md:gap-10"
            >

              <span className="font-sans text-[11px] text-[#777]">
                {item.number}
              </span>

              <h3 className="font-sans text-[24px] font-medium">
                {item.title}
              </h3>

              <p className="max-w-[600px] font-sans text-[14px] leading-7 text-[#666]">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Start Something Meaningful
            </p>

            <h2 className="max-w-[800px] font-sans text-[40px] font-medium leading-tight md:text-[60px]">
              Let's build something worth remembering.
            </h2>

          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 border border-[#202020] bg-[#202020] px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
          >
            Let's Talk
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;