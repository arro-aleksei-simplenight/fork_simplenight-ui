import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ImageEmpty from '../ImageEmpty';

export default {
  title: `${title}ImageEmpty`,
  component: ImageEmpty,
} as ComponentMeta<typeof ImageEmpty>;

const Template: ComponentStory<typeof ImageEmpty> = (args) => (
  <ImageEmpty {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
