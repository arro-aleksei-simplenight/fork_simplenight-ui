import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import HotTub from '../HotTub';

export default {
  title: `${title}HotTub`,
  component: HotTub,
} as ComponentMeta<typeof HotTub>;

const Template: ComponentStory<typeof HotTub> = (args) => <HotTub {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
