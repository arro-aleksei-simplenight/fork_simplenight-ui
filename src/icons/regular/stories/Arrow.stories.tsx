import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Arrow from '../Arrow';

export default {
  title: `${title}Arrow`,
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
