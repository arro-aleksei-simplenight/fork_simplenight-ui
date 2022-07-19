import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifiSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.904 15.007a3 3 0 1 0 0 5.998 3 3 0 0 0 0-5.998Zm0 4a1 1 0 1 1 0-2.002 1 1 0 0 1 0 2.002Zm0-8a7.06 7.06 0 0 0-4.95 2.05 1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0 5 5 0 0 1 7.08 0 1 1 0 0 0 .7.3 1 1 0 0 0 .76-1.71 7.06 7.06 0 0 0-5-2.05Zm0-4a11.08 11.08 0 0 0-7.78 3.22 1.004 1.004 0 1 0 1.42 1.42 9 9 0 0 1 12.72 0 1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71 11.08 11.08 0 0 0-7.78-3.22Zm10.61.39a15 15 0 0 0-21.22 0 1.004 1.004 0 0 0 1.42 1.42 13 13 0 0 1 18.38 0 1 1 0 0 0 1.639-.326 1 1 0 0 0-.219-1.094Z"
      fill="#0DADB9"
    />
  </svg>
);

export default SvgWifiSmall;
