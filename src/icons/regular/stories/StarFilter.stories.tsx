import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import StarFilter from '../StarFilter';

export default {
  title: `${title}StarFilter`,
  component: StarFilter,
} as ComponentMeta<typeof StarFilter>;

const Template: ComponentStory<typeof StarFilter> = (args) => (
  <StarFilter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
