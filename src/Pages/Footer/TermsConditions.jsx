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
    <section className="w-full min-h-screen bg-[#0a0a0a] px-4 sm:px-6 py-8 sm:py-10 text-[#fafafa]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header - Centered */}
        <div className="border-b border-white/10 pb-6 sm:pb-8 text-center flex flex-col items-center justify-center">
          <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[3px] text-[#c4f82a]">
            ZIH Marketing Consultancy
          </p>

          <h1 className="font-sans text-[36px] font-semibold leading-tight text-white sm:text-[46px] md:text-[54px] tracking-tight">
            Terms & Conditions
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

export default TermsConditions;