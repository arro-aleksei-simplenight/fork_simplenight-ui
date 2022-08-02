import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Simplenight from '../SimplenightLogo';

export default {
  title: `${title}SimplenightLogo`,
  component: Simplenight,
} as ComponentMeta<typeof Simplenight>;

const Template: ComponentStory<typeof Simplenight> = (args) => (
  <Simplenight {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
