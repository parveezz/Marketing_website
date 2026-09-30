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
            path: "/services/strategic-marketing",
        },
        {
            name: "Branding",
            path: "/services/branding",
        },
        {
            name: "Advertising",
            path: "/services/advertising",
        },
        {
            name: "Social Media",
            path: "/services/social-media",
        },
        {
            name: "Event Management",
            path: "/services/event-management",
        },
        {
            name: "Public Relations (PR)",
            path: "/services/public-relations",
        },
    ];

    if (!servicesOpen) return null;

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="absolute left-1/2 top-full z-50 pt-2 w-[240px] -translate-x-1/2"
        >
            {/* Invisible hover bridge to eliminate any gap between nav item and menu */}
            <div className="absolute -top-3 left-0 right-0 h-4" />

            <div className="rounded-2xl border border-white/10 bg-[#0e0f11]/95 p-2.5 backdrop-blur-xl">
                {/* Heading */}
                <div className="mb-1.5 px-3 py-1 flex items-center justify-between border-b border-white/10">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#c4f82a]">
                        Capabilities
                    </span>
                </div>

                {/* Clean Service Links */}
                <div className="flex flex-col gap-0.5">
                    {services.map((service) => (
                        <div key={service.name}>
                            <NavLink
                                to={service.path}
                                onClick={() => setServicesOpen(false)}
                                className={({ isActive }) =>
                                    `group flex items-center rounded-xl px-3 py-2 transition-all duration-200 ${isActive
                                        ? "bg-white/10 text-white font-medium"
                                        : "hover:bg-white/5 text-[#d4d4d8] hover:text-white"
                                    }`
                                }
                            >
                                <span className="font-sans text-[13.5px] text-white group-hover:text-[#c4f82a] transition-colors">
                                    {service.name}
                                </span>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesDropdown;

