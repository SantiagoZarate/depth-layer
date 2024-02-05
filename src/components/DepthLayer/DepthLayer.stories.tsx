import type { ComponentStory, Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { DepthLayer } from './index';

const meta = {
  title: 'myComponents/DepthLayer',
  component: DepthLayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof DepthLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof DepthLayer> = (args) => (
  <DepthLayer>
    button
  </DepthLayer>
)

export const Default: Story = Template.bind({})
Default.args = {
  variant: 'default'
};

export const Inner: Story = Template.bind({})
Inner.args = {
  variant: 'inner'
};
