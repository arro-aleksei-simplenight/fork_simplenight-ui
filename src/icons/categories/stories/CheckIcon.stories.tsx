import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CheckIcon from '../CheckIcon';

export default {
  title: `${title}CheckIcon`,
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = (args) => (
  <CheckIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
