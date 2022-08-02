import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CreditCard from '../CreditCard';

export default {
  title: `${title}CreditCard`,
  component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
