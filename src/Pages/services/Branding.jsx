import SEO from "../../Components/SEO";

const Branding = () => {
    const services = [
        {
            title: "Brand Strategy & Positioning",
            description: "We define your core purpose, target audience, and unique value proposition. This foundational strategy ensures your brand stands out in a crowded market and speaks directly to the right people."
        },
        {
            title: "Visual Identity & Logo Design",
            description: "From typography to color palettes and logo marks, we craft a cohesive visual language that captures your brand's essence and makes a striking, memorable first impression."
        },
        {
            title: "Brand Voice & Messaging",
            description: "How your brand sounds is just as important as how it looks. We develop comprehensive messaging frameworks, taglines, and tone-of-voice guidelines to ensure consistent communication."
        },
        {
            title: "Corporate Brand Guidelines",
            description: "We deliver detailed rulebooks that empower your internal teams and external partners to apply your branding flawlessly across every single medium and touchpoint."
        },
        {
            title: "Rebranding & Evolution",
            description: "For established businesses looking to pivot or modernize, we carefully evolve your brand identity, honoring your heritage while positioning you for future growth."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10">
            <SEO title="Branding Services" description="Distinctive brand identities that build trust and long-term value." />

            <div className="mx-auto w-full max-w-[1250px]">

                {/* Hero */}
                <div className="border-b border-border pb-8 md:pb-12">
                    <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                        Our Services
                    </p>

                    <h1 className="max-w-[900px] font-sans text-[46px] font-medium leading-[1.05] tracking-tight sm:text-[54px] md:text-[70px] lg:text-[82px]">
                        Branding that leaves a mark.
                    </h1>

                    <p className="mt-8 max-w-[700px] font-sans text-[14px] leading-7 text-text-muted md:text-[16px] md:leading-8">
                        We don’t just design logos; we build living, breathing identities. Our branding process digs deep into your company's DNA to extract what makes you truly unique, translating it into a visual and verbal language that resonates with your ideal audience.
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-surface-muted">
                   <img src="/images/service-branding.jpg" alt="Branding Strategy Session" className="h-full w-full object-cover" />
                </div>

                {/* Overview */}
                <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 py-8 md:py-12 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                            What We Do
                        </p>

                        <h2 className="font-sans text-[32px] font-medium leading-tight md:text-[44px]">
                            Make your brand unforgettable.
                        </h2>
                    </div>

                    <div>
                        <p className="font-sans text-[15px] leading-8 text-text-muted">
                            A strong brand creates immediate recognition, builds undeniable trust, and enforces consistency. We help businesses develop a clear identity and visual direction that can be carried seamlessly across every single customer touchpoint, from your website to your packaging.
                        </p>
                    </div>

                </div>

                {/* Services */}
                <div className="border-t border-border">
                    <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 lg:grid-cols-2">

                        <div className="border-b border-border py-10 lg:border-b-0 lg:border-r lg:pr-16">
                            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                                Our Expertise
                            </p>
                        </div>

                        <div>
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className="border-b border-border py-8"
                                >
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="font-sans text-[18px] md:text-[20px] font-medium">
                                                {service.title}
                                            </span>
                                            <p className="mt-4 max-w-[500px] font-sans text-[14px] leading-7 text-text-muted">
                                                {service.description}
                                            </p>
                                        </div>

                                        <span className="shrink-0 font-sans text-[12px] text-text-muted">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between md:py-16">

                    <h2 className="max-w-[650px] font-sans text-[26px] font-medium leading-tight md:text-[40px]">
                        Give your business a brand people remember.
                    </h2>

                    <a
                        href="/contact"
                        className="w-fit border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
                    >
                        Start Your Project
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Branding;