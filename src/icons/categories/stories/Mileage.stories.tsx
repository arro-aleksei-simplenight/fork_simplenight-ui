import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Mileage from '../Mileage';

export default {
  title: `${title}Mileage`,
  component: Mileage,
} as ComponentMeta<typeof Mileage>;

const Template: ComponentStory<typeof Mileage> = (args) => (
  <Mileage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
