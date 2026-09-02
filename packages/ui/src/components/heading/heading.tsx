"use client"

import type { HTMLStyledProps, ThemeProps } from "@yamada-ui/react"
import { createComponent, styled } from "@yamada-ui/react"
import type { HeadingStyle } from "./heading.style"
import { headingStyle } from "./heading.style"

/**
 * Default font sizes for different heading levels
 *
 * @remarks
 * Provides default font size styling across different heading levels
 * h1 is the largest, while h6 is the smallest for visual hierarchy
 */
export const HEADING_LEVELS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const

export type HeadingLevel = (typeof HEADING_LEVELS)[number]

export const DEFAULT_FONT_SIZES = {
  h1: "3xl",
  h2: "2xl",
  h3: "xl",
  h4: "lg",
  h5: "md",
  h6: "sm",
} as const satisfies Record<HeadingLevel, string>
/**
 * Default font weights for different heading levels
 *
 * @remarks
 * Provides default font weight styling across different heading levels
 * h1-h3 use bold, while h4-h6 use semibold for visual hierarchy
 */
export const DEFAULT_FONT_WEIGHTS = {
  h1: "bold",
  h2: "bold",
  h3: "bold",
  h4: "semibold",
  h5: "semibold",
  h6: "semibold",
} as const satisfies Record<HeadingLevel, string>
/**
 * Available font weights
 *
 * @remarks
 * These weights are available for use in the {@link Heading} component
 */
export enum FONT_WEIGHTS {
  BOLD = "bold",
  HAIRLINE = "hairline",
  THIN = "thin",
  LIGHT = "light",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  EXTRABOLD = "extrabold",
  BLACK = "black",
}

/**
 * Props for {@link Heading} component
 *
 * @remarks
 * Extends Yamada UI's HeadingProps with a custom 'as' prop
 * Allows specifying heading level while omitting the original 'as' prop
 *
 * @warn
 * RECOMMENDED: Use `Heading.h1`, `Heading.h2`, etc. instead of manually specifying 'as'
 *
 * @example
 * // Recommended usage
 * <Heading.h2>Section Title</Heading.h2>
 *
 * @example
 * // Alternative usage (not recommended)
 * <Heading as="h2">Section Title</Heading>
 */
export interface HeadingProps extends Omit<HTMLStyledProps<"h1">, "as">, ThemeProps<HeadingStyle> {
  /**
   * Specifies the heading level (h1-h6)
   *
   * @defaultValue 'h1'
   * @warn Prefer using `Heading.h1`, `Heading.h2`, etc.
   */
  as?: HeadingLevel
}

const {
  PropsContext: HeadingPropsContext,
  usePropsContext: useHeadingPropsContext,
  withContext,
} = createComponent<HeadingProps, HeadingStyle>("heading", headingStyle)

export { HeadingPropsContext, useHeadingPropsContext }

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see https://yamada-ui.com/docs/components/heading
 */
export const Heading = withContext<"h1", HeadingProps>(
  ({ children, as = "h1", ...rest }: HeadingProps) => {
    const fontSize = DEFAULT_FONT_SIZES[as]
    const fontWeight = DEFAULT_FONT_WEIGHTS[as]

    return (
      <styled.h1 as={as} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
        {children}
      </styled.h1>
    )
  },
)()
