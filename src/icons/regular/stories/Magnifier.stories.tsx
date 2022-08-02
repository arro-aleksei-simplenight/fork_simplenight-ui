import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Magnifier from '../Magnifier';

export default {
  title: `${title}Magnifier`,
  component: Magnifier,
} as ComponentMeta<typeof Magnifier>;

const Template: ComponentStory<typeof Magnifier> = (args) => (
  <Magnifier {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
