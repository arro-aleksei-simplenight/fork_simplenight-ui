import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import KingBed from '../KingBed';

export default {
  title: `${title}KingBed`,
  component: KingBed,
} as ComponentMeta<typeof KingBed>;

const Template: ComponentStory<typeof KingBed> = (args) => (
  <KingBed {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
