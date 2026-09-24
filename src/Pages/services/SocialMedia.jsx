import SEO from "../../Components/SEO";

const SocialMedia = () => {
    const services = [
        {
            title: "Social Media Strategy",
            description: "We audit your current digital footprint and develop a custom roadmap detailing exactly which platforms to use, what content to post, and how to outmaneuver your competitors."
        },
        {
            title: "Community Management",
            description: "We don't just post; we participate. Our team actively engages with your followers, responds to comments, and fosters a genuine sense of community that turns passive scrollers into loyal brand advocates."
        },
        {
            title: "Content Creation & Curation",
            description: "From striking graphics and compelling short-form videos to thought leadership articles, our creative team produces a steady stream of high-quality content designed specifically for the nuances of each platform."
        },
        {
            title: "Influencer Partnerships",
            description: "We identify, vet, and manage relationships with key influencers who align with your brand values, leveraging their established trust to introduce your product to entirely new audiences."
        },
        {
            title: "Social Listening & Analytics",
            description: "We monitor the internet for mentions of your brand and industry trends. Through detailed monthly reporting, we continuously refine our strategy based on real-time data and user sentiment."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10">
            <SEO title="Social Media Services" description="Engaging social media management that builds loyal communities." />

            <div className="mx-auto w-full max-w-[1250px]">

                {/* Hero */}
                <div className="border-b border-border pb-8 md:pb-12">
                    <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                        Our Services
                    </p>

                    <h1 className="max-w-[900px] font-sans text-[46px] font-medium leading-[1.05] tracking-tight sm:text-[54px] md:text-[70px] lg:text-[82px]">
                        Social media with substance.
                    </h1>

                    <p className="mt-8 max-w-[700px] font-sans text-[14px] leading-7 text-text-muted md:text-[16px] md:leading-8">
                        We don't believe in posting just for the sake of posting. We build comprehensive social media ecosystems that actually engage your audience, foster community loyalty, and drive tangible business results without relying on empty vanity metrics.
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-surface-muted">
                   <img src="/images/service-social.jpg" alt="Social Media Strategy" className="h-full w-full object-cover" />
                </div>

                {/* Overview */}
                <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 py-8 md:py-12 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                            What We Do
                        </p>

                        <h2 className="font-sans text-[32px] font-medium leading-tight md:text-[44px]">
                            Cultivate a loyal audience.
                        </h2>
                    </div>

                    <div>
                        <p className="font-sans text-[15px] leading-8 text-text-muted">
                            Your social media platforms are the front lines of your brand's customer experience. From high-quality organic content creation to active community management, we ensure that every interaction leaves a positive, lasting impression on your audience.
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
                        Ready to dominate your social feeds?
                    </h2>

                    <a
                        href="/contact"
                        className="w-fit border border-brand bg-brand px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main"
                    >
                        Start Your Strategy
                    </a>

                </div>

            </div>
        </section>
    );
};

export default SocialMedia;