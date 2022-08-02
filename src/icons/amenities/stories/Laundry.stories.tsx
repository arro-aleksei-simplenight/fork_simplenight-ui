import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Laundry from '../Laundry';

export default {
  title: `${title}Laundry`,
  component: Laundry,
} as ComponentMeta<typeof Laundry>;

const Template: ComponentStory<typeof Laundry> = (args) => (
  <Laundry {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
