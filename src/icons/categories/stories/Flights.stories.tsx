import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Flights from '../Flights';

export default {
  title: `${title}Flights`,
  component: Flights,
} as ComponentMeta<typeof Flights>;

const Template: ComponentStory<typeof Flights> = (args) => (
  <Flights {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
