import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Casino from '../Casino';

export default {
  title: `${title}Casino`,
  component: Casino,
} as ComponentMeta<typeof Casino>;

const Template: ComponentStory<typeof Casino> = (args) => <Casino {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
