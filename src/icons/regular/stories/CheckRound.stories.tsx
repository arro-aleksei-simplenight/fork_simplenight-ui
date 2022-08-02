import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CheckRound from '../CheckRound';

export default {
  title: `${title}CheckRound`,
  component: CheckRound,
} as ComponentMeta<typeof CheckRound>;

const Template: ComponentStory<typeof CheckRound> = (args) => (
  <CheckRound {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
