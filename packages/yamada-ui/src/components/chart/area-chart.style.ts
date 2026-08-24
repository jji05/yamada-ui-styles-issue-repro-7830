import { defineComponentStyle } from "@yamada-ui/react"
import { lineChartStyle } from "./line-chart.style"

export const areaChartStyle = defineComponentStyle({
  base: lineChartStyle.base,
})

export type AreaChartStyle = typeof areaChartStyle
