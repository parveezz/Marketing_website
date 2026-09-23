

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Introduction",
            content:
                "At ZIH Marketing Consultancy, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you visit our website or communicate with us.",
        },
        {
            title: "Information We Collect",
            content:
                "We may collect information that you voluntarily provide to us, including your name, email address, phone number, company name, and information submitted through our contact forms or other communications.",
        },
        {
            title: "How We Use Your Information",
            content:
                "We may use the information we collect to respond to enquiries, provide our services, communicate with you, understand your business requirements, improve our services, and maintain our website.",
        },
        {
            title: "Protection of Information",
            content:
                "We take reasonable measures to protect your personal information against unauthorized access, misuse, alteration, disclosure, or destruction.",
        },
        {
            title: "Third-Party Services",
            content:
                "Our website may use third-party services for analytics, hosting, communication, or other business functions. These services may process information according to their own privacy policies.",
        },
        {
            title: "Your Rights",
            content:
                "You may contact us to request information about the personal data we hold about you, request corrections, or ask us to stop using your information where applicable.",
        },
        {
            title: "Changes to This Privacy Policy",
            content:
                "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.",
        },
        {
            title: "Contact Us",
            content:
                "If you have any questions about this Privacy Policy, please contact ZIH Marketing Consultancy through our contact page.",
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
                        Privacy Policy
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

export default PrivacyPolicy;