import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Bags from '../BagsIcon';

export default {
  title: `${title}Bags`,
  component: Bags,
} as ComponentMeta<typeof Bags>;

const Template: ComponentStory<typeof Bags> = (args) => <Bags {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
