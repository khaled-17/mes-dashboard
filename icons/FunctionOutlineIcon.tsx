/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled function outline icon
 */
const FunctionOutlineIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 22 22"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="7" width="3" height="4" />
    <rect x="4" y="13" width="3" height="1" />
    <line x1="6" y1="4" x2="6" y2="7" />
    <line x1="6" y1="13" x2="6" y2="18" />

    <rect x="9" y="7" width="4" height="4" />
    <rect x="9" y="13" width="4" height="1" />
    <line x1="11" y1="4" x2="11" y2="7" />
    <line x1="11" y1="13" x2="11" y2="18" />

    <rect x="15" y="7" width="3" height="4" />
    <rect x="15" y="13" width="3" height="1" />
    <line x1="17" y1="4" x2="17" y2="7" />
    <line x1="17" y1="14" x2="17" y2="18" />
  </svg>
);

export default FunctionOutlineIcon;