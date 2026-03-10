/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled material icon
 */
const MaterialIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 21c.5-4.5 2.5-8 7-10" />
    <path d="M9 18c6.218 0 10.5-3.288 11-12V4H15.986c-9 0-11.986 4-12 9a6.464 6.464 0 0 0 2 5h3z" />
  </svg>
);

export default MaterialIcon;