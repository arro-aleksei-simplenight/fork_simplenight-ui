import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Person from '../Person';

export default {
  title: `${title}Person`,
  component: Person,
} as ComponentMeta<typeof Person>;

const Template: ComponentStory<typeof Person> = (args) => <Person {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
