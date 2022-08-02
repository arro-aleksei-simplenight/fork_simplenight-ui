import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Plus from '../PlusIcon';

export default {
  title: `${title}PlusIcon`,
  component: Plus,
} as ComponentMeta<typeof Plus>;

const Template: ComponentStory<typeof Plus> = (args) => <Plus {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
