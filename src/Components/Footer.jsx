import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#fafafa] text-[#202020]">

            <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">

                {/* =========================
            MAIN FOOTER LINKS
        ========================== */}
                <div className="grid w-full grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div className="w-full">
                        <Link
                            to="/"
                            className="inline-flex flex-col items-center text-[#202020]"
                        >
                            <span className="font-serif text-[38px] font-light leading-[0.8] tracking-[10px]">
                                ZIH
                            </span>

                            <span className="mt-3 whitespace-nowrap font-serif text-[8px] font-semibold leading-none tracking-[4px]">
                                MARKETING CONSULTANCY
                            </span>
                        </Link>

                        <p className="mt-7 w-full max-w-[260px] font-serif text-[12px] leading-5 text-[#555]">
                            Helping businesses build stronger brands, reach the right
                            audience, and achieve sustainable growth.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="w-full">
                        <h3 className="mb-5 font-serif text-[11px] font-semibold uppercase tracking-[2px]">
                            Navigation
                        </h3>

                        <div className="flex w-full flex-col gap-3">
                            <Link
                                to="/"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                About
                            </Link>

                            <Link
                                to="/services"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Services
                            </Link>

                            <Link
                                to="/contact"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="w-full">
                        <h3 className="mb-5 font-serif text-[11px] font-semibold uppercase tracking-[2px]">
                            Services
                        </h3>

                        <div className="flex w-full flex-col gap-3">
                            <Link
                                to="/services"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Strategic Marketing
                            </Link>

                            <Link
                                to="/services"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Branding
                            </Link>

                            <Link
                                to="/services"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Advertising
                            </Link>

                            <Link
                                to="/services"
                                className="w-fit font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                Social Media
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full">
                        <h3 className="mb-5 font-serif text-[11px] font-semibold uppercase tracking-[2px]">
                            Contact
                        </h3>

                        <div className="flex w-full flex-col gap-3">

                            <a
                                href="mailto:hello@example.com"
                                className="font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                hello@example.com
                            </a>

                            <a
                                href="tel:+15551234567"
                                className="font-serif text-[13px] text-[#555] transition-colors hover:text-[#202020]"
                            >
                                +1 (555) 123-4567
                            </a>

                            <p className="font-serif text-[13px] leading-5 text-[#555]">
                                New York, NY
                                <br />
                                United States
                            </p>

                            {/* Social Links */}
                            <div className="mt-2 flex gap-3">
                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#777] font-serif text-[11px] transition-all hover:bg-[#202020] hover:text-white"
                                >
                                    f
                                </a>

                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#777] font-serif text-[11px] transition-all hover:bg-[#202020] hover:text-white"
                                >
                                    ◎
                                </a>

                                <a
                                    href="#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#777] font-serif text-[10px] transition-all hover:bg-[#202020] hover:text-white"
                                >
                                    in
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =========================
            NEWSLETTER
        ========================== */}
                <div className="flex w-full flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">

                    <p className="shrink-0 font-serif text-[13px] font-medium text-[#202020]">
                        Stay updated with our latest insights.
                    </p>

                    <form className="flex w-full gap-2 md:max-w-[550px]">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-11 min-w-0 w-full flex-1 border-b border-[#777] bg-transparent px-1 font-serif text-[13px] text-[#202020] outline-none placeholder:text-[#888] focus:border-[#202020]"
                        />

                        <button
                            type="submit"
                            className="h-11 shrink-0 border border-[#202020] bg-[#202020] px-6 font-serif text-[10px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
                        >
                            Subscribe
                        </button>

                    </form>
                </div>

                {/* =========================
            BOTTOM FOOTER
        ========================== */}
                <div className="flex w-full flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">

                    <p className="font-serif text-[11px] text-[#666]">
                        © 2026 ZIH Marketing Consultancy. All rights reserved.
                    </p>

                    <div className="flex w-full flex-wrap gap-6 md:w-auto">
                        <Link
                            to="/privacy-policy"
                            className="font-serif text-[11px] text-[#666] transition-colors hover:text-[#202020]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms"
                            className="font-serif text-[11px] text-[#666] transition-colors hover:text-[#202020]"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            to="/cookies"
                            className="font-serif text-[11px] text-[#666] transition-colors hover:text-[#202020]"
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