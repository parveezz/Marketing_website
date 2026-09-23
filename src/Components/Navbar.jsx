import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import ServicesDropdown from "./ServicesDropdown";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative cursor-pointer px-1 py-2 font-sans text-sm font-medium tracking-wide text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#202020] after:content-['']"
      : "relative cursor-pointer px-1 py-2 font-sans text-sm font-medium tracking-wide text-[#555] transition-colors duration-300 hover:text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#202020] after:content-[''] after:transition-all after:duration-300 hover:after:w-full";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block w-full py-3 font-sans text-lg font-medium text-[#202020] border-b border-[#d5d5d5]"
      : "block w-full py-3 font-sans text-lg font-medium text-[#555] border-b border-[#d5d5d5] transition-colors hover:text-[#202020]";

  return (
    <>
      <nav className={`sticky top-0 z-50 border-b border-[#d5d5d5] transition-colors duration-300 ${mobileMenuOpen ? "bg-[#fafafa]" : "bg-[#fafafa]/95 backdrop-blur-sm"}`}>
        <div className="mx-auto max-w-[1250px] px-5 md:px-8 lg:px-10">
          <div className="flex h-[82px] items-center justify-between">

            {/* =========================
                LOGO
            ========================== */}
            <div className="flex shrink-0 items-center z-[60]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex cursor-pointer flex-col items-center leading-none text-[#202020]"
              >
                <span className="font-sans text-[34px] font-normal tracking-[8px]">
                  ZIH
                </span>
                <span className="mt-1 hidden font-sans text-[8px] font-semibold tracking-[5px] md:block">
                  MARKETING CONSULTANCY
                </span>
              </Link>
            </div>

            {/* =========================
                DESKTOP NAVIGATION LINKS
            ========================== */}
            <div className="hidden items-center gap-9 md:flex">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>

              {/* SERVICES */}
              <div 
                className="relative flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive || servicesOpen
                      ? "relative flex cursor-pointer items-center gap-1.5 px-1 py-2 font-sans text-sm font-medium tracking-wide text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#202020] after:content-['']"
                      : "relative flex cursor-pointer items-center gap-1.5 px-1 py-2 font-sans text-sm font-medium tracking-wide text-[#555] transition-colors duration-300 hover:text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#202020] after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
                  }
                >
                  Services
                  <span className={`text-[9px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
                </NavLink>
                
                {/* DESKTOP DROPDOWN */}
                <ServicesDropdown
                  servicesOpen={servicesOpen}
                  setServicesOpen={setServicesOpen}
                />
              </div>

              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>

            {/* =========================
                CTA BUTTON
            ========================== */}
            <div className="hidden items-center md:flex">
              <Link
                to="/contact"
                className="border border-[#202020] bg-[#202020] px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
              >
                Get Started
              </Link>
            </div>

            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}
            <div className="z-[60] flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#202020] transition-colors duration-300 hover:text-[#666]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE MENU OVERLAY
      ========================== */}
      <div 
        className={`fixed inset-0 z-[40] bg-[#fafafa] transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-20 pt-[100px]">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass} end>Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>About</NavLink>
          
          <div className="w-full border-b border-[#d5d5d5] py-3">
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between font-sans text-lg font-medium text-[#555]"
            >
              Services
              <span className={`text-[12px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            
            {/* MOBILE SERVICES SUB-MENU */}
            <div className={`flex flex-col gap-3 overflow-hidden pl-4 transition-all duration-300 ${servicesOpen ? "mt-4 max-h-[500px]" : "max-h-0"}`}>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="font-sans text-[15px] text-[#444]">All Services</Link>
              <Link to="/services/strategic-marketing" onClick={() => setMobileMenuOpen(false)} className="font-sans text-[15px] text-[#444]">Strategic Marketing</Link>
              <Link to="/services/branding" onClick={() => setMobileMenuOpen(false)} className="font-sans text-[15px] text-[#444]">Branding</Link>
              <Link to="/services/advertising" onClick={() => setMobileMenuOpen(false)} className="font-sans text-[15px] text-[#444]">Advertising</Link>
              <Link to="/services/social-media" onClick={() => setMobileMenuOpen(false)} className="font-sans text-[15px] text-[#444]">Social Media</Link>
            </div>
          </div>

          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>Contact</NavLink>
          
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 block w-full border border-[#202020] bg-[#202020] py-4 text-center font-sans text-xs font-semibold uppercase tracking-[1px] text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;