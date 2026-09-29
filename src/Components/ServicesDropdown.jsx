import { NavLink } from "react-router-dom";

const ServicesDropdown = ({
    servicesOpen,
    setServicesOpen,
    onMouseEnter,
    onMouseLeave,
}) => {
    const services = [
        {
            name: "Strategic Marketing",
            desc: "Market research, GTM & growth architecture",
            path: "/services/strategic-marketing",
        },
        {
            name: "Branding",
            desc: "Identity design, voice & visual direction",
            path: "/services/branding",
        },
        {
            name: "Advertising",
            desc: "High-ROI paid search, social & display ads",
            path: "/services/advertising",
        },
        {
            name: "Social Media",
            desc: "Content creation, community & brand authority",
            path: "/services/social-media",
        },
    ];

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`absolute left-1/2 top-full z-50 pt-2 w-[320px] sm:w-[340px] -translate-x-1/2 transition-all duration-200 ${
                servicesOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1 pointer-events-none"
            }`}
        >
            {/* Invisible hover bridge to eliminate any gap between nav item and menu */}
            <div className="absolute -top-3 left-0 right-0 h-4" />

            <div className="rounded-2xl border border-white/10 bg-[#0e0f11]/95 p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {/* Heading */}
                <div className="mb-2.5 px-3 flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                        Capabilities
                    </span>
                    <span className="font-sans text-[10.5px] font-medium text-[#a1a1aa]">
                        4 Practice Areas
                    </span>
                </div>

                {/* Links with Descriptions */}
                <div className="flex flex-col gap-1">
                    {services.map((service) => (
                        <NavLink
                            key={service.name}
                            to={service.path}
                            onClick={() => setServicesOpen(false)}
                            className={({ isActive }) => 
                                `group flex flex-col rounded-xl px-3 py-2.5 transition-all duration-200 ${
                                    isActive
                                        ? "bg-white/10 text-white"
                                        : "hover:bg-white/5 text-[#d4d4d8]"
                                }`
                            }
                        >
                            <span className="font-sans text-[14px] sm:text-[14.5px] font-semibold text-white group-hover:text-[#c4f82a] transition-colors">
                                {service.name}
                            </span>
                            <span className="mt-0.5 font-sans text-[12px] text-[#a1a1aa] leading-snug">
                                {service.desc}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesDropdown;