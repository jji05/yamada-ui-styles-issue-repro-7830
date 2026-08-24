import { defineComponentStyle } from "@yamada-ui/react"

export const lineChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{line-stroke}",
    "--tooltip-swatch-color": "{line-stroke}",
  },
})

export type LineChartStyle = typeof lineChartStyle
