

const CookiePolicy = () => {
    const sections = [
        {
            title: "What Are Cookies?",
            content:
                "Cookies are small text files that websites store on your device when you visit them. They help websites remember information about your visit and improve your browsing experience.",
        },
        {
            title: "How We Use Cookies",
            content:
                "ZIH Marketing Consultancy may use cookies and similar technologies to help the website function properly, understand website usage, improve performance, and provide a better user experience.",
        },
        {
            title: "Types of Cookies",
            content:
                "Essential cookies may be required for certain website functions. Analytics cookies may help us understand how visitors interact with our website. Preference cookies may remember choices made during your visit.",
        },
        {
            title: "Third-Party Cookies",
            content:
                "Some third-party services integrated into our website may place their own cookies on your device. These services are responsible for managing their cookies according to their own policies.",
        },
        {
            title: "Managing Cookies",
            content:
                "Most web browsers allow you to control or disable cookies through their settings. Disabling certain cookies may affect how some parts of the website function.",
        },
        {
            title: "Changes to This Cookie Policy",
            content:
                "We may update this Cookie Policy when necessary. Any updates will be published on this page.",
        },
        {
            title: "Contact Us",
            content:
                "If you have any questions about our use of cookies, please contact ZIH Marketing Consultancy.",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-[#fafafa] px-5 py-12 text-[#202020] md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[1250px]">
                {/* Header */}
                <div className="border-b border-[#bdbdbd] pb-10 md:pb-12">
                    <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#666]">
                        ZIH Marketing Consultancy
                    </p>

                    <h1 className="font-sans text-[42px] font-medium leading-tight md:text-[58px] lg:text-[64px]">
                        Cookie Policy
                    </h1>

                    <p className="mt-5 font-sans text-[13px] text-[#666]">
                        Last updated: September 2026
                    </p>
                </div>

                {/* Content */}
                <div className="mx-auto w-full max-w-[900px] py-10 md:py-14">
                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            className={`py-8 ${index !== 0 ? "border-t border-[#d0d0d0]" : ""
                                }`}
                        >
                            <h2 className="mb-4 font-sans text-[20px] font-semibold md:text-[24px]">
                                {section.title}
                            </h2>

                            <p className="font-sans text-[14px] leading-7 text-[#555] md:text-[15px] md:leading-8">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;