import * as React from 'react';
import { SVGProps } from 'react';

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 7a.667.667 0 0 0-.666.667v4a.666.666 0 0 1-.667.666H2.333a.666.666 0 0 1-.666-.666V2.333a.667.667 0 0 1 .666-.666h4a.667.667 0 0 0 0-1.334h-4a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2v-4A.667.667 0 0 0 13 7ZM3 7.507v2.826a.667.667 0 0 0 .667.667h2.827a.666.666 0 0 0 .473-.193l4.613-4.62 1.893-1.854a.666.666 0 0 0 0-.946L10.647.527a.666.666 0 0 0-.947 0L7.82 2.413l-4.627 4.62A.667.667 0 0 0 3 7.507Zm7.174-5.567 1.886 1.887-.947.946-1.886-1.886.947-.947Zm-5.84 5.84 3.953-3.953 1.886 1.886L6.22 9.667H4.334V7.78Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEdit;