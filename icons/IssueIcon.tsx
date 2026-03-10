/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled issue icon
 */
const IssueIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 33 33"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16.5 12.375v2.75" />
    <path d="M16.5 20.625v.014" />
    <path d="M6.875 26.125H26.122a2.75 2.75 0 0 0 2.53-3.781L18.892 5.5a2.75 2.75 0 0 0-4.813 0L4.322 22.344a2.75 2.75 0 0 0 2.4 3.781z" />
  </svg>
);

export default IssueIcon;