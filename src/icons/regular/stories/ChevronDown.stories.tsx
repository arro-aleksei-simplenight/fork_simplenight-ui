import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ChevronDown from '../ChevronDown';

export default {
  title: `${title}ChevronDown`,
  component: ChevronDown,
} as ComponentMeta<typeof ChevronDown>;

const Template: ComponentStory<typeof ChevronDown> = (args) => (
  <ChevronDown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
