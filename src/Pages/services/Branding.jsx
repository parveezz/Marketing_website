

const Branding = () => {
    const services = [
        "Brand Strategy",
        "Brand Identity",
        "Visual Direction",
        "Brand Positioning",
        "Brand Guidelines",
    ];

    return (
        <section className="w-full min-h-screen bg-[#fafafa] px-5 py-12 text-[#202020] md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[1250px]">

                {/* Hero */}
                <div className="border-b border-[#bdbdbd] pb-8 md:pb-12">
                    <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                        Our Services
                    </p>

                    <h1 className="max-w-[900px] font-sans text-[46px] font-medium leading-[1.05] tracking-tight sm:text-[54px] md:text-[70px] lg:text-[82px]">
                        Branding
                    </h1>

                    <p className="mt-8 max-w-[700px] font-sans text-[14px] leading-7 text-[#555] md:text-[16px] md:leading-8">
                        We create distinctive brand identities that communicate who you
                        are, what you stand for, and why your audience should choose you.
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 aspect-[21/9] w-full overflow-hidden bg-[#ebebeb]">
                   <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" alt="Branding" className="h-full w-full object-cover" />
                </div>

                {/* Overview */}
                <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 py-8 md:py-12 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                            What We Do
                        </p>

                        <h2 className="font-sans text-[32px] font-medium leading-tight md:text-[44px]">
                            Make your brand memorable.
                        </h2>
                    </div>

                    <div>
                        <p className="font-sans text-[15px] leading-8 text-[#555]">
                            A strong brand creates recognition, trust, and consistency.
                            We help businesses develop a clear identity and visual
                            direction that can be carried across every customer
                            touchpoint.
                        </p>
                    </div>

                </div>

                {/* Services */}
                <div className="border-t border-[#bdbdbd]">
                    <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 lg:grid-cols-2">

                        <div className="border-b border-[#bdbdbd] py-10 lg:border-b-0 lg:border-r lg:pr-16">
                            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                                Our Approach
                            </p>
                        </div>

                        <div>
                            {services.map((service, index) => (
                                <div
                                    key={service}
                                    className="border-b border-[#bdbdbd] py-6"
                                >
                                    <div className="flex items-center justify-between gap-5">

                                        <span className="font-sans text-[16px] md:text-[18px]">
                                            {service}
                                        </span>

                                        <span className="font-sans text-[12px] text-[#777]">
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
                        className="w-fit border border-[#202020] bg-[#202020] px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
                    >
                        Let's Talk
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Branding;