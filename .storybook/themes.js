import { create } from '@storybook/theming';
import logo from './images/logo.png';

const SimplenightTheme = create({
  base: 'light',
  appBg: 'white',
  colorPrimary: '#0DADB9',
  colorSecondary: '#0DADB9',
  brandImage: logo,
  brandTitle: 'Simplenight Design System',
});

export default SimplenightTheme;
