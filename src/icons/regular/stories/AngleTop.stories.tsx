import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import AngleTop from '../AngleTop';

export default {
  title: `${title}AngleTop`,
  component: AngleTop,
} as ComponentMeta<typeof AngleTop>;

const Template: ComponentStory<typeof AngleTop> = (args) => (
  <AngleTop {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
