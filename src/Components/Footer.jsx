import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import ZihLogo from "./Common/ZihLogo";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/zh_marketing_consultancy?stkn=MTh0aG9iOHZ1MjhlbQ==",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1GnAU8YwcU/",
    icon: FaFacebookF,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@zh_marketing_consultancy",
    icon: FaThreads,
  },
  { name: "Twitter / X", href: "https://x.com", icon: FaXTwitter },
];

const footerColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Our Work", to: "/our-work" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Strategic Marketing", to: "/services/strategic-marketing" },
      { label: "Branding", to: "/services/branding" },
      { label: "Advertising", to: "/services/advertising" },
      { label: "Social Media", to: "/services/social-media" },
      { label: "Event Management", to: "/services/event-management" },
      { label: "Public Relations (PR)", to: "/services/public-relations" },
      { label: "Consultation Services", to: "/services/consultation-services" },
      { label: "IT Services", to: "/services/it-services" },
      { label: "View All Services →", to: "/services", accent: true },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Education", to: "/industries/education" },
      { label: "Automobiles", to: "/industries/automobiles" },
      { label: "Real Estate", to: "/industries/real-estate" },
      { label: "Sports", to: "/industries/sports" },
      { label: "Food & Hospitality", to: "/industries/food" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Journal / Blog", to: "/blog" },
      { label: "Case Studies & Testimonials", to: "/case-studies" },
      { label: "Whitepapers", to: "/whitepapers" },
      { label: "FAQ", to: "/faq" },
    ],
  },
];

const contactItems = [
  { type: "link", href: "mailto:info@zhmktg.com", icon: FiMail, text: "info@zhmktg.com" },
  { type: "link", href: "tel:+919177482247", icon: FiPhone, text: "+91 91774 82247" },
  {
    type: "text",
    text: (
      <>
        Flat No. 112, Avalon Apartments,
        <br />
        Nanalnagar, Hyderabad - 28
      </>
    ),
  },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/newsletter.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatusMessage({ type: "success", text: "Subscribed successfully!" });
        setEmail("");
      } else {
        setStatusMessage({ type: "error", text: "Subscription failed. Please try again." });
      }
    } catch {
      setStatusMessage({ type: "error", text: "Subscription failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Grid guide lines */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        {/* TOP: Brand + Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 xl:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 lg:pr-2">
            <Link to="/" className="inline-flex items-center" aria-label="ZIH Home">
              <ZihLogo
                size="text-[24px] sm:text-[28px]"
                className="text-white transition-opacity hover:opacity-85"
              />
            </Link>

            <p className="mt-4 font-sans text-[13px] leading-relaxed text-[#a1a1aa] max-w-sm">
              A marketing consultancy helping ambitious leaders scale through intentional strategy, brand systems, and performance creative.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Mapped columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className={`inline-block py-1 font-sans text-[13.5px] transition-all duration-200 hover:translate-x-1 ${link.accent
                        ? "text-[#c4f82a] hover:underline"
                        : "text-white hover:text-[#c4f82a]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column (mapped) */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              {contactItems.map((item, idx) => (
                <li key={idx} className="font-sans text-[13.5px] text-white">
                  {item.type === "link" ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 py-1 transition-colors hover:text-[#c4f82a]"
                    >
                      <item.icon className="text-[#c4f82a] text-[14px] shrink-0" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <span className="block text-[12.5px] leading-relaxed text-[#e4e4e7]">{item.text}</span>
                  )}
                </li>
              ))}

              <li className="pt-1">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-1.5 py-1 font-sans text-[12.5px] font-semibold text-[#c4f82a] transition-all hover:underline"
                >
                  <span>Book an Introduction</span>
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to="/feedback"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#161618] px-3.5 py-2 font-sans text-[12.5px] font-medium text-white transition-all duration-200 hover:border-[#c4f82a]/50 hover:bg-[#c4f82a]/10 hover:text-[#c4f82a]"
                >
                  <span>Customer Feedback</span>
                  <FiArrowUpRight className="text-[12px] opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#121114]/80 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <h4 className="font-sans text-[18px] font-medium text-white">
              Stay ahead with market insights
            </h4>
            <p className="mt-1 font-sans text-[13px] text-[#a1a1aa]">
              Join leaders receiving our strategic perspectives on positioning, performance, and brand building.
            </p>
          </div>

          <div className="flex w-full md:w-auto flex-col">
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full md:w-auto flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
                placeholder="Enter your email"
                className="h-11 w-full sm:w-[260px] rounded-xl border border-white/10 bg-[#1a181d] px-4 font-sans text-[13.5px] text-white placeholder-[#a1a1aa] outline-none transition-colors focus:border-[#c4f82a]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 shrink-0 rounded-xl bg-[#c4f82a] px-6 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {statusMessage && (
              <p
                className={`mt-2 font-sans text-[12px] ${statusMessage.type === "error" ? "text-red-400" : "text-[#c4f82a]"
                  }`}
              >
                {statusMessage.text}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM LEGAL */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} ZIH Marketing Consultancy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-1 font-sans text-[12px] text-white transition-colors hover:text-[#c4f82a]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;