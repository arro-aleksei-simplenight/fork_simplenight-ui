import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Cross from '../Cross';

export default {
  title: `${title}Cross`,
  component: Cross,
} as ComponentMeta<typeof Cross>;

const Template: ComponentStory<typeof Cross> = (args) => <Cross {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
