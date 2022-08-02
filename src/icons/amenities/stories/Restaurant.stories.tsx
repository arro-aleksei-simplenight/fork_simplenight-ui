import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Restaurant from '../Restaurant';

export default {
  title: `${title}Restaurant`,
  component: Restaurant,
} as ComponentMeta<typeof Restaurant>;

const Template: ComponentStory<typeof Restaurant> = (args) => (
  <Restaurant {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
