import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DocsWrapper from '@/helpers/components/DocsWrapper';
import { titles } from '@/constants';
import OrderLookupIcon from './OrderLookupIcon';

export default {
  title: `${titles.images}OrderLookupIcon`,
  component: OrderLookupIcon,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'error', 'warning'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof OrderLookupIcon>;

const Template: ComponentStory<typeof OrderLookupIcon> = (args) => (
  <DocsWrapper width={500}>
    <OrderLookupIcon {...args} />
  </DocsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
