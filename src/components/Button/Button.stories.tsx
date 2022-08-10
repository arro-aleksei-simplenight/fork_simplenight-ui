import React from 'react';
import { ComponentStory } from '@storybook/react';
import Arrow from '../../icons/regular/Arrow';

import Button from './Button';

const title = 'SimplenightUI/';

export default {
  title: `${title}Button`,
  component: Button,
  subcomponents: Arrow,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const withIcon = () => (
  <Button label="With Icon">
    <Arrow className="h-5 w-5" />
  </Button>
);

export const Click = Template.bind({});
Click.args = {
  label: 'Click',
};
