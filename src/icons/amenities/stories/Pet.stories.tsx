import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Pet from '../Pet';

export default {
  title: `${title}Pet`,
  component: Pet,
} as ComponentMeta<typeof Pet>;

const Template: ComponentStory<typeof Pet> = (args) => <Pet {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
