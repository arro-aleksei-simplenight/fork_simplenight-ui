import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Email from '../Email';

export default {
  title: `${title}Email`,
  component: Email,
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
