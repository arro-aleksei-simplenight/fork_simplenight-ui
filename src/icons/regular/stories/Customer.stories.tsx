import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Customer from '../Customer';

export default {
  title: `${title}Customer`,
  component: Customer,
} as ComponentMeta<typeof Customer>;

const Template: ComponentStory<typeof Customer> = (args) => (
  <Customer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
