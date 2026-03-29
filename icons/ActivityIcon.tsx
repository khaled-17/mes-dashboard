/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled activity icon
 */
const ActivityIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 22 22"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.75 11h3.667l2.75 7.333L12.833 3.667l2.75 7.333H19.25" />
  </svg>
);
export default ActivityIcon;