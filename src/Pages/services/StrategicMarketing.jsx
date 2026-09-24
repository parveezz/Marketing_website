import SEO from "../../Components/SEO";

const StrategicMarketing = () => {
    const services = [
        {
            title: "Go-To-Market Strategy",
            description: "Launching a new product or entering a new market? We map out the exact sequence of events, channels, and messaging required to generate immediate traction and long-term viability."
        },
        {
            title: "Market Research & Insights",
            description: "We remove the guesswork by conducting deep-dive qualitative and quantitative research. We identify who your most profitable customers are, what they care about, and where to find them."
        },
        {
            title: "Competitor Analysis",
            description: "We deconstruct the marketing systems of your biggest competitors to identify their weaknesses. We then develop strategies to exploit those gaps and capture their market share."
        },
        {
            title: "Growth & Funnel Optimization",
            description: "We analyze every step of your customer journey. By identifying bottlenecks in your sales funnel, we implement targeted tactics to increase conversion rates and maximize customer lifetime value."
        },
        {
            title: "Campaign Planning & Roadmaps",
            description: "Strategy is useless without execution. We deliver highly detailed, step-by-step implementation roadmaps that your internal teams can follow to bring our strategic vision to life."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10">
            <SEO title="Strategic Marketing" description="Data-backed marketing strategies for sustainable growth." />

            <div className="mx-auto w-full max-w-[1250px]">

                {/* Hero */}
                <div className="border-b border-border pb-8 md:pb-12">
                    <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                        Our Services
                    </p>

                    <h1 className="max-w-[900px] font-sans text-[46px] font-medium leading-[1.05] tracking-tight sm:text-[54px] md:text-[70px] lg:text-[82px]">
                        Strategy before tactics.
                    </h1>

                    <p className="mt-8 max-w-[700px] font-sans text-[14px] leading-7 text-text-muted md:text-[16px] md:leading-8">
                        The biggest mistake businesses make is jumping into execution without a plan. We develop comprehensive, data-backed marketing strategies that align directly with your business goals, ensuring every dollar spent works towards a unified objective.
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-surface-muted">
                   <img src="/images/service-strategic.jpg" alt="Strategic Marketing Planning" className="h-full w-full object-cover" />
                </div>

                {/* Overview */}
                <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 py-8 md:py-12 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                            What We Do
                        </p>

                        <h2 className="font-sans text-[32px] font-medium leading-tight md:text-[44px]">
                            Navigate your market with precision.
                        </h2>
                    </div>

                    <div>
                        <p className="font-sans text-[15px] leading-8 text-text-muted">
                            We take the guesswork out of your marketing by deeply analyzing your target market, identifying your strongest competitive advantages, and mapping out a high-ROI roadmap. From product launches to massive scaling efforts, we provide the blueprint for success.
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
                        Stop guessing. Start growing.
                    </h2>

                    <a
                        href="/contact"
                        className="w-fit border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
                    >
                        Build Your Roadmap
                    </a>

                </div>

            </div>
        </section>
    );
};

export default StrategicMarketing;