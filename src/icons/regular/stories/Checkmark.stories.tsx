import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Checkmark from '../Checkmark';

export default {
  title: `${title}Checkmark`,
  component: Checkmark,
} as ComponentMeta<typeof Checkmark>;

const Template: ComponentStory<typeof Checkmark> = (args) => (
  <Checkmark {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
