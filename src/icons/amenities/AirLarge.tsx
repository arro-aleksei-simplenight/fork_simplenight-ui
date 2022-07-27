import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#air-large_svg__a)">
      <g clipPath="url(#air-large_svg__b)" fill="currentColor">
        <path d="M9.3 28.8h30.4a8.8 8.8 0 0 0 8.8-8.8V8.8A8.8 8.8 0 0 0 39.7 0H9.3A8.8 8.8 0 0 0 .5 8.8V20a8.8 8.8 0 0 0 8.8 8.8Zm-4-20a4 4 0 0 1 4-4h30.4a4 4 0 0 1 4 4V20a4 4 0 0 1-4 4H9.3a4 4 0 0 1-4-4V8.8ZM15.7 39.2v-4.8h-4.8v4.8a4 4 0 0 1-4 4H4.5V48h2.4a8.8 8.8 0 0 0 8.8-8.8ZM26.9 34.4h-4.8V48h4.8V34.4ZM33.3 34.4v4.8a8.8 8.8 0 0 0 8.8 8.8h2.4v-4.8h-2.4a4 4 0 0 1-4-4v-4.8h-4.8Z" />
        <path d="M13.3 16.8a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM22.9 16.8a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" />
      </g>
    </g>
    <defs>
      <clipPath id="air-large_svg__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h48v48H0z" />
      </clipPath>
      <clipPath id="air-large_svg__b">
        <path fill="#fff" transform="translate(.5)" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAirLarge;
