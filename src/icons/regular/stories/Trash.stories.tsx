import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Trash from '../Trash';

export default {
  title: `${title}Trash`,
  component: Trash,
} as ComponentMeta<typeof Trash>;

const Template: ComponentStory<typeof Trash> = (args) => <Trash {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
