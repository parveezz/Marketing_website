import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";

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
        setStatusMessage({
          type: "success",
          text: "Subscribed successfully!",
        });
        setEmail("");
      } else {
        setStatusMessage({
          type: "error",
          text: "Subscription failed. Please try again.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Subscription failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        {/* =========================================================
            TOP SECTION: LOGO + COLUMN LINKS
        ========================================================== */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 lg:pr-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              {/* Neon Green 3D Cube Badge (Identical to Navbar) */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c4f82a] text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="font-sans text-[20px] font-bold tracking-[1.5px] text-white">
                ZIH
              </span>
            </Link>

            <p className="mt-4 font-sans text-[13px] leading-relaxed text-[#a1a1aa] max-w-sm">
              A digital marketing consultancy helping ambitious leaders scale through intentional strategy, brand systems, and performance creative.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaLinkedinIn size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaInstagram size={13} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaXTwitter size={13} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/strategic-marketing" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Strategic Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/advertising" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services/event-management" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-block py-1 font-sans text-[13.5px] text-[#c4f82a] transition-all duration-200 hover:translate-x-1 hover:underline">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Journal / Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/whitepapers" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="inline-block py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Reach Out */}
          <div>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@zhmktg.com"
                  className="inline-flex items-center gap-2 py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-colors hover:text-white"
                >
                  <FiMail className="text-[#c4f82a] text-[14px] shrink-0" />
                  <span>info@zhmktg.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919177482247"
                  className="inline-flex items-center gap-2 py-1 font-sans text-[13.5px] text-[#a1a1aa] transition-colors hover:text-white"
                >
                  <FiPhone className="text-[#c4f82a] text-[14px] shrink-0" />
                  <span>+91 91774 82247</span>
                </a>
              </li>
              <li className="font-sans text-[12.5px] leading-relaxed text-[#a1a1aa]">
                Flat No. 112, Avalon Apartments,<br />
                Nanalnagar, Hyderabad - 28
              </li>
              <li className="pt-1">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-1.5 py-1 font-sans text-[12.5px] font-semibold text-[#c4f82a] transition-all hover:underline"
                >
                  <span>Book an Introduction</span>
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================
            NEWSLETTER STRIP
        ========================================================== */}
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
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
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
                className={`mt-2 font-sans text-[12px] ${
                  statusMessage.type === "error" ? "text-red-400" : "text-[#c4f82a]"
                }`}
              >
                {statusMessage.text}
              </p>
            )}
          </div>
        </div>

        {/* =========================================================
            BOTTOM LEGAL & COPYRIGHT
        ========================================================== */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} ZIH Marketing Consultancy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="py-1 font-sans text-[12px] text-[#a1a1aa] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="py-1 font-sans text-[12px] text-[#a1a1aa] transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/cookies"
              className="py-1 font-sans text-[12px] text-[#a1a1aa] transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;