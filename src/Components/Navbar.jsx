import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import ZihLogo from "./Common/ZihLogo";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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

  const navLinkClass = ({ isActive }) =>
    `rounded-full font-sans text-[13.5px] font-medium transition-all duration-200 px-6 py-1.5 ${isActive
      ? "bg-white/10 text-white"
      : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full py-3.5 font-sans text-lg font-medium border-b border-white/10 transition-colors ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"
    }`;

  return (
    <>
      <nav
        className={`sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md transition-colors duration-300 ${mobileMenuOpen ? "bg-[#0a0a0a]" : ""}`}
      >
        <div className="mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex h-[76px] items-center justify-between">

            {/* =========================================================
                LEFT: BRAND LOGO (TIMES NEW ROMAN Z|H WITH WHITE BG)
            ========================================================== */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center cursor-pointer z-[60] py-1"
              aria-label="ZIH Home"
            >
              <ZihLogo
                size="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px]"
                className="text-white transition-opacity hover:opacity-85"
              />
            </Link>

            {/* =========================================================
                CENTER: NAVIGATION LINKS (ENCLOSED PILL BACKGROUND)
            ========================================================== */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#141215]/90 p-1.5 backdrop-blur-md">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* SERVICES WITH DROPDOWN */}
              <div
                className="relative flex items-center"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 rounded-full font-sans text-[13.5px] font-medium transition-all duration-200 px-6 py-1.5 ${isActive || servicesOpen
                      ? "bg-white/10 text-white"
                      : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  Services
                  <span
                    className={`text-[8px] inline-block transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </NavLink>

                {/* Dropdown Menu */}
                <ServicesDropdown
                  servicesOpen={servicesOpen}
                  setServicesOpen={setServicesOpen}
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                />
              </div>

              <NavLink to="/our-work" className={navLinkClass}>
                Work
              </NavLink>

            </div>

            {/* =========================================================
                RIGHT: NEON CTA BUTTON
            ========================================================== */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-block rounded-xl bg-[#c4f82a] px-5 py-2.5 font-sans text-[14px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-[1.04] active:scale-[0.97] cursor-pointer"
              >
                Contact Us
              </Link>
            </div>

            {/* =========================================================
                MOBILE MENU BUTTON
            ========================================================== */}
            <div className="z-[60] flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white transition-colors hover:text-[#c4f82a]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[40] bg-[#0a0a0a] md:hidden">
          <div className="flex h-full flex-col overflow-y-auto px-6 pb-20 pt-[100px]">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass} end>
              Home
            </NavLink>

            <div className="w-full border-b border-white/10 py-3.5">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between font-sans text-lg font-medium text-[#a1a1aa]"
              >
                Services
                <span
                  className={`text-[12px] inline-block transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {/* Mobile Services Sub-menu */}
              {servicesOpen && (
                <div className="overflow-hidden">
                  <div className="mt-4 flex flex-col gap-3 pl-4">
                    <NavLink
                      to="/services"
                      end
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      All Services
                    </NavLink>
                    <NavLink
                      to="/services/strategic-marketing"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Strategic Marketing
                    </NavLink>
                    <NavLink
                      to="/services/branding"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Branding
                    </NavLink>
                    <NavLink
                      to="/services/advertising"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Advertising
                    </NavLink>
                    <NavLink
                      to="/services/social-media"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Social Media
                    </NavLink>
                    <NavLink
                      to="/services/event-management"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Event Management
                    </NavLink>
                    <NavLink
                      to="/services/public-relations"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Public Relations (PR)
                    </NavLink>
                    <NavLink
                      to="/services/consultation-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-1 font-sans text-[15px] ${isActive ? "text-white" : "text-[#a1a1aa] hover:text-white"}`
                      }
                    >
                      Consultation Services
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/our-work" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
              Work
            </NavLink>

            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass}>
              About
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 block w-full rounded-xl bg-[#c4f82a] py-3.5 text-center font-sans text-sm font-semibold text-black transition-all hover:bg-[#b0f516]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
