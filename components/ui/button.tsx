import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 ease-[var(--ease-enterprise)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_14px_34px_rgb(19_137_198_/_0.22)] hover:-translate-y-0.5 hover:bg-[#0f79b0]",
        secondary:
          "bg-card text-foreground luxury-border hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary",
        ghost: "text-foreground hover:bg-muted hover:text-primary",
        accent:
          "bg-accent text-accent-foreground shadow-[0_14px_34px_rgb(250_116_13_/_0.22)] hover:-translate-y-0.5 hover:bg-[#e86609]",
        link: "h-auto p-0 text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-9 px-3",
        default: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
