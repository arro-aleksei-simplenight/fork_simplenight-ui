import React from 'react';

export interface IButton {
  label: string;
  children: React.ReactNode;
}

const Button = ({ label, children }: IButton) => (
  <button className="text-primary-1000" type="button">
    {children}
    {label}
  </button>
);

export default Button;
