import { defineComponentStyle } from "@yamada-ui/react"

export const closeButtonStyle = defineComponentStyle({
  defaultProps: {
    size: "xs",
    variant: "ghost",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
