import * as React from 'react';
import { SVGProps } from 'react';

const SvgKingBedSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3.5H4a3 3 0 0 0-3 3v13a1 1 0 0 0 1 1h4a1 1 0 0 0 .83-.45l1.71-2.55h6.92l1.71 2.55a1 1 0 0 0 .83.45h4a1 1 0 0 0 1-1v-13a3 3 0 0 0-3-3Zm1 15h-2.46L16.83 16a.999.999 0 0 0-.83-.5H8a1 1 0 0 0-.83.45L5.46 18.5H3v-5h18v5Zm-14-7v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7Zm6 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 0h-2v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-2 .78 3 3 0 0 0-2-.78H8a3 3 0 0 0-3 3v1H3v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Z"
      fill="#0DADB9"
    />
  </svg>
);

export default SvgKingBedSmall;