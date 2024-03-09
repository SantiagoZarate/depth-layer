import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { DepthLayer } from "./DepthLayer";

const meta = {
  id: "depthlayer-default--docs",
  title: "DepthLayer",
  component: DepthLayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hoverable: {
      control: "boolean",
    },
    clickable: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof DepthLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof DepthLayer> = (args) => (
  <DepthLayer {...args}>
    <img
      id="img"
      className="w-32 h-32 object-cover rounded-full"
      src="https://pics.craiyon.com/2023-07-19/372d10a1044941c0a471ac071b686a6a.webp"
      alt=""
    />
  </DepthLayer>
);

export const Default: Story = Template.bind({});
Default.args = {
  variant: "default",
};

export const Inner: Story = Template.bind({});
Inner.args = {
  variant: "inner",
};
