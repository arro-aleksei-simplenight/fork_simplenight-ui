import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatFlights from '../CatFlights';

export default {
  title: `${title}CatFlights`,
  component: CatFlights,
} as ComponentMeta<typeof CatFlights>;

const Template: ComponentStory<typeof CatFlights> = (args) => (
  <CatFlights {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
