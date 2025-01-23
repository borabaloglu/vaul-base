import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { merge } from "@/libs/utils"

/********
Button Variants
********/
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 text-sm",
  {
    variants: {
      variant: {
        solid: "bg-accent text-accent-fg hover:bg-accent/80",
        ghost: "text-accent hover:bg-subtle hover:text-fg",
        outline:
          "border border-accent bg-bg text-accent shadow-elevation-low hover:bg-accent hover:text-accent-fg",
        link: "text-link-fg hover:underline",
        destructive: "bg-danger text-danger-fg hover:bg-danger/80",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
)

/********
Button
********/
export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={merge(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
