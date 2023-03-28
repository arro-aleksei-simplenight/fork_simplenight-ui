import { SVGProps } from 'react';

export interface ImageProps {
  variant?: 'primary' | 'dark' | 'error' | 'warning';
  props: SVGProps<SVGSVGElement>;
}
