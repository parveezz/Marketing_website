import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import ServicesDropdown from "./ServicesDropdown";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative px-1 py-2 font-serif text-sm font-semibold tracking-wide text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#202020] after:content-['']"
      : "relative px-1 py-2 font-serif text-sm font-medium tracking-wide text-[#555] transition-colors duration-300 hover:text-[#202020] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#202020] after:content-[''] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d5d5d5] bg-[#fafafa]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-[1250px] px-5 md:px-8 lg:px-10">
        <div className="flex h-[82px] items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}
          <div className="flex shrink-0 items-center">
            <Link
              to="/"
              className="flex flex-col items-center leading-none text-[#202020]"
            >
              <span className="font-serif text-[34px] font-normal tracking-[8px]">
                ZIH
              </span>

              <span className="mt-1 hidden font-serif text-[8px] font-semibold tracking-[5px] md:block">
                MARKETING CONSULTANCY
              </span>
            </Link>
          </div>

          {/* =========================
              NAVIGATION LINKS
          ========================== */}
          <div className="hidden items-center gap-9 md:flex">

            {/* HOME */}
            <NavLink
              to="/"
              className={linkClass}
              end
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={linkClass}
            >
              About
            </NavLink>

            {/* SERVICES */}
            <div className="relative">

              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="relative px-1 py-2 font-serif text-sm font-medium tracking-wide text-[#555] transition-colors duration-300 hover:text-[#202020]"
              >
                Services

                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#202020] transition-all duration-300 ${servicesOpen ? "w-full" : "w-0"
                    }`}
                />
              </button>

              {/* DROPDOWN */}
              <ServicesDropdown
                servicesOpen={servicesOpen}
                setServicesOpen={setServicesOpen}
              />

            </div>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className={linkClass}
            >
              Contact
            </NavLink>

          </div>

          {/* =========================
              CTA BUTTON
          ========================== */}
          <div className="hidden items-center md:flex">
            <Link
              to="/contact"
              className="border border-[#202020] bg-[#202020] px-6 py-2.5 font-serif text-xs font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-[#202020]"
            >
              Get Started
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-2 text-[#202020] transition-colors duration-300 hover:text-[#666]"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;