/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled machine icon
 */
const MachineIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 30.261 30.261"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.062 12.705h3.643V9.062l-4.25-4.25a7.286 7.286 0 0 1 9.715 9.715l7.286 7.286a2.576 2.576 0 0 1-3.643 3.643l-7.286-7.286a7.286 7.286 0 0 1-9.715-9.715l4.25 4.25" />
  </svg>
);

export default MachineIcon;