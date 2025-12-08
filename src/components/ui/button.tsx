import * as React from "react"
// Note: intentionally not using Radix Slot here to keep asChild behavior
// handled via React.cloneElement which is simpler for this project.
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classNameFinal = cn(buttonVariants({ variant, size, className }))

    if (asChild) {
      // Support a single valid React element child (preferred). If multiple or
      // non-element children are passed, fall back to rendering a regular
      // <button> so the UI still renders instead of throwing.
      const childArray = React.Children.toArray(children)
      const validElements = childArray.filter(React.isValidElement) as React.ReactElement[]

      if (validElements.length === 1) {
        const child = validElements[0] as React.ReactElement<any, any>
        return React.cloneElement(child, {
          ...(props as any),
          className: cn((child.props as any)?.className, classNameFinal),
          ref,
        } as any)
      }

      // Fallback: render a normal button if we don't have exactly one element
      return (
        <button className={classNameFinal} ref={ref} {...props}>
          {children}
        </button>
      )
    }

    return (
      <button className={classNameFinal} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
