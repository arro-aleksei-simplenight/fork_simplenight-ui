import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import EmptyState from '../EmptyState';

export default {
  title: `${title}EmptyState`,
  component: EmptyState,
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
