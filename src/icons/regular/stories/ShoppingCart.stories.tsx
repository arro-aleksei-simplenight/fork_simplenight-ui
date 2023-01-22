import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ShoppingCart from '../ShoppingCart';

export default {
  title: `${title}ShoppingCart`,
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (args) => (
  <ShoppingCart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
