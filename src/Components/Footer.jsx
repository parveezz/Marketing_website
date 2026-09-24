import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await fetch('/api/newsletter.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            
            if (response.ok) {
                setStatusMessage({ type: 'success', text: result.message || 'Subscribed successfully!' });
                setEmail('');
            } else {
                setStatusMessage({ type: 'error', text: result.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatusMessage({ type: 'error', text: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="w-full bg-surface-muted text-text-main border-t border-border">

            <div className="mx-auto w-full max-w-[1250px] px-5 md:px-8 lg:px-10">

                {/* =========================
                    MAIN FOOTER LINKS
                ========================== */}
                <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 py-10 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-12">

                    {/* Logo & Intro */}
                    <div className="col-span-2 w-full md:col-span-4 lg:col-span-1 lg:pr-10">
                        <Link
                            to="/"
                            className="inline-flex flex-col items-start text-text-main"
                        >
                            <span className="font-sans text-[38px] font-light leading-[0.8] tracking-[10px]">
                                ZIH
                            </span>
                            <span className="mt-3 whitespace-nowrap font-sans text-[8px] font-semibold leading-none tracking-[4px]">
                                MARKETING CONSULTANCY
                            </span>
                        </Link>
                        <p className="mt-7 font-sans text-[13px] leading-6 text-text-muted">
                            We are a strategic marketing consultancy focused on helping ambitious businesses build stronger brands, reach the right audiences, and achieve sustainable, measurable growth.
                        </p>
                        
                        {/* Global Locations */}
                        <div className="mt-8 flex gap-6 font-sans text-[12px] font-medium text-text-main">
                            <span>NY</span>
                            <span className="text-[#bdbdbd]">/</span>
                            <span>LDN</span>
                            <span className="text-[#bdbdbd]">/</span>
                            <span>DXB</span>
                            <span className="text-[#bdbdbd]">/</span>
                            <span>HYD</span>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="w-full">
                        <h3 className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-text-main">
                            Company
                        </h3>
                        <div className="flex flex-col gap-4">
                            <Link to="/about" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">About Us</Link>
                            <Link to="/contact" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Contact</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="w-full">
                        <h3 className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-text-main">
                            Services
                        </h3>
                        <div className="flex flex-col gap-4">
                            <Link to="/services/strategic-marketing" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Strategic Marketing</Link>
                            <Link to="/services/branding" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Branding</Link>
                            <Link to="/services/advertising" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Advertising</Link>
                            <Link to="/services/social-media" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Social Media</Link>
                            <Link to="/services" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">View All</Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="w-full">
                        <h3 className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-text-main">
                            Resources
                        </h3>
                        <div className="flex flex-col gap-4">
                            <Link to="/blog" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Journal / Blog</Link>
                            <Link to="/case-studies" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Case Studies</Link>
                            <Link to="/whitepapers" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">Whitepapers</Link>
                            <Link to="/faq" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">FAQ</Link>
                        </div>
                    </div>
                    
                    {/* Connect */}
                    <div className="w-full">
                        <h3 className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-text-main">
                            Connect
                        </h3>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:hello@zihconsultancy.com" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">hello@zihconsultancy.com</a>
                            <a href="tel:+15551234567" className="w-fit font-sans text-[14px] text-text-muted transition-colors hover:text-text-main">+1 (555) 123-4567</a>
                            
                            {/* Social Links */}
                            <div className="mt-4 flex gap-3">
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border font-sans text-[13px] text-text-main transition-all hover:border-brand hover:bg-brand hover:text-surface">
                                    <FaLinkedinIn size={14} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border font-sans text-[13px] text-text-main transition-all hover:border-brand hover:bg-brand hover:text-surface">
                                    <FaInstagram size={14} />
                                </a>
                                <a href="https://x.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border font-sans text-[13px] text-text-main transition-all hover:border-brand hover:bg-brand hover:text-surface">
                                    <FaXTwitter size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* =========================
                    NEWSLETTER
                ========================== */}
                <div className="flex w-full flex-col gap-8 border-t border-border py-10 md:flex-row md:items-center md:justify-between lg:py-12">
                    <div className="w-full md:max-w-[400px]">
                        <h3 className="font-sans text-[20px] font-medium leading-tight text-text-main md:text-[24px]">
                            Insights delivered to your inbox.
                        </h3>
                        <p className="mt-3 font-sans text-[13px] leading-6 text-text-muted">
                            Subscribe to receive our latest thinking on marketing strategy, branding, and growth. No spam, just value.
                        </p>
                    </div>

                    <form className="flex w-full flex-col gap-4 md:max-w-[450px]" onSubmit={handleNewsletterSubmit}>
                        <div className="flex w-full flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email address"
                                className="h-12 w-full flex-1 border-b border-[#777] bg-transparent px-1 font-sans text-[14px] text-text-main outline-none placeholder:text-[#888] focus:border-brand"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 w-full shrink-0 cursor-pointer border border-brand bg-brand px-8 font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-surface transition-all duration-300 hover:bg-transparent hover:text-text-main disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                                Subscribe
                            </button>
                        </div>
                        {statusMessage && (
                            <p className={`font-sans text-[12px] ${statusMessage.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                                {statusMessage.text}
                            </p>
                        )}
                    </form>
                </div>

                {/* =========================
                    BOTTOM FOOTER
                ========================== */}
                <div className="flex w-full flex-col gap-5 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
                    <p className="font-sans text-[12px] text-text-muted">
                        © {new Date().getFullYear()} ZIH Marketing Consultancy. All rights reserved.
                    </p>
                    <div className="flex w-full flex-wrap gap-6 md:w-auto">
                        <Link to="/privacy-policy" className="font-sans text-[12px] text-text-muted transition-colors hover:text-text-main">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="font-sans text-[12px] text-text-muted transition-colors hover:text-text-main">
                            Terms & Conditions
                        </Link>
                        <Link to="/cookies" className="font-sans text-[12px] text-text-muted transition-colors hover:text-text-main">
                            Cookie Policy
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;