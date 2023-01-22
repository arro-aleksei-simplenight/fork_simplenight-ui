import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ChevronUp from '../ChevronUp';

export default {
  title: `${title}ChevronUp`,
  component: ChevronUp,
} as ComponentMeta<typeof ChevronUp>;

const Template: ComponentStory<typeof ChevronUp> = (args) => (
  <ChevronUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
