/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled job order icon
 */
const JobOrderIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1-2 0L3 11V7a4 4 0 0 1 4-4h4" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

export default JobOrderIcon;