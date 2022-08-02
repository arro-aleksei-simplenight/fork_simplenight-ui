import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ImageCarousel from '../ImageCarousel';

export default {
  title: `${title}ImageCarousel`,
  component: ImageCarousel,
} as ComponentMeta<typeof ImageCarousel>;

const Template: ComponentStory<typeof ImageCarousel> = (args) => (
  <ImageCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
