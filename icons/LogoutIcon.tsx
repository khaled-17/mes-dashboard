/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled logout icon
 */
const LogoutIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 31 31"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.083 10.334V7.75A2.583 2.583 0 0 0 15.5 5.167H6.458A2.583 2.583 0 0 0 3.875 7.75v15.5a2.583 2.583 0 0 0 2.583 2.583h9.042a2.583 2.583 0 0 0 2.583-2.583v-2.584" />
    <path d="M9.042 15.5H27.125L23.25 11.625m0 7.75 3.875-3.875" />
  </svg>
);

export default LogoutIcon;