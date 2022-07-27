import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.4 14.4h15.2A4.4 4.4 0 0 0 24 10V4.4A4.4 4.4 0 0 0 19.6 0H4.4A4.4 4.4 0 0 0 0 4.4V10a4.4 4.4 0 0 0 4.4 4.4Zm-2-10a2 2 0 0 1 2-2h15.2a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2H4.4a2 2 0 0 1-2-2V4.4ZM7.6 19.6v-2.4H5.2v2.4a2 2 0 0 1-2 2H2V24h1.2a4.4 4.4 0 0 0 4.4-4.4ZM13.2 17.2h-2.4V24h2.4v-6.8ZM16.4 17.2v2.4a4.4 4.4 0 0 0 4.4 4.4H22v-2.4h-1.2a2 2 0 0 1-2-2v-2.4h-2.4Z"
      fill="#0DADB9"
    />
    <path
      d="M6.4 8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM11.2 8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
      fill="#0DADB9"
    />
  </svg>
);

export default SvgAirSmall;
