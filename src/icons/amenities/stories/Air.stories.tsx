import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Air from '../Air';

export default {
  title: `${title}Air`,
  component: Air,
} as ComponentMeta<typeof Air>;

const Template: ComponentStory<typeof Air> = (args) => <Air {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
