import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCompass,
  FiLayers,
  FiZap,
  FiShare2,
  FiCalendar,
  FiRadio,
  FiUsers,
  FiGrid,
  FiArrowRight,
} from "react-icons/fi";

const ServicesDropdown = ({
  servicesOpen,
  setServicesOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const services = [
    {
      name: "Strategic Marketing",
      path: "/services/strategic-marketing",
      icon: FiCompass,
    },
    {
      name: "Branding",
      path: "/services/branding",
      icon: FiLayers,
    },
    {
      name: "Advertising",
      path: "/services/advertising",
      icon: FiZap,
    },
    {
      name: "Social Media",
      path: "/services/social-media",
      icon: FiShare2,
    },
    {
      name: "Event Management",
      path: "/services/event-management",
      icon: FiCalendar,
    },
    {
      name: "Public Relations (PR)",
      path: "/services/public-relations",
      icon: FiRadio,
    },
    {
      name: "Consultation Services",
      path: "/services/consultation-services",
      icon: FiUsers,
    },
    {
      name: "All Services",
      path: "/services",
      icon: FiGrid,
      highlight: true,
    },
  ];

  return (
    <AnimatePresence>
      {servicesOpen && (
        <motion.div
          key="services-dropdown"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-1/2 top-full z-50 pt-2 w-[420px] sm:w-[460px] -translate-x-1/2"
        >
          {/* Invisible hover bridge */}
          <div className="absolute -top-3 left-0 right-0 h-4" />

          <div className="rounded-2xl border border-white/10 bg-[#0e0f11]/95 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
            {/* Heading Header */}
            <div className="mb-1.5 px-2.5 pb-1.5 flex items-center justify-between border-b border-white/10">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                Capabilities
              </span>
              <span className="font-sans text-[10.5px] font-medium text-[#a1a1aa]">
                Practice Areas
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-1">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-200 ${isActive
                        ? "bg-white/10 text-white"
                        : service.highlight
                          ? "hover:bg-[#c4f82a]/5 text-[#d4d4d8] hover:text-white"
                          : "hover:bg-white/5 text-[#d4d4d8] hover:text-white"
                      }`
                    }
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#161618] text-[#a1a1aa] transition-all duration-200 group-hover:border-[#c4f82a]/40 group-hover:bg-[#c4f82a]/10 group-hover:text-[#c4f82a]">
                      <Icon size={13} />
                    </div>

                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="truncate font-sans text-[13px] font-medium text-white transition-colors group-hover:text-[#c4f82a]">
                        {service.name}
                      </span>
                      {service.highlight && (
                        <FiArrowRight
                          size={11}
                          className="text-[#c4f82a] opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesDropdown;