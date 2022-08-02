import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import LocationPin from '../LocationPin';

export default {
  title: `${title}LocationPin`,
  component: LocationPin,
} as ComponentMeta<typeof LocationPin>;

const Template: ComponentStory<typeof LocationPin> = (args) => (
  <LocationPin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
