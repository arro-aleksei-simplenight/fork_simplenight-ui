import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import StarOutlined from '../StarOutlined';

export default {
  title: `${title}StarOutlined`,
  component: StarOutlined,
} as ComponentMeta<typeof StarOutlined>;

const Template: ComponentStory<typeof StarOutlined> = (args) => (
  <StarOutlined {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
