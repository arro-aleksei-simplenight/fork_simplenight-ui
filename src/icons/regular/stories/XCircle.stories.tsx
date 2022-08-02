import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import XCircle from '../XCircle';

export default {
  title: `${title}XCircle`,
  component: XCircle,
} as ComponentMeta<typeof XCircle>;

const Template: ComponentStory<typeof XCircle> = (args) => (
  <XCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
