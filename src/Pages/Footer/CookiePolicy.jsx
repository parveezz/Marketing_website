import { motion } from "framer-motion";

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
    <section className="w-full min-h-screen bg-[#0a0a0a] px-4 sm:px-6 py-8 sm:py-10 text-[#fafafa] overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-white/10 pb-6 sm:pb-8 text-center flex flex-col items-center justify-center"
        >
          <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[3px] text-[#c4f82a]">
            ZIH Marketing Consultancy
          </p>

          <h1 className="font-sans text-[36px] font-semibold leading-tight text-white sm:text-[46px] md:text-[54px] tracking-tight">
            Cookie Policy
          </h1>

          <p className="mt-2.5 font-sans text-[13px] text-[#71717a]">
            Last updated: September 2026
          </p>
        </motion.div>

        {/* Content - Row Style for Title and Content */}
        <div className="mx-auto w-full max-w-4xl py-6 sm:py-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;