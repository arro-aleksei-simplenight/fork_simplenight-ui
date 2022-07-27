import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ShowAll from '../ShowAll';

export default {
  title: `${title}ShowAll`,
  component: ShowAll,
} as ComponentMeta<typeof ShowAll>;

const Template: ComponentStory<typeof ShowAll> = (args) => (
  <ShowAll {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
