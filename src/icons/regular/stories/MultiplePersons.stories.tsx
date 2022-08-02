import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import MultiplePersons from '../MultiplePersons';

export default {
  title: `${title}MultiplePersons`,
  component: MultiplePersons,
} as ComponentMeta<typeof MultiplePersons>;

const Template: ComponentStory<typeof MultiplePersons> = (args) => (
  <MultiplePersons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
