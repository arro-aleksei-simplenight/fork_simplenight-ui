import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Spa from '../Spa';

export default {
  title: `${title}Spa`,
  component: Spa,
} as ComponentMeta<typeof Spa>;

const Template: ComponentStory<typeof Spa> = (args) => <Spa {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
