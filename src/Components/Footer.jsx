import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

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
      const result = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: result.message || "Subscribed successfully!",
        });
        setEmail("");
      } else {
        setStatusMessage({
          type: "error",
          text: result.message || "Something went wrong.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error. Please try again.",
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8"
        >
          {/* Brand Col */}
          <motion.div variants={itemVariants} className="sm:col-span-2 md:col-span-3 lg:col-span-1 lg:pr-4">
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
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaLinkedinIn size={13} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaInstagram size={13} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#a1a1aa] transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-[#c4f82a]"
              >
                <FaXTwitter size={13} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/strategic-marketing" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Strategic Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/advertising" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-block font-sans text-[13.5px] text-[#c4f82a] transition-all duration-200 hover:translate-x-1 hover:underline">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/blog" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Journal / Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/whitepapers" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="inline-block font-sans text-[13.5px] text-[#a1a1aa] transition-all duration-200 hover:translate-x-1 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Reach Out */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@zihconsultancy.com"
                  className="inline-flex items-center gap-2 font-sans text-[13.5px] text-[#a1a1aa] transition-colors hover:text-white"
                >
                  <FiMail className="text-[#c4f82a] text-[14px]" />
                  <span>hello@zihconsultancy.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 font-sans text-[13.5px] text-[#a1a1aa] transition-colors hover:text-white"
                >
                  <FiPhone className="text-[#c4f82a] text-[14px]" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li className="pt-1">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold text-[#c4f82a] transition-all hover:underline"
                >
                  <span>Book an Introduction</span>
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* =========================================================
            NEWSLETTER STRIP
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#121114]/80 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="max-w-md">
            <h4 className="font-sans text-[18px] font-medium text-white">
              Stay ahead with market insights
            </h4>
            <p className="mt-1 font-sans text-[13px] text-[#a1a1aa]">
              Join leaders receiving our strategic perspectives on positioning, performance, and brand building.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="h-11 w-full sm:w-[260px] rounded-xl border border-white/10 bg-[#1a181d] px-4 font-sans text-[13.5px] text-white placeholder-[#71717a] outline-none transition-colors focus:border-[#c4f82a]"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="h-11 shrink-0 rounded-xl bg-[#c4f82a] px-6 font-sans text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-[#b0f516] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>
        </motion.div>

        <AnimatePresence mode="wait">
          {statusMessage && (
            <motion.p
              key={statusMessage.text}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className={`mt-2 font-sans text-[12px] text-right ${
                statusMessage.type === "error" ? "text-red-400" : "text-[#c4f82a]"
              }`}
            >
              {statusMessage.text}
            </motion.p>
          )}
        </AnimatePresence>

        {/* =========================================================
            BOTTOM LEGAL & COPYRIGHT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-[12px] text-[#71717a]">
            &copy; {new Date().getFullYear()} ZIH Marketing Consultancy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="font-sans text-[12px] text-[#71717a] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-sans text-[12px] text-[#71717a] transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/cookies"
              className="font-sans text-[12px] text-[#71717a] transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;