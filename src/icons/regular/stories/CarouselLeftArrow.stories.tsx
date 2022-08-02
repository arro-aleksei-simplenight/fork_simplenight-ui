import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CarouselLeftArrow from '../CarouselLeftArrow';

export default {
  title: `${title}CarouselLeftArrow`,
  component: CarouselLeftArrow,
} as ComponentMeta<typeof CarouselLeftArrow>;

const Template: ComponentStory<typeof CarouselLeftArrow> = (args) => (
  <CarouselLeftArrow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
