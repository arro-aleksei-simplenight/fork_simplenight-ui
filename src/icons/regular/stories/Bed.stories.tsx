import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Bed from '../Bed';

export default {
  title: `${title}Bed`,
  component: Bed,
} as ComponentMeta<typeof Bed>;

const Template: ComponentStory<typeof Bed> = (args) => <Bed {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
