import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Dining from '../Dining';

export default {
  title: `${title}Dining`,
  component: Dining,
} as ComponentMeta<typeof Dining>;

const Template: ComponentStory<typeof Dining> = (args) => <Dining {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
