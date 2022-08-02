import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import StarContained from '../StarContained';

export default {
  title: `${title}StarContained`,
  component: StarContained,
} as ComponentMeta<typeof StarContained>;

const Template: ComponentStory<typeof StarContained> = (args) => (
  <StarContained {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
