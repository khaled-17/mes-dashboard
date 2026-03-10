/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled performance icon
 */
const PerformanceIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="14" cy="6" r="2" />
    <path d="M4 6h8M16 6h4" />
    <circle cx="8" cy="12" r="2" />
    <path d="M4 12h2M10 12h10" />
    <circle cx="17" cy="18" r="2" />
    <path d="M4 18h11M19 18h1" />
  </svg>
);
export default PerformanceIcon
