import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ShowsEvents from '../ShowsEvents';

export default {
  title: `${title}ShowsEvents`,
  component: ShowsEvents,
} as ComponentMeta<typeof ShowsEvents>;

const Template: ComponentStory<typeof ShowsEvents> = (args) => (
  <ShowsEvents {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
