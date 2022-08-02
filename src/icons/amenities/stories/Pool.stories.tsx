import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Pool from '../Pool';

export default {
  title: `${title}Pool`,
  component: Pool,
} as ComponentMeta<typeof Pool>;

const Template: ComponentStory<typeof Pool> = (args) => <Pool {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
