import { Link } from "react-router-dom";
import SEO from "../Components/SEO";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="relative min-h-[calc(100vh-76px)] w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 overflow-hidden">
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been moved."
      />

      {/* Background Vertical Grid Guide Lines (12 Columns) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 md:grid-cols-12 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.04] h-full" />
        ))}
      </div>

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-[#c4f82a]/5 blur-[120px] z-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161618]/80 px-3.5 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]" />
          <span className="font-sans text-[11.5px] font-medium tracking-wide text-[#fafafa]">
            Error 404 • Page Not Found
          </span>
        </div>

        {/* Large 404 Display */}
        <h1 className="font-sans text-[72px] sm:text-[96px] md:text-[112px] font-bold tracking-tight text-white leading-none">
          4<span className="text-[#c4f82a]">0</span>4
        </h1>

        {/* Headline */}
        <h2 className="mt-3 font-sans text-[22px] sm:text-[26px] font-semibold text-[#fafafa] tracking-tight">
          Lost in the digital landscape?
        </h2>

        {/* Description */}
        <p className="mt-3 font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#a1a1aa] max-w-md">
          The page you are looking for might have been moved, removed, or never existed. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#c4f82a] px-6 py-3 font-sans text-[13.5px] font-semibold text-black transition-all duration-200 hover:bg-[#b0f516] hover:scale-105 cursor-pointer shadow-lg"
          >
            <FiHome className="text-base" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-white/15 bg-[#141215]/80 px-6 py-3 font-sans text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 cursor-pointer backdrop-blur-md"
          >
            <FiArrowLeft className="text-base" />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Helpful links strip */}
        <div className="mt-12 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px] font-sans text-[#a1a1aa]">
          <span>Helpful links:</span>
          <Link to="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/our-work" className="hover:text-white transition-colors">
            Our Work
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
