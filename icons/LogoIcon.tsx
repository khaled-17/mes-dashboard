/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled logo icon
 */
const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 72 54"
    className={className}
    fill="currentColor"
  >
    <path d="M0 54.029h22.419V0L0 18.616z" />
    <path d="M24.765 54.029h22.419V0l-22.419 18.616z" />
    <path d="M49.531 54.029h22.419V0l-22.419 18.616z" />
  </svg>
);

export default LogoIcon;