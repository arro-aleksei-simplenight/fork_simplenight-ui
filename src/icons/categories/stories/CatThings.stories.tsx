import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatThings from '../CatThings';

export default {
  title: `${title}CatThings`,
  component: CatThings,
} as ComponentMeta<typeof CatThings>;

const Template: ComponentStory<typeof CatThings> = (args) => (
  <CatThings {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
