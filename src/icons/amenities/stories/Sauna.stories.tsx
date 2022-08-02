import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Sauna from '../Sauna';

export default {
  title: `${title}Sauna`,
  component: Sauna,
} as ComponentMeta<typeof Sauna>;

const Template: ComponentStory<typeof Sauna> = (args) => <Sauna {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
