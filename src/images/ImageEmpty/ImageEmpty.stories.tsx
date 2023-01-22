import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import ImageEmpty from './ImageEmpty';

export default {
  title: `${titles.images}ImageEmpty`,
  component: ImageEmpty,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ImageEmpty>;

const Template: ComponentStory<typeof ImageEmpty> = (args) => (
  <DocsWrapper width={500}>
    <ImageEmpty {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
