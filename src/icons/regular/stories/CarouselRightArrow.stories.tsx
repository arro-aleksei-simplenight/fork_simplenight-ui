import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import CarouselRightArrow from '../CarouselRightArrow';

export default {
  title: `${title}CarouselRightArrow`,
  component: CarouselRightArrow,
} as ComponentMeta<typeof CarouselRightArrow>;

const Template: ComponentStory<typeof CarouselRightArrow> = (args) => (
  <CarouselRightArrow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
