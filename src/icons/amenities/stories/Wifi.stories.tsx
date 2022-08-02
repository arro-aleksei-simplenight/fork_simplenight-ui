import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Wifi from '../Wifi';

export default {
  title: `${title}Wifi`,
  component: Wifi,
} as ComponentMeta<typeof Wifi>;

const Template: ComponentStory<typeof Wifi> = (args) => <Wifi {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
