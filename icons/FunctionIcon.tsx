/**
 * 
 * @param className - (optional) Styles to apply to the icon.
 * @returns Styled function icon
 */
const FunctionIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 23 23"
    className={className}
    fill="currentColor"
  >
    <g transform="translate(-1.667 -1.667)">
      <path d="M5.848 2.712a1.045 1.045 0 0 0-2.091 0V6.894H1.667v6.273H7.939V6.894H5.848zM10.03 17.348a3.147 3.147 0 0 0 2.091 2.952v4.37h2.091v-4.37a3.127 3.127 0 0 0 2.088-2.952v-2.09H10.03v2.091zm-8.364 0a3.147 3.147 0 0 0 2.091 2.952v4.37h2.09V20.3a3.147 3.147 0 0 0 2.091-2.948v-2.094H1.667v2.091zm20.909-10.454V2.712a1.045 1.045 0 1 0-2.091 0v4.182h-2.091v6.273h6.273V6.894h-2.091zM14.212 2.712a1.045 1.045 0 1 0-2.091 0v4.182h-2.091v6.273H16.3V6.894h-2.088V2.712zm4.182 14.636a3.147 3.147 0 0 0 2.091 2.952v4.37h2.091v-4.37a3.127 3.127 0 0 0 2.091-2.948v-2.09h-6.273v2.09z" />
    </g>
  </svg>
);

export default FunctionIcon;