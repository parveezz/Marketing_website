import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      number: "01",
      title: "Clarity",
      description:
        "We simplify complex marketing challenges and create clear strategies that give businesses direction.",
    },
    {
      number: "02",
      title: "Purpose",
      description:
        "Every idea, campaign, and creative decision should have a reason behind it and contribute to a meaningful business goal.",
    },
    {
      number: "03",
      title: "Consistency",
      description:
        "Strong brands are built through consistent communication, experiences, and decisions across every touchpoint.",
    },
    {
      number: "04",
      title: "Growth",
      description:
        "We focus on building marketing systems that create opportunities for sustainable and long-term growth.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We begin by understanding your business, audience, market, competitors, and current challenges.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We identify the right positioning, priorities, and direction based on what your business needs.",
    },
    {
      number: "03",
      title: "Create",
      description:
        "We turn strategy into thoughtful campaigns, branding, content, and marketing experiences.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "We measure what matters, learn from the results, and continuously improve the approach.",
    },
  ];

  const team = [
    { name: "Syed Zubair Hafeez", role: "CEO & Founder", image: "https://placehold.co/600x750/e0e0e0/202020?text=SZH" },
    { name: "Elena Rostova", role: "Head of Strategy", image: "https://placehold.co/600x750/e0e0e0/202020?text=ER" },
    { name: "Marcus Chen", role: "Creative Director", image: "https://placehold.co/600x750/e0e0e0/202020?text=MC" }
  ];

  return (
    <main className="w-full bg-[#fafafa] text-[#202020]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="w-full px-5 pb-10 pt-8 sm:px-8 md:px-10 md:pb-16 md:pt-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px] border-b border-[#bdbdbd] pb-8 md:pb-12">

          <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
            About ZIH
          </p>

          <h1 className="max-w-[1100px] font-sans text-[46px] font-medium leading-[1.02] tracking-tight sm:text-[56px] md:text-[72px] lg:text-[88px]">
            Marketing with
            <br />
            <span className="text-[#666]">meaning.</span>
          </h1>

          <div className="mt-10 grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">

            <div />

            <p className="max-w-[650px] font-sans text-[14px] leading-8 text-[#555] md:text-[16px] md:leading-8">
              ZIH is a marketing consultancy built around a simple idea:
              effective marketing starts with understanding. We combine
              strategy, creativity, and purposeful execution to help
              businesses build brands that connect with the people they
              want to reach.
            </p>

          </div>
          
          {/* Hero Image */}
          <div className="mt-16 aspect-[21/9] w-full overflow-hidden bg-[#ebebeb]">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="About ZIH" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="w-full px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Who We Are
            </p>

            <h2 className="max-w-[600px] font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              We believe good marketing starts with a good understanding of
              people.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-[15px] leading-8 text-[#555] md:text-[16px]">
              Businesses don't need more noise. They need clarity. They need
              to understand who they are speaking to, what makes them
              different, and how to communicate that difference effectively.
            </p>

            <p className="font-sans text-[15px] leading-8 text-[#555] md:text-[16px]">
              At ZIH, we work across strategy, branding, advertising, and
              social media to create marketing that is intentional,
              consistent, and connected to real business objectives.
            </p>

            <p className="font-sans text-[15px] leading-8 text-[#555] md:text-[16px]">
              Our approach is collaborative. We work closely with our
              clients, understand their challenges, and build solutions
              around where they want to go.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          OUR STORY / TIMELINE (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] bg-[#fdfdfd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px]">
          <div className="mb-12">
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Our Story
            </p>
            <h2 className="max-w-[600px] font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              Built on a foundation of clarity and purpose.
            </h2>
          </div>
          
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
            <div className="border-t border-[#202020] pt-6">
              <h3 className="font-sans text-[20px] font-medium">The Beginning</h3>
              <p className="mt-4 font-sans text-[14px] leading-7 text-[#555]">
                Founded by Syed Zubair Hafeez, ZIH started with a singular vision: to strip away the vanity metrics and jargon from the marketing industry and replace it with genuine strategy.
              </p>
            </div>
            <div className="border-t border-[#202020] pt-6">
              <h3 className="font-sans text-[20px] font-medium">Our Evolution</h3>
              <p className="mt-4 font-sans text-[14px] leading-7 text-[#555]">
                Over the years, we expanded our capabilities across digital, branding, and traditional advertising, maintaining our commitment to strategy-first execution for a growing roster of global clients.
              </p>
            </div>
            <div className="border-t border-[#202020] pt-6">
              <h3 className="font-sans text-[20px] font-medium">Looking Ahead</h3>
              <p className="mt-4 font-sans text-[14px] leading-7 text-[#555]">
                Today, ZIH acts as a growth partner for ambitious brands, continuously adapting to new technologies while staying true to the timeless principles of human psychology and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 md:px-8 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 lg:grid-cols-2">

          {/* Left */}
          <div className="py-12 lg:border-r lg:border-[#bdbdbd] lg:py-10 lg:pr-20">

            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              What Guides Us
            </p>

            <h2 className="max-w-[500px] font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              Principles behind the work.
            </h2>

          </div>

          {/* Right */}
          <div>
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-[#bdbdbd] py-8 lg:pl-16"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-sans text-[18px] md:text-[20px] font-medium">
                    {value.title}
                  </h3>

                  <span className="font-sans text-[11px] text-[#777]">
                    {value.number}
                  </span>
                </div>

                <p className="max-w-[600px] font-sans text-[14px] leading-7 text-[#666]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1250px]">
          <div className="mb-12">
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Leadership
            </p>
            <h2 className="max-w-[600px] font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              The minds behind the strategy.
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden bg-[#e0e0e0] w-full aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-sans text-[18px] md:text-[20px] font-medium">{member.name}</h3>
                  <p className="mt-1 font-sans text-[13px] font-semibold uppercase tracking-[1px] text-[#666]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL REACH (NEW)
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] bg-[#f0f0f0] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[500px]">
             <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Global Reach
            </p>
            <h2 className="font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              Local expertise. Global perspective.
            </h2>
            <p className="mt-6 font-sans text-[15px] leading-8 text-[#555]">
              While our roots are deep, our reach extends across borders. We have successfully partnered with clients in North America, Europe, and Asia, adapting our strategies to nuanced cultural and market dynamics.
            </p>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[18px] font-medium">New York</p>
              <p className="font-sans text-[18px] font-medium text-[#777]">London</p>
              <p className="font-sans text-[18px] font-medium text-[#777]">Dubai</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[18px] font-medium text-[#777]">Singapore</p>
              <p className="font-sans text-[18px] font-medium text-[#777]">Hyderabad</p>
              <p className="font-sans text-[18px] font-medium text-[#777]">Toronto</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto mb-12 grid w-full max-w-[1250px] grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2">

          <div>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Our Approach
            </p>

            <h2 className="font-sans text-[26px] font-medium leading-tight md:text-[40px]">
              From understanding
              <br />
              to execution.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[600px] font-sans text-[15px] leading-8 text-[#555]">
              We don't believe in one-size-fits-all marketing. Every
              business has a different audience, challenge, opportunity,
              and ambition. Our process is designed to uncover those
              differences and turn them into a clear direction.
            </p>
          </div>

        </div>

        {/* Process */}
        <div className="mx-auto max-w-[1250px] border-t border-[#bdbdbd]">
          <div className="grid w-full grid-cols-1 gap-5">
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

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="w-full border-t border-[#bdbdbd] px-5 py-10 sm:px-8 md:px-10 md:py-10 lg:px-10">

        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
              Let's Work Together
            </p>

            <h2 className="max-w-[750px] font-sans text-[28px] font-medium leading-tight md:text-[42px]">
              Have a business worth building?
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

export default About;