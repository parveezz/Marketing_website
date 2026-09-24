import SEO from "../Components/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
    <main className="relative w-full bg-[#030712] text-white overflow-hidden">
      <SEO title="Home" description="World-class marketing strategies for ambitious brands." />

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none animate-orb"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none animate-orb" style={{ animationDelay: '5s' }}></div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="w-full pb-16 pt-10 md:pb-24 md:pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1250px] px-5 sm:px-8 md:px-10 lg:px-10"
        >

          <div className="grid min-h-[calc(100vh-120px)] w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">

            {/* Hero Heading */}
            <div>

              <p className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[4px] text-text-muted">
                ZIH Marketing Consultancy
              </p>

              <h1 className="font-sans text-[52px] font-medium leading-[0.98] tracking-tight sm:text-[64px] md:text-[82px] lg:text-[100px] xl:text-[112px]">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Marketing</span>
                <br />
                <span className="text-white">
                  with purpose.
                </span>
              </h1>

              <p className="mt-9 max-w-[620px] font-sans text-[14px] leading-8 text-text-muted md:text-[16px]">
                We help businesses build meaningful brands, reach the right
                audiences, and create marketing strategies designed for
                sustainable growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-white shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                >
                  Start a Conversation
                </Link>

                <Link
                  to="/services"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* Hero Side */}
            <div className="hidden h-full items-end justify-end lg:flex">

              <div className="w-[260px] border-l border-border pl-7">

                <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-text-muted">
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 aspect-[4/3] md:aspect-[21/9] w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden bg-surface-muted shadow-[0_0_50px_rgba(139,92,246,0.1)]"
          >
             <img src="/images/homeimage.avif" alt="Marketing with purpose" className="h-full w-full object-cover" />
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          TRUSTED BY (NEW)
      ====================================================== */}
      <section className="w-full border-t border-white/10 bg-[#030712] px-5 py-8 md:px-8 lg:px-10 lg:py-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-6 md:flex-row md:justify-between lg:gap-12 relative z-10"
        >
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
        </motion.div>
      </section>

      {/* =====================================================
          STATS (NEW)
      ====================================================== */}
      <section className="w-full border-t border-white/10 bg-[#030712] px-5 py-12 md:px-8 lg:px-10 relative overflow-hidden">
        {/* Subtle mesh for stats */}
        <div className="absolute top-0 right-[20%] w-[30%] h-[100%] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none"></div>
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 md:flex-row md:items-center md:justify-between relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="flex flex-col items-center justify-center md:items-start"
            >
              <h3 className="font-sans text-[32px] font-medium text-text-main md:text-[42px]">{stat.value}</h3>
              <p className="mt-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="w-full border-t border-border px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              What We Believe
            </p>

            <h2 className="max-w-[650px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Clarity creates better marketing.
            </h2>

          </div>

          <div className="space-y-6">

            <p className="font-sans text-[15px] leading-8 text-text-muted md:text-[16px]">
              The best marketing doesn't begin with a campaign. It begins
              with understanding your business, your audience, and what
              makes you different.
            </p>

            <p className="font-sans text-[15px] leading-8 text-text-muted md:text-[16px]">
              ZIH brings strategy and creativity together to create
              marketing that feels intentional, communicates clearly, and
              supports real business objectives.
            </p>

            <Link
              to="/about"
              className="inline-block border-b border-brand pb-1 font-sans text-[13px] font-semibold text-text-main"
            >
              More about ZIH
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="w-full border-t border-border px-5 md:px-8 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 lg:grid-cols-2">

          {/* Left */}
          <div className="py-8 lg:border-r lg:border-border lg:py-20 lg:pr-20">

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              What We Do
            </p>

            <h2 className="max-w-[550px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Everything starts with a clear direction.
            </h2>

            <p className="mt-7 max-w-[500px] font-sans text-[15px] leading-8 text-text-muted">
              From strategy to execution, we create focused marketing
              solutions around what your business actually needs.
            </p>

          </div>

          {/* Right */}
          <div>

            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.number}
              >
                <Link
                  to={service.path}
                  className="group block border-b border-white/10 py-6 transition-all duration-300 hover:bg-white/5 hover:pl-2 lg:pl-16 lg:pr-5 lg:hover:pl-20"
                >

                <div className="flex items-start justify-between gap-6">

                  <div>

                    <p className="mb-3 font-sans text-[11px] text-text-muted">
                      {service.number}
                    </p>

                    <h3 className="font-sans text-[20px] font-medium md:text-[24px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[500px] font-sans text-[14px] leading-7 text-text-muted">
                      {service.description}
                    </p>

                  </div>

                  <span className="mt-1 font-sans text-[18px] md:text-[20px] text-text-muted transition-transform duration-300 group-hover:translate-x-1">
                    <FiArrowRight />
                  </span>

                </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CASE STUDIES (NEW)
      ====================================================== */}
      <section className="w-full border-t border-border px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px]">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                Featured Work
              </p>
              <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
                Proven Impact.
              </h2>
            </div>
            <Link to="/services" className="border-b border-brand pb-1 font-sans text-[13px] font-semibold text-text-main transition-colors hover:text-text-muted">
              View all capabilities
            </Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                key={i} 
                className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all hover:border-violet-500/50 hover:bg-white/10 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-brand">{study.category}</p>
                <h3 className="mt-4 font-sans text-[20px] font-medium leading-tight text-text-main md:text-[24px]">{study.title}</h3>
                <p className="mt-4 font-sans text-[14px] leading-7 text-text-muted">{study.description}</p>
                <div className="mt-8 flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-text-main transition-transform group-hover:translate-x-2">
                  Read Study <span className="flex items-center"><FiArrowRight /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ====================================================== */}
      <section className="w-full px-5 py-8 sm:px-8 md:px-10 md:py-20 lg:px-10">

        <div className="mx-auto w-full max-w-[1250px]">

          <p className="mb-8 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Our Perspective
          </p>

          <h2 className="max-w-[1200px] font-sans text-[32px] font-medium leading-[1.08] tracking-tight md:text-[48px] lg:text-[60px]">
            Your brand is more than what you sell.
            <span className="text-text-muted">
              {" "}
              It's how people remember you.
            </span>
          </h2>

        </div>

      </section>

      {/* =====================================================
          TESTIMONIALS (NEW)
      ====================================================== */}
      <section className="w-full border-y border-white/10 bg-[#030712] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-[-20%] left-[10%] w-[30%] h-[50%] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none"></div>
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              Client Voices
            </p>
            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Trusted by ambitious leaders.
            </h2>
          </motion.div>
          <div className="flex flex-col gap-12">
            {testimonials.map((test, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index} 
                className="border-l-2 border-brand pl-6 md:pl-10 p-6 rounded-r-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <p className="font-sans text-[18px] leading-8 text-text-main md:text-[18px] md:text-[20px] md:leading-10">
                  "{test.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-sans text-[14px] font-bold text-text-main">{test.author}</p>
                  <p className="font-sans text-[12px] text-text-muted">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="w-full border-t border-border px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto mb-12 grid w-full max-w-[1250px] grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              How We Work
            </p>

            <h2 className="font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              A simple process.
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-[600px] font-sans text-[15px] leading-8 text-text-muted">
              We keep the process focused and collaborative, moving from
              understanding to strategy and from strategy to meaningful
              execution.
            </p>

          </div>

        </div>

        <div className="mx-auto max-w-[1250px] border-t border-border">

          {process.map((item) => (
            <div
              key={item.number}
              className="grid w-full grid-cols-1 gap-5 border-b border-border py-6 md:grid-cols-[100px_1fr_1.5fr] md:items-start md:gap-10"
            >

              <span className="font-sans text-[11px] text-text-muted">
                {item.number}
              </span>

              <h3 className="font-sans text-[24px] font-medium">
                {item.title}
              </h3>

              <p className="max-w-[600px] font-sans text-[14px] leading-7 text-text-muted">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="w-full border-t border-border px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
              Start Something Meaningful
            </p>

            <h2 className="max-w-[800px] font-sans text-[40px] font-medium leading-tight md:text-[60px]">
              Let's build something worth remembering.
            </h2>

          </div>

          <Link
            to="/contact"
            className="w-fit shrink-0 border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
          >
            Let's Talk
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;