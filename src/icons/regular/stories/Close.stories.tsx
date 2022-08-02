import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Close from '../Close';

export default {
  title: `${title}Close`,
  component: Close,
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
