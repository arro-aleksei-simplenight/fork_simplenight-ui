import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import InfoCircle from '../InfoCircle';

export default {
  title: `${title}InfoCircle`,
  component: InfoCircle,
} as ComponentMeta<typeof InfoCircle>;

const Template: ComponentStory<typeof InfoCircle> = (args) => (
  <InfoCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
