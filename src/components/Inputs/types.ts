import { type ComponentPropsWithoutRef, type MouseEventHandler } from 'react';

export interface GeneralProps extends ComponentPropsWithoutRef<'input'> {
  inputSize?: 'large' | 'small';
  state?: 'idle' | 'disabled' | 'error' | 'success';
}

export interface SelectOption {
  value: string;
  label: string;
}

export type SelectProps = Omit<
  GeneralProps,
  'value' | 'onChange' | 'defaultValue'
>;

export interface ColorsMap {
  [key: string]: string;
}

export interface ButtonInputProps {
  name?: string;
  size?: 'large' | 'small';
  state?: 'idle' | 'disabled' | 'error' | 'success';
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
