/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled resources icon
 */
const ResourcesIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 37 37"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.625 32.375V12.334L18.5 6.167l13.875 6.167V32.375" />
    <path d="M20.042 20.042h6.167v12.333H10.792v-9.25h9.25" />
    <path d="M20.042 32.375V18.5a1.542 1.542 0 0 0-1.542-1.542h-3.083A1.542 1.542 0 0 0 13.875 18.5v4.625" />
  </svg>
);

export default ResourcesIcon;