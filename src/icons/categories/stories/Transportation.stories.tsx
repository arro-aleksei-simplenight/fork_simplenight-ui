import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Transportation from '../Transportation';

export default {
  title: `${title}Transportation`,
  component: Transportation,
} as ComponentMeta<typeof Transportation>;

const Template: ComponentStory<typeof Transportation> = (args) => (
  <Transportation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
