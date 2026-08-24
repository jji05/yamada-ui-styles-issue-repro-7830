import { defineComponentStyle } from "@yamada-ui/react"

export const radarChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{radar-stroke}",
    "--tooltip-swatch-color": "{radar-stroke}",
  },
})

export type RadarChartStyle = typeof radarChartStyle
