import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import PhoneCall from '../PhoneCall';

export default {
  title: `${title}PhoneCall`,
  component: PhoneCall,
} as ComponentMeta<typeof PhoneCall>;

const Template: ComponentStory<typeof PhoneCall> = (args) => (
  <PhoneCall {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
