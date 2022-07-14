import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExternalLink from './ExternalLink';

const title = 'SimplenightUI/';

export default {
  title: `${title}ExternalLink`,
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Google = Template.bind({});
Google.args = {
  href: 'https://google.com',
  children: <>Google</>,
};
