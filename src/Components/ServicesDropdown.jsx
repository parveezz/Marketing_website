import { Link } from "react-router-dom";

const ServicesDropdown = ({
    servicesOpen,
    setServicesOpen,
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
    ];

    return (
        <div
            className={`absolute left-1/2 top-full z-50 w-[230px] -translate-x-1/2 border border-border bg-surface-muted px-5 py-6 transition-all duration-300 ${servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
        >
            {/* Heading */}
            <p className="mb-6 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-text-main">
                Services
            </p>

            {/* Links */}
            <div className="flex flex-col gap-5">
                {services.map((service) => (
                    <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        className="w-fit font-sans text-[15px] text-text-main transition-colors duration-300 hover:text-text-muted"
                    >
                        {service.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesDropdown;