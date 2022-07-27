import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CatShows from '../CatShows';

export default {
  title: `${title}CatShows`,
  component: CatShows,
} as ComponentMeta<typeof CatShows>;

const Template: ComponentStory<typeof CatShows> = (args) => (
  <CatShows {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
