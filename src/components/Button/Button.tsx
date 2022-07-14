import React from 'react';

export interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => <button type="button">{label}</button>;

export default Button;
