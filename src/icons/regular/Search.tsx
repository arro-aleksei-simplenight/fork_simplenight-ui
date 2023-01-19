import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.092 15.908 14 12.842A7.5 7.5 0 1 0 12.842 14l3.066 3.067a.834.834 0 0 0 1.184 0 .833.833 0 0 0 0-1.159ZM8.167 14a5.833 5.833 0 1 1 0-11.666 5.833 5.833 0 0 1 0 11.666Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
