import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import OrderLookupIcon from '../OrderLookupIcon';

export default {
  title: `${title}OrderLookupIcon`,
  component: OrderLookupIcon,
} as ComponentMeta<typeof OrderLookupIcon>;

const Template: ComponentStory<typeof OrderLookupIcon> = (args) => (
  <OrderLookupIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
