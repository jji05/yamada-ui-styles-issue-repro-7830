import { defineComponentStyle } from "@yamada-ui/react"
import { pieChartStyle } from "./pie-chart.style"

export const donutChartStyle = defineComponentStyle({
  base: pieChartStyle.base,
})

export type DonutChartStyle = typeof donutChartStyle
