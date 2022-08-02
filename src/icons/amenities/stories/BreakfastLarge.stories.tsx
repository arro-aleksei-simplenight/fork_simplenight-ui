import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Breakfast from '../Breakfast';

export default {
  title: `${title}Breakfast`,
  component: Breakfast,
} as ComponentMeta<typeof Breakfast>;

const Template: ComponentStory<typeof Breakfast> = (args) => (
  <Breakfast {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
