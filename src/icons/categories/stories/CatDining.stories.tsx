import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatDining from '../CatDining';

export default {
  title: `${title}CatDining`,
  component: CatDining,
} as ComponentMeta<typeof CatDining>;

const Template: ComponentStory<typeof CatDining> = (args) => (
  <CatDining {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
