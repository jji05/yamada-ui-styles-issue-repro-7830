import { theme } from "@repo/theme"
import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "./button"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Primitive Components / Button",
  argTypes: {
    // Comment out this line
    startIcon: {
      control: "select",
      options: Object.keys(theme.fontSizes),
      description: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    // Until here and remove the storybook cache folder and the themes will work again
  },
}

export default meta

export const Basic: Story = (args) => {
  return <Button {...args}>Button</Button>
}
