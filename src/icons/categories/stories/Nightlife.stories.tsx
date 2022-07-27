import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Nightlife from '../Nightlife';

export default {
  title: `${title}Nightlife`,
  component: Nightlife,
} as ComponentMeta<typeof Nightlife>;

const Template: ComponentStory<typeof Nightlife> = (args) => (
  <Nightlife {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
