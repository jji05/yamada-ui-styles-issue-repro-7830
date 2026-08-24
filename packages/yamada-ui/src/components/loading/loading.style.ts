import { defineComponentStyle } from "@yamada-ui/react"

export const loadingStyle = defineComponentStyle({
  base: {
    color: ["colorScheme.500", "colorScheme.600"],
    fontSize: "1em",
  },
})

export type LoadingStyle = typeof loadingStyle
