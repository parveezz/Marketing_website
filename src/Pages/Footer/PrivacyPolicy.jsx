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
    <section className="w-full min-h-screen bg-[#0a0a0a] px-4 sm:px-6 py-8 sm:py-10 text-[#fafafa]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header - Centered */}
        <div className="border-b border-white/10 pb-6 sm:pb-8 text-center flex flex-col items-center justify-center">
          <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[3px] text-[#c4f82a]">
            ZIH Marketing Consultancy
          </p>

          <h1 className="font-sans text-[36px] font-semibold leading-tight text-white sm:text-[46px] md:text-[54px] tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-2.5 font-sans text-[13px] text-[#71717a]">
            Last updated: September 2026
          </p>
        </div>

        {/* Content - Row Style for Title and Content */}
        <div className="mx-auto w-full max-w-4xl py-6 sm:py-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-5 sm:py-6 ${
                index !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <div className="md:col-span-4">
                <h2 className="font-sans text-[17px] sm:text-[19px] font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              <div className="md:col-span-8">
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#a1a1aa]">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;