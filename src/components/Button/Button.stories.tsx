import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

const title = 'SimplenightUI/';

export default {
  title: `${title}Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Test = Template.bind({});
Test.args = {
  label: 'Test!',
};

export const Click = Template.bind({});
Click.args = {
  label: 'Click',
};
