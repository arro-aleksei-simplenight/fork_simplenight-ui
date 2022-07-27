import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatHotels from '../CatHotels';

export default {
  title: `${title}CatHotels`,
  component: CatHotels,
} as ComponentMeta<typeof CatHotels>;

const Template: ComponentStory<typeof CatHotels> = (args) => (
  <CatHotels {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
