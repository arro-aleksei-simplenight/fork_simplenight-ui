import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import Language from '../Language';

export default {
  title: `${title}Language`,
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = (args) => (
  <Language {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
