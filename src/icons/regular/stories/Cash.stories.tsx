import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Cash from '../Cash';

export default {
  title: `${title}Cash`,
  component: Cash,
} as ComponentMeta<typeof Cash>;

const Template: ComponentStory<typeof Cash> = (args) => <Cash {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
