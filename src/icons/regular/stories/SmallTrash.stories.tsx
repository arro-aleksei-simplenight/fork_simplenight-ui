import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import SmallTrash from '../SmallTrash';

export default {
  title: `${title}SmallTrash`,
  component: SmallTrash,
} as ComponentMeta<typeof SmallTrash>;

const Template: ComponentStory<typeof SmallTrash> = (args) => (
  <SmallTrash {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
