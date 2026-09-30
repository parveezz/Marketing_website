import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SEO from "../../Components/SEO";
import Testimonials from "../../Components/Home/Testimonials";
import HomeCTA from "../../Components/Home/HomeCTA";

const EventManagement = () => {
    const services = [
        {
            title: "Corporate Conclaves & Leadership Summits",
            description: "From international business summits to industry roundtables and award galas, we deliver turnkey stage fabrication, VIP protocol management, panel moderation setups, and high-prestige executive staging."
        },
        {
            title: "Sports Tournaments & Athletic Meets",
            description: "Complete sports event orchestration at stadium scale—including perimeter branding, athlete holding zones, digital live scoring displays, medal ceremonies, and fast-paced sports media capture."
        },
        {
            title: "Institutional Ceremonies & Annual Days",
            description: "Grand annual day productions, investiture ceremonies, and convocation spectacles with theatrical lighting, calibrated acoustics, synchronized stage cues, and dignified ceremonial execution."
        },
        {
            title: "Experiential Brand Activations",
            description: "Immersive pop-up pavilions, experiential product reveals, and sponsor engagement zones designed to capture footfall, spark organic social sharing, and create memorable brand touchpoints."
        },
        {
            title: "Real-Time Media & Broadcast Production",
            description: "On-site multi-camera video crews, drone cinematography, and live editing suites delivering cinematic highlight reels and high-res photo albums for immediate press and social distribution within hours."
        }
    ];

    const eventPillars = [
        "360° Stage & Audio-Visual Fabrication",
        "Turnkey On-Ground Crowd & VIP Logistics",
        "Real-Time Multi-Cam Photo & Reel Engine",
        "Sponsor Branding & Stadium Signage"
    ];

    return (
        <main className="relative w-full bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
            <SEO
                title="Event Management & Production Services | ZIH"
                description="Turnkey event management, stagecraft, corporate conclaves, sports tournaments, and live media production led by Syed Zubair Hafeez."
            />

            {/* Background Vertical Grid Guide Lines (12 Columns) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-white/[0.04] h-full" />
                ))}
            </div>

            {/* Redesigned Hero: Left-Side Bright Framed Image & Right-Side Text */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-12 sm:py-16 md:py-20 bg-[#0c0a09]">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: High-Clarity, Enhanced Brightness Framed Image */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141215] group">
                            <img
                                src="/images/project-conclave-main.jpg"
                                alt="High-Profile Event Management & Production"
                                fetchPriority="high"
                                decoding="async"
                                width="800"
                                height="600"
                                className="w-full aspect-[4/3] object-cover transition-all duration-700 brightness-[1.08] contrast-[1.06] saturate-[1.1] group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Narrative, Pillars & CTA */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
                            <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                Experiential Production • Live Operations
                            </span>
                        </div>

                        <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-[#fafafa] leading-[1.15] mb-4">
                            Immersive events, grand stagecraft, and live production.
                        </h1>

                        <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] mb-6 max-w-xl">
                            We bring brands into the physical realm with precision-engineered event production. From massive stadium tournaments and high-stakes corporate conclaves to prestigious school ceremonies, we manage every detail from concept to live broadcast.
                        </p>

                        {/* Event Pillars Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                            {eventPillars.map((pillar, i) => (
                                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#141215]/80 px-3 py-2.5">
                                    <FiCheck className="text-[#c4f82a] text-sm shrink-0" />
                                    <span className="font-sans text-[12px] font-medium text-[#d4d4d8]">{pillar}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Link */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#c4f82a] px-6 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105"
                            >
                                <span>Plan Your Event</span>
                                <FiArrowUpRight className="text-base" />
                            </Link>

                            <Link
                                to="/our-work"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-sans text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-white/10"
                            >
                                <span>View Event Portfolio</span>
                                <FiArrowUpRight className="text-sm text-[#a1a1aa]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Expertise Breakdown */}
            <section className="relative z-10 w-full border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Narrative, Deliverables Checklist & Mandate */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3 py-0.5 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[11px] font-medium tracking-wide text-[#fafafa]">
                                    Live Capabilities
                                </span>
                            </div>
                            <h2 className="font-sans text-[24px] sm:text-[30px] font-semibold text-white tracking-tight">
                                Turn key Event Staging & Production
                            </h2>
                            <div className="mt-4 space-y-3 font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#a1a1aa]">
                                <p>
                                    Live events offer no second chances. Every cue, light sequence, microphone frequency, and stage transition must perform flawlessly in real time.
                                </p>
                                <p>
                                    We provide end-to-end production management: from 3D stage visualization and acoustic engineering to backstage artist coordination, delegate hospitality, and rapid-turnaround post-production media delivery.
                                </p>
                            </div>

                            {/* Tangible Deliverables Checklist */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-[#141215]/60 p-4">
                                <p className="mb-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#d4d4d8]">
                                    Turnkey Event Deliverables:
                                </p>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Custom Stage Architecture, LED Wall Displays & Dynamic Lighting</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Acoustic Rigging & Multi-Zone Sound Engineering</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Real-Time Multi-Cam Recording & On-Site Reels Generation</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>Perimeter Stadium Branding & Sponsor Activation Stands</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#d4d4d8]">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4f82a]" />
                                        <span>VIP Protocol, Green Room Logistics & Crowd Flow Routing</span>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Benchmarks */}
                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-[#c4f82a]">50K+</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Attendees Managed</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">100%</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">AV Reliability Rate</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-[#141215]/40 p-3.5">
                                    <p className="font-sans text-[18px] sm:text-[20px] font-bold text-white">&lt; 12 hrs</p>
                                    <p className="mt-0.5 font-sans text-[11px] leading-snug text-[#a1a1aa]">Live Reel Delivery</p>
                                </div>
                            </div>

                            {/* Event Formats Handled */}
                            <div className="mt-5">
                                <p className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                                    Specialized Event Formats
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        "School & College Events",
                                        "Sports Events & Tournaments",
                                        "Real Estate Events",
                                        "Gated Community Events",
                                        "Collaborations with Expos",
                                        "New Launches & Opening Events",
                                        "Cultural Events",
                                        "Personal Events (Anniversaries & Birthdays)"
                                    ].map((format) => (
                                        <span
                                            key={format}
                                            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-sans text-[11px] text-[#d4d4d8]"
                                        >
                                            {format}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#141215]/80 p-4.5">
                            <p className="font-sans text-[12.5px] italic text-[#d4d4d8] leading-relaxed">
                                &ldquo;An event is not merely a gathering—it is a live embodiment of your brand&apos;s dignity and prestige. Every second of execution must command respect.&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
                                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-wider text-[#c4f82a]">
                                    Syed Zubair Hafeez • Production Philosophy
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 5 Capabilities Detailed */}
                    <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
                        {services.map((service, index) => (
                            <div key={service.title} className="py-6 first:pt-0 last:pb-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="font-sans text-[11px] font-bold text-[#c4f82a]">
                                                0{index + 1}
                                            </span>
                                            <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-white">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2.5 font-sans text-[13.5px] leading-relaxed text-[#a1a1aa] max-w-2xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <HomeCTA />
        </main>
    );
};

export default EventManagement;
