import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import Simplenight from './SimplenightLogo';

export default {
  title: `${titles.images}SimplenightLogo`,
  component: Simplenight,
} as ComponentMeta<typeof Simplenight>;

const Template: ComponentStory<typeof Simplenight> = (args) => (
  <DocsWrapper width={500}>
    <Simplenight {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
