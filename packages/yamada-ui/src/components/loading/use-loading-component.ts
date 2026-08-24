import type { Component } from "@yamada-ui/react"
import { useMemo } from "react"
import { isString, toPascalCase } from "@yamada-ui/react"
import { Loading } from "./"

export const useLoadingComponent = (
  scheme: Loading.Scheme,
): Component<"svg", Loading.Props> => {
  const Component = useMemo(
    () =>
      Loading[toPascalCase(scheme) as keyof typeof Loading] as Component<
        "svg",
        Loading.Props
      >,
    [scheme],
  )

  return Component
}

export const getLoadingComponent = (
  scheme: Loading.Scheme,
): Component<"svg", Loading.Props> => {
  return Loading[toPascalCase(scheme) as keyof typeof Loading] as Component<
    "svg",
    Loading.Props
  >
}

export const isLoadingScheme = (scheme: any): scheme is Loading.Scheme => {
  return isString(scheme) && toPascalCase(scheme) in Loading
}
