import SEO from "../../Components/SEO";

const Advertising = () => {
    const services = [
        {
            title: "Search Engine Marketing (PPC)",
            description: "We place your business at the exact moment a customer is searching for a solution. Our highly optimized Google Ads campaigns drive high-intent traffic with a focus on conversion rates and low acquisition costs."
        },
        {
            title: "Display & Programmatic",
            description: "We capture attention across the web with striking visual banner ads. By utilizing programmatic technology, we buy digital ad space efficiently to reach your audience on the sites they visit most."
        },
        {
            title: "Video & YouTube Advertising",
            description: "Leverage the power of sight, sound, and motion. We strategize and execute video campaigns that build massive brand awareness and educate consumers before they even realize they need you."
        },
        {
            title: "Retargeting Campaigns",
            description: "Don't let interested prospects slip away. Our dynamic retargeting strategies re-engage users who have visited your site, bringing them back into your sales funnel to complete their purchase."
        },
        {
            title: "Print & Out-of-Home (OOH)",
            description: "Digital isn't the only way. We design and place impactful traditional advertising campaigns—from billboards to premium print magazines—that establish authority in the physical world."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10">
            <SEO title="Advertising Services" description="Data-driven advertising campaigns that maximize your ROI." />

            <div className="mx-auto w-full max-w-[1250px]">

                {/* Hero */}
                <div className="border-b border-border pb-8 md:pb-12">
                    <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                        Our Services
                    </p>

                    <h1 className="max-w-[900px] font-sans text-[46px] font-medium leading-[1.05] tracking-tight sm:text-[54px] md:text-[70px] lg:text-[82px]">
                        Advertising that performs.
                    </h1>

                    <p className="mt-8 max-w-[700px] font-sans text-[14px] leading-7 text-text-muted md:text-[16px] md:leading-8">
                        Stop throwing budget at campaigns that don't convert. We design highly targeted, data-driven advertising strategies that reach the right people at the right time, minimizing wasted spend and maximizing your return on investment.
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-surface-muted">
                   <img src="/images/service-advertising.jpg" alt="Advertising Analytics" className="h-full w-full object-cover" />
                </div>

                {/* Overview */}
                <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 py-8 md:py-12 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                            What We Do
                        </p>

                        <h2 className="font-sans text-[32px] font-medium leading-tight md:text-[44px]">
                            Turn clicks into customers.
                        </h2>
                    </div>

                    <div>
                        <p className="font-sans text-[15px] leading-8 text-text-muted">
                            Whether you need to drive rapid sales, generate high-quality B2B leads, or build massive brand awareness, our advertising campaigns are engineered for results. We continuously A/B test creatives, optimize bidding strategies, and scale what works.
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
                        Ready to scale your revenue?
                    </h2>

                    <a
                        href="/contact"
                        className="w-fit border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
                    >
                        Start Your Campaign
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Advertising;