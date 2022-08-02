import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import HamburgerMenuButton from '../HamburgerMenuButton';

export default {
  title: `${title}HamburgerMenuButton`,
  component: HamburgerMenuButton,
} as ComponentMeta<typeof HamburgerMenuButton>;

const Template: ComponentStory<typeof HamburgerMenuButton> = (args) => (
  <HamburgerMenuButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
