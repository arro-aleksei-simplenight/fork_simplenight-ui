import * as React from 'react';
import { SVGProps } from 'react';
const SvgCatShows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cat-shows_svg__a)" fill="currentColor">
      <path d="M18.428 7.134a1 1 0 0 0 .366-1.366l-2-3.464a1 1 0 0 0-1.366-.366l-13.856 8a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366 1 1 0 0 1 1 1.732 1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l13.856-8a1 1 0 0 0 .366-1.366l-2-3.464a1 1 0 0 0-1.366-.366 1 1 0 1 1-1-1.732Zm-1.776-1.076a3 3 0 0 0 2.82 4.884l1.09 1.888-6.928 4a1 1 0 0 0-1.732 1l-3.464 2-1.09-1.888a3 3 0 0 0-2.82-4.884l-1.09-1.888 3.464-2a1 1 0 0 0 1.732-1l6.928-4 1.09 1.888Z" />
      <path d="M13.822 9.72a.314.314 0 0 0-.159-.076.292.292 0 0 0-.17.023l-1.606.627-1.472-1.022a.309.309 0 0 0-.16-.057.29.29 0 0 0-.276.16.31.31 0 0 0-.031.166l.147 1.784-1.344 1.08a.293.293 0 0 0-.095.136.315.315 0 0 0 .213.404l1.699.468.63 1.692c.02.057.054.108.1.147a.314.314 0 0 0 .16.071.292.292 0 0 0 .291-.145l.905-1.489 1.742-.039a.27.27 0 0 0 .138-.036.291.291 0 0 0 .123-.14.312.312 0 0 0 .02-.172.327.327 0 0 0-.073-.16l-1.15-1.392.445-1.705a.327.327 0 0 0-.077-.325Z" />
    </g>
    <defs>
      <clipPath id="cat-shows_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatShows;
