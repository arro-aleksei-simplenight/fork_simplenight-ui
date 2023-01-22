import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import EmptyState from './EmptyState';

export default {
  title: `${titles.images}EmptyState`,
  component: EmptyState,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <DocsWrapper width={500}>
    <EmptyState {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
