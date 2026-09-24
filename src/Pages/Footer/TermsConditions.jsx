

const TermsConditions = () => {
    const sections = [
        {
            title: "Introduction",
            content:
                "These Terms & Conditions govern your use of the ZIH Marketing Consultancy website and our services. By accessing or using our website, you agree to these terms.",
        },
        {
            title: "Our Services",
            content:
                "ZIH Marketing Consultancy provides marketing, branding, advertising, digital marketing, and related consulting services. The scope, deliverables, timelines, and fees for individual projects will be agreed upon with the client.",
        },
        {
            title: "Website Use",
            content:
                "You agree to use this website only for lawful purposes and in a manner that does not interfere with the operation, security, or availability of the website.",
        },
        {
            title: "Intellectual Property",
            content:
                "Unless otherwise stated, the content, branding, text, graphics, designs, and other materials available on this website belong to ZIH Marketing Consultancy or are used with appropriate permission. You may not reproduce, modify, distribute, or commercially use website content without prior permission.",
        },
        {
            title: "Client Responsibilities",
            content:
                "Clients are responsible for providing accurate information, materials, approvals, and feedback required for the delivery of agreed services.",
        },
        {
            title: "Payments",
            content:
                "Fees, payment schedules, and other commercial terms will be agreed upon between ZIH Marketing Consultancy and the client before work begins.",
        },
        {
            title: "Limitation of Liability",
            content:
                "While we make reasonable efforts to provide reliable services and information, we do not guarantee that the website or its content will always be complete, accurate, uninterrupted, or error-free.",
        },
        {
            title: "Changes to These Terms",
            content:
                "We may update these Terms & Conditions from time to time. Updated terms will be published on this page.",
        },
        {
            title: "Contact",
            content:
                "If you have questions regarding these Terms & Conditions, please contact ZIH Marketing Consultancy.",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-surface-muted px-5 py-12 text-text-main md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[1250px]">
                {/* Header */}
                <div className="border-b border-border pb-10 md:pb-12">
                    <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
                        ZIH Marketing Consultancy
                    </p>

                    <h1 className="font-sans text-[42px] font-medium leading-tight md:text-[58px] lg:text-[64px]">
                        Terms & Conditions
                    </h1>

                    <p className="mt-5 font-sans text-[13px] text-text-muted">
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

                            <p className="font-sans text-[14px] leading-7 text-text-muted md:text-[15px] md:leading-8">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TermsConditions;