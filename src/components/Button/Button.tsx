import React from 'react';

export interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => (
  <button className="text-primary-1000" type="button">
    {label}
  </button>
);

export default Button;
