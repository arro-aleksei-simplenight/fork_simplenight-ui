import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import TourActivities from '../TourActivities';

export default {
  title: `${title}TourActivities`,
  component: TourActivities,
} as ComponentMeta<typeof TourActivities>;

const Template: ComponentStory<typeof TourActivities> = (args) => (
  <TourActivities {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
