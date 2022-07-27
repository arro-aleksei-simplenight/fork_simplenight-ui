import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import GasStation from '../GasStation';

export default {
  title: `${title}GasStation`,
  component: GasStation,
} as ComponentMeta<typeof GasStation>;

const Template: ComponentStory<typeof GasStation> = (args) => (
  <GasStation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
