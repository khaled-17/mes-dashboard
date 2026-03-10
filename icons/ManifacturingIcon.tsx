/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled manufacturing icon
 */
const ManufacturingIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 38.5 38.5"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="30.5" cy="20.993" r="3.5" />
    <ellipse cx="6.5" cy="27.493" rx="3.5" ry="3" />
    <circle cx="21" cy="27.493" r="3" />
    <line x1="6" y1="30.493" x2="21" y2="30.493" />
    <line x1="6" y1="24.493" x2="21" y2="24.493" />
    <path d="M12.831 19.246V11.227h3.208a4.812 4.812 0 0 1 4.812 4.812v8.019" />
    <path d="M8.019 24.058v-3.212A1.6 1.6 0 0 1 9.619 19.246h11.231" />
    <path d="M30.473 17.642V6.415L20.85 17.642" />
  </svg>
);

export default ManufacturingIcon;