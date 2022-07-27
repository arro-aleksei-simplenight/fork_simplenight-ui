import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Info from '../Info';

export default {
  title: `${title}Info`,
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
