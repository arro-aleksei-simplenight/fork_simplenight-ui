import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Edit from '../Edit';

export default {
  title: `${title}Edit`,
  component: Edit,
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args) => <Edit {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
