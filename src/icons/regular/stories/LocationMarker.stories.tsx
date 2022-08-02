import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import LocationMarker from '../LocationMarker';

export default {
  title: `${title}LocationMarker`,
  component: LocationMarker,
} as ComponentMeta<typeof LocationMarker>;

const Template: ComponentStory<typeof LocationMarker> = (args) => (
  <LocationMarker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
