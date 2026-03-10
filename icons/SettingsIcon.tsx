/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled settings icon
 */
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 30 30"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path 
      d="M12.688 5.307a2.119 2.119 0 0 1 4.118 0 2.119 2.119 0 0 0 3.163 1.31 2.12 2.12 0 0 1 2.913 2.913 2.119 2.119 0 0 0 1.306 3.158 2.119 2.119 0 0 1 0 4.118 2.119 2.119 0 0 0-1.31 3.163 2.12 2.12 0 0 1-2.913 2.913 2.119 2.119 0 0 0-3.161 1.309 2.119 2.119 0 0 1-4.118 0 2.119 2.119 0 0 0-3.162-1.309 2.12 2.12 0 0 1-2.913-2.913 2.119 2.119 0 0 0-1.309-3.161 2.119 2.119 0 0 1 0-4.118 2.119 2.119 0 0 0 1.31-3.163 2.12 2.12 0 0 1 2.914-2.913 2.117 2.117 0 0 0 3.159-1.309z" 
    />
    <circle cx="14.75" cy="14.75" r="4" />
  </svg>
);

export default SettingsIcon;