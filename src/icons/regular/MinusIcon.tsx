import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" fill="currentColor" />
  </svg>
);

export default SvgMinusIcon;
