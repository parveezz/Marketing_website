/**
 * ZIH Logo Component
 * Uses Times New Roman font for 'Z' and 'H' with the custom downward pencil icon in the center.
 * Features white background and black text or customizable via props.
 */
export const ZihLogo = ({
  className = "text-white",
  size = "text-[22px] sm:text-[24px]",
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center font-serif tracking-normal select-none transition-colors ${className}`}
      style={{ fontFamily: "'Times New Roman', Times, 'Nimbus Roman No9 L', serif" }}
      aria-label="ZIH Logo"
      {...props}
    >
      {/* Letter Z in Times New Roman */}
      <span className={`${size} font-normal leading-none`}>Z</span>

      {/* Center Pencil / Stylus Icon */}
      <span className="inline-flex items-center justify-center px-1 sm:px-1.5">
        <svg
          viewBox="0 0 10 40"
          className="h-[1.12em] w-auto overflow-visible"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pencil Shaft & Downward Pointed Tip */}
          <path d="M 3.2 2 H 6.8 V 28.5 L 5 37.5 L 3.2 28.5 Z" />
        </svg>
      </span>

      {/* Letter H in Times New Roman */}
      <span className={`${size} font-normal leading-none`}>H</span>
    </div>
  );
};

/**
 * SVG-only standalone vector for favicon / export
 */
export const ZihLogoSvg = ({
  className = "h-8 w-auto text-black",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 120 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ZIH Logo"
      {...props}
    >
      {/* Times New Roman 'Z' */}
      <text
        x="12"
        y="33"
        fontFamily="'Times New Roman', Times, serif"
        fontSize="36"
        fill="currentColor"
      >
        Z
      </text>

      {/* Center Pencil Icon */}
      <path
        d="M 54.2 6 H 57.8 V 29.5 L 56 38.5 L 54.2 29.5 Z"
        fill="currentColor"
      />

      {/* Times New Roman 'H' */}
      <text
        x="68"
        y="33"
        fontFamily="'Times New Roman', Times, serif"
        fontSize="36"
        fill="currentColor"
      >
        H
      </text>
    </svg>
  );
};

export default ZihLogo;
