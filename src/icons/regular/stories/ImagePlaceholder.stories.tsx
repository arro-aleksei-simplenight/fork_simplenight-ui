import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import title from './title';

import ImagePlaceholder from '../ImagePlaceholder';

export default {
  title: `${title}ImagePlaceholder`,
  component: ImagePlaceholder,
} as ComponentMeta<typeof ImagePlaceholder>;

const Template: ComponentStory<typeof ImagePlaceholder> = (args) => (
  <ImagePlaceholder {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-primary-1000 w-8',
};

export const Dark = Template.bind({});
Dark.args = {
  className: 'text-dark-1000 w-8',
};
