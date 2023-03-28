import { SVGProps } from 'react';

export interface ImageProps extends SVGProps<SVGSVGElement> {
  variant?: 'primary' | 'dark' | 'error' | 'warning';
}
