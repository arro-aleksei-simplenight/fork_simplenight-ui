import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatCars from '../CatCars';

export default {
  title: `${title}CatCars`,
  component: CatCars,
} as ComponentMeta<typeof CatCars>;

const Template: ComponentStory<typeof CatCars> = (args) => (
  <CatCars {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
