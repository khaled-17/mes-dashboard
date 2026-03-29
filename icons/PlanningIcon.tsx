/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled planning icon
 */
const PlanningIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 33 33"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="25" r="3" />
    <ellipse cx="26" cy="8.5" rx="3" ry="2.5" />
    <path d="M26.125 11v6.875a6.875 6.875 0 0 1-6.875 6.875h-4.125l4.125-4.125m0 8.25-4.125-4.125" />
    <path d="M6.875 22V15.125a6.875 6.875 0 0 1 6.875-6.875h4.125L13.75 4.125m0 8.25L17.875 8.25" />
  </svg>
);

export default PlanningIcon;