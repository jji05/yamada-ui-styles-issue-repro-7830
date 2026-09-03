import { theme } from "@repo/theme"
import type { Meta, StoryFn } from "@storybook/react"
import { Heading } from "./heading"

type Story = StoryFn<typeof Heading>

// Issue start
const fontSizes = Object.keys(theme.fontSizes ?? {})
// Issue end

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Primitive Components / Heading",
  argTypes: {
    // Issue start
    fontSize: {
      control: { type: "select" },
      options: Object.values(fontSizes),
      description: "The font size of the heading",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
    // Issue end
  },
}

export default meta

export const Basic: Story = (args) => {
  return <Heading {...args}>Heading</Heading>
}
