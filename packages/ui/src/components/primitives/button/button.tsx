"use client"
import { Button as UIButton, type ButtonProps as UIButtonProps } from "@repo/yamada-ui"
import { forwardRef, memo } from "react"

type ButtonOptions = {
  href?: string
}

export interface ButtonProps extends UIButtonProps, ButtonOptions {}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <UIButton ref={ref} {...props} />
  }),
)

Button.displayName = "Button"
