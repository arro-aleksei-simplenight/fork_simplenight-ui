import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import List from '../List';

export default {
  title: `${title}List`,
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
