import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import AllInclusive from '../AllInclusive';

export default {
  title: `${title}AllInclusive`,
  component: AllInclusive,
} as ComponentMeta<typeof AllInclusive>;

const Template: ComponentStory<typeof AllInclusive> = (args) => (
  <AllInclusive {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
