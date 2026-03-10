/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled route icon
 */
const RouteIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 22 22"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="5.5" cy="17.5" r="1.5" />
    
    <circle cx="16.5" cy="4.5" r="1.5" />
    
    <path d="M11 17.416h4.125a3.208 3.208 0 1 0 0-6.417H7.791a3.208 3.208 0 1 1 0-6.417h3.208" />
  </svg>
);

export default RouteIcon;